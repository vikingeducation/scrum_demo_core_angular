// ----------------------------------------
// ExamplesCtrl
// ----------------------------------------


Demo.controller('ExamplesCtrl',
  ['$scope', '$timeout', '$http', '_',
  function($scope, $timeout, $http, _) {

    $scope.message = 'Hi there from the ExamplesCtrl!';

    $scope.time = Date.now();

    $scope.onClick = function() {
      alert('You clicked something!');
    };

    $scope.toggle = function() {
      $scope.isHidden = !$scope.isHidden;
    };

    $scope.$watch('isHidden', function() {
      $scope.isHidden === undefined ||
      alert('Something happened to `isHidden`!');
    });

    $scope.onMouseEvent = function(e) {
      var x = e.pageX;
      var y = e.pageY;
      $scope.coords = [
        'x: ',
        x,
        ', y: ',
        y
      ].join('');
    };

    $scope.words = [
      'Hi',
      'Bye',
      'Hello',
      'Goodbye'
    ];

    $scope.values = [
      'one',
      'one',
      'two',
      'two',
      'three',
      'three'
    ];


    $scope.processForm = function(form){
      console.log(form);

      var isValid = _.every([form.email, form.password], function(item) {
        return item.$valid;
      });

      if (isValid) {
        alert('Form valid! Submitting...');
      } else {
        alert('Form invalid! Bad!');
      }
    };


    $scope.callTimeout = function() {
      $timeout(alert, 1000, false, 'Hi $timeout!');
    };


    $scope.createUser = function() {
      $http({
        url: 'http://jsonplaceholder.typicode.com/users',
        method: 'POST',
        data: 'name=Fred+Beans',
        headers: {
          "Content-Type": 'application/x-www-form-urlencoded'
        }
      })
        .then(function(response) {
          alert(response.data.name);
          console.log(response);
        });
    };

  }]);





