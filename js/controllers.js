function mainCtrl($scope, $http) {
  $http.get('./bin/ajax.php', {params:{action:'get_devices'}}).success(function(data) {
    $scope.devices = data;
  });

  $scope.updateModels = function() {
    $http.get('./bin/ajax.php', {params:{action:'get_models', manu: $scope.deviceSelect.manu, name: $scope.deviceSelect.name}}).success(function(data) {
      $scope.errors = {};
      $scope.models = data;
    });
  };

  $scope.updateErrors = function() {
    $http.get('./bin/ajax.php', {params:{action:'get_errors', manu: $scope.deviceSelect.manu, name: $scope.deviceSelect.name, model: $scope.modelSelect.model}}).success(function(data) {
      $scope.errors = data;
    });
  };

  $scope.viewError = function() {
    if($scope.errorSelect) {
      $http.get('./bin/ajax.php', {params:{action:'get_result', manu: $scope.deviceSelect.manu, name: $scope.deviceSelect.name, model: $scope.modelSelect.model, error_code: $scope.errorSelect.error_code}}).success(function(data) {
        $('#myTab a[href="#model2"]').tab('show');
        $scope.result = data;
      });
    }
  };

  $scope.submitNewEntry = function() {
    console.log(addEntryForm);
    $http.post('./bin/ajax.php?action=add_entry', {
      "manu": $scope.inputManu, 
      "name": $scope.inputName,
      "model": $scope.inputModel,
      "error_code": $scope.inputErrorCode,
      "meaning": $scope.inputProblem,
      "solution": $scope.inputSolution
    }).success(function(data) {
      console.log(data);
    });
  };
}
