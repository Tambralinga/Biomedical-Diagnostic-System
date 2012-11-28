if(isset($_GET['action'])) main($_GET['action']);

function main($action) {
  global $dbh;
  $dbh = new PDO('mysql:host=a.db.shared.orchestra.io;dbname=db_98938371', "user_98938371", "MlVgDkba1Mmn-,");
  if($action == "get_manus") {
    getManus();
  } 
}

function getManus() {
  $sql = "SELECT DISTINCT `manu` FROM `db_entries` WHERE 1";
}
