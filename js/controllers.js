function mainCtrl($scope) {
  $scope.fakeDB = [
      {
        manu: 'GE',
        name: 'TRAM',
        model: '250SL - 451SL',
        errors: [
        {
           errorcode: '0',
           problem: 'Tram software update complete or Tram has been discharged.',
           solution: 'No action required/Normal operation'
        },
        {
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
            errorcode: 'SY-16',
            problem: 'Power fail signal true time is too long',
            solution: 'Replace Main CPU Board'
          },{
        errorcode: 'SY-19',
        problem: 'Software detected power supply out of limits failure',
        solution: 'Replace Power Supply'
          }
        ]
      }
  ];

  $scope.updateResults = function() {
      console.log($scope.fakeDB);
      $scope.results = $scope.fakeDB;
      if($('#searchText').val() == "") $scope.results = {};
  };

}
