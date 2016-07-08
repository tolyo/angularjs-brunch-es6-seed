import angular from 'angular';
import 'angular-route';
import IndexCtrl from './IndexCtrl';

angular.module('app', [
  'ngRoute'
])
.config(['$locationProvider', '$routeProvider',
  ($locationProvider, $routeProvider) => {
    $routeProvider.otherwise({redirectTo: '/'});
  }
])
.controller('IndexCtrl', IndexCtrl);
