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
      }
];

function getManus() {
  $.foreach(fakeDB, function() {

  });
}