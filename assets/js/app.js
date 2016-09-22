// ----------------------------------------
// App.js
// ----------------------------------------

var Demo = angular.module('Demo', []);


// ----------------------------------------
// Underscore/Lodash for DI
// ----------------------------------------

Demo.factory('_', ['$window', function($window) {
  return $window._;
}]);


// ----------------------------------------
// Filter
// ----------------------------------------

Demo.filter('unique', function() {

  return function(collection) {
    // Container for unique items
    var uniqItems = [];

    // Loop through collection
    for (var i = 0; i < collection.length; i++) {

      // Get current item
      var item = collection[i];

      // Assume it is unique
      var isUnique = true;

      // Loop through all collected
      // unique items
      for (var j = 0; j < uniqItems.length; j++) {

        // Get the current unique item
        var uniqItem = uniqItems[j];

        // The item in the collection
        // is unique if it is NOT
        // found in the unique collection
        isUnique = (uniqItem !== item);

        // Break if we know it
        // is not unique
        if (!isUnique) {
          break;
        }
      }

      // If unique push onto
      // filtered collection
      if (isUnique) {
        uniqItems.push(item);
      }
    }

    // Return filtered collection
    return uniqItems;
  };

});

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
        url: 'http://reqres.in/api/users',
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





