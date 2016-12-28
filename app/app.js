import angular from 'angular';
import 'angular-route';

angular.module('app', [
  'ngRoute'
])
.config(['$locationProvider', '$routeProvider',
  ($locationProvider, $routeProvider) => {
    $routeProvider.otherwise({redirectTo: '/'});
  }
])
.directive('timeDirective', () => {

  const getDate = () => {
    const date = new Date();
    return addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
  };

  const addZero = (i) => {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  };

  const DELAY = 1000;

  return {
    compile: (el) => {
      el.html(getDate());
      setInterval(() => { el.html(getDate()); }, DELAY);
    }
  };
});
