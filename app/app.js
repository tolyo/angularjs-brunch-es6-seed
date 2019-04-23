import angular from 'angular';
import 'angular-route';
import IndexComponent from './IndexComponent';

angular.module('app', [
  'ngRoute'
])
  .config(['$locationProvider', '$routeProvider',
    ($locationProvider, $routeProvider) => {
      $routeProvider.otherwise({redirectTo: '/'});
    }
  ])
  .component('index', IndexComponent);


