function mainCtrl($scope) {
  $scope.fakeDB = fakeDB;


  $scope.updateSelects = function() {
    $scope.models = [];
    angular.forEach($scope.fakeDB, function(device) {
        if(device.name == $scope.deviceSelect.name) {
        $scope.models.push(device);
        }
        });

    $scope.errors = $scope.deviceSelect.errors;
  };

  $scope.viewError = function() {
    if($scope.errorSelect) {
      $scope.selectedDevice = $scope.deviceSelect;
      $scope.selectedError = $scope.errorSelect;
      $('#myTab a[href="#model2"]').tab('show');
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
