angular.module('starter.controllers')

.controller('incidentCtrl', function($scope, $state) {

  $scope.gotoReportPothole = function(){
    $state.go("app.report_incident_pothole");
  }

  $scope.gotoReportThankYou = function(){
    $state.go("app.incident_thank_you");
  }  

})

;
