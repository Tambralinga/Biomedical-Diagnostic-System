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
}

var fakeDB = [
{
manu: 'GE',
        name: 'TRAM',
        model: '250SL - 451SL',
        errors: [
        {
id: 1,
    errorcode: '0',
    problem: 'Tram software update complete or Tram has been discharged.',
    solution: 'No action required/Normal operation'
        },
        {
id: 2,
    errorcode: '5',
    problem: 'Tram bus error.',
    solution: 'Replace Main Board'
        }
      ],
},
{
manu: 'GE',
      name: 'DINAMAP',
      model: 'PRO 1000V3',
      errors: [
      {
id: 3,
    errorcode: 'SY-16',
    problem: 'Power fail signal true time is too long',
    solution: 'Replace Main CPU Board'
      },{
id: 4, 
    errorcode: 'SY-19',
    problem: 'Software detected power supply out of limits failure',
    solution: 'Replace Power Supply'
      }
      ]
},
{
manu: 'Welch Allyn Spot',
      name: 'Vital Signs Monitor',
      model: '420',
      errors: [
      {errorcode: 'C12', problem: 'Device outside operating temperature range', solution: 'Change ambient temperature.'},
      {errorcode: 'C13', problem: 'Low battery level.', solution: 'Charge battery.'},
      ]
},
{
manu: 'Welch Allyn Spot',
      name: 'Vital Signs Monitor',
      model: '9600',
      errors: [
      {errorcode: 'C13', problem: 'Low battery level.', solution: 'Charge battery.'},
      {errorcode: 'C02', problem: 'Unable to release cuff pressure.', solution: 'Check tubing and connection integrity.'}
      ]
}
];

var db_manus = [
{
id: 1,
      name: "GE",
},
{
id: 2,
    name: "Vital Signs Monitor"
}
];

function getManus() {
  $.foreach(fakeDB, function() {

      });
}
