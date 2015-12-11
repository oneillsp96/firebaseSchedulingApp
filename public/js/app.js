var app = angular.module('scheduleApp', ['firebase']);

app.controller('mainController', ['$scope', '$firebase', function ($scope, $firebase) {

  var ref = new Firebase("https://glaring-heat-7252.firebaseio.com/days");
  var fb = $firebase(ref);
  
   // sync as object 
  var syncObject = fb.$asObject();
  
  // three way data binding
  syncObject.$bindTo($scope, 'days');
  
 // function to set the default data
  $scope.reset = function() {    

    fb.$set({
      monday: {
        name: 'Monday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      },
      tuesday: {
        name: 'Tuesday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      }
    });    

  };

}]);


  
  