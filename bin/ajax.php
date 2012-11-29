<?php
if(isset($_GET['action'])) main($_GET['action']);

function main($action) {
  global $dbh;
  //orchestra
  //$dbh = new PDO('mysql:host=a.db.shared.orchestra.io;dbname=db_98938371', "user_98938371", "MlVgDkba1Mmn-,");
  //localhost
  $dbh = new PDO('mysql:host=localhost;dbname=db_98938371', "user_98938371", "MlVgDkba1Mmn-,");
  error_reporting(E_ALL);
  ini_set("display_errors", 1);

  if($action == "get_devices") {
    getDevices();
  } else if($action == "get_models") {
    getModels();
  } else if($action == "get_errors") {
    getErrors();
  } else if($action == "get_result") {
    getResult();
  } else if($action == "add_entry") {
    addEntry();
  }
}

function getDevices() {
  global $dbh;
  $sql = "SELECT DISTINCT `manu`, `name` FROM `db_entries` WHERE 1";
  $res = $dbh->query($sql, PDO::FETCH_ASSOC);
  echo json_encode($res->fetchAll());
}

function getModels() {
  if(isset($_GET['manu']) && isset($_GET['name'])) {
    $manu = $_GET['manu'];
    $name = $_GET['name'];
  } else {
    return;
  }
  global $dbh;
  $sth = $dbh->prepare("SELECT DISTINCT `model` FROM `db_entries` WHERE `manu` = ? AND `name` = ?");
  $sth->execute(array($manu, $name));
  $models = $sth->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($models);
}

function getErrors() {
  if(isset($_GET['manu']) && isset($_GET['name']) && isset($_GET['model'])) {
    $manu = $_GET['manu'];
    $name = $_GET['name'];
    $model = $_GET['model'];
  } else {
    return;
  }
  global $dbh;
  $sth = $dbh->prepare("SELECT DISTINCT `error_code` FROM `db_entries` WHERE `manu` = ? AND `name` = ? AND `model` = ?");
  $sth->execute(array($manu, $name, $model));
  $models = $sth->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($models);
}

function getResult() {
  if(isset($_GET['manu']) && isset($_GET['name']) && isset($_GET['model']) && isset($_GET['error_code'])) {
    $manu = $_GET['manu'];
    $name = $_GET['name'];
    $model = $_GET['model'];
    $error_code = $_GET['error_code'];
  } else {
    return -1;
  }
  global $dbh;
  $sth = $dbh->prepare("SELECT * FROM `db_entries` WHERE `manu` = ? AND `name` = ? AND `model` = ? AND `error_code` = ?");
  $sth->execute(array($manu, $name, $model, $error_code));
  $result = $sth->fetch(PDO::FETCH_ASSOC);
  echo json_encode($result);
}

function addEntry() {
  $data = file_get_contents("php://input");
  $objData = json_decode($data, true);
  if(isset($objData['manu']) && isset($objData['name']) && isset($objData['model']) && isset($objData['error_code']) && isset($objData['meaning']) && isset($objData['solution'])) {
    $manu = $objData['manu'];
    $name = $objData['name'];
    $model = $objData['model'];
    $error_code = $objData['error_code'];
    $meaning = $objData['meaning'];
    $solution = $objData['solution'];
  } else {
    return -1;
  }
  global $dbh;
  $sth = $dbh->prepare("INSERT INTO `db_entries` (`id`, `manu`, `name`, `model`, `error_code`, `meaning`, `solution`) VALUES (NULL, ?, ?, ?, ?, ?, ?);");
  $res = $sth->execute(array($manu, $name, $model, $error_code, $meaning, $solution));
  echo $res;
}
