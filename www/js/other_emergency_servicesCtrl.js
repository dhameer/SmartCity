angular.module('starter.controllers')



.controller("other_emergency_servicesCtrl", function($scope){

  $scope.groups = [];
  
  $scope.groups = [
    { name: 'Suicide Helpline', id: 1, items: [{ subName: 'Suicide Helpline Description', subId: '1-1' }]},
    { name: 'Child Line', id: 1, items: [{ subName: 'Child Line Description', subId: '1-1' }]},
    { name: 'Alcoholics Anonymous', id: 1, items: [{ subName: 'Alcoholics Anonymous Description', subId: '1-1' }]},
    { name: 'Narcotics Anonymous', id: 1, items: [{ subName: 'Narcotics Anonymous (NA) is a non-profit fellowship of men and women for whom drugs had become a major problem. We are recovering addicts who meet regularly to help each other stay clean.', subId: '1-1' }]},
    { name: 'Lifeline', id: 1, items: [{ subName: 'Lifeline Description', subId: '1-1' }]},
    { name: 'Responsible Gambling Hotline', id: 1, items: [{ subName: 'Responsible Gambling Hotline Description', subId: '1-1' }]},    
  ];

  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
  
})          


;
