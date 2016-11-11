angular.module('starter.controllers')

.controller('mayorsMessageCtrl', function($scope, $state) {

  $scope.gotoReadMayorsMessage = function(){
    $state.go("app.mayors_message");
  }	

  $scope.gotoMayorsMessageList = function(){
    $state.go("app.mayors_message_list");
  }	  

})

;
