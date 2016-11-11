angular.module('starter.controllers')

.controller('emergencyCtrl', function($scope, $state) {

  $scope.gotoOtherEmergency = function(){
    $state.go("app.other_emergency_services");
  }

})



;
