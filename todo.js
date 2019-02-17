angular.module('todoApp.main', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("hello"); 

  $stateProvider.state('hello',{
    url: '/hello',
    templateUrl: 'hello.html',
    controller:'todoApp.main.mainCtrl as v'
  });
})
  .controller('todoApp.main.mainCtrl', function() {
        var vm = this;
        vm.a1 = 123;
    });
  angular.module('todoApp.sub', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
  $locationProvider.html5Mode(true);
//  $urlRouterProvider.otherwise("hello"); 

  $stateProvider.state('sub',{
    url: '/sub',
    templateUrl: 'sub.html',
    controller:'todoApp.sub.subCtrl as v'
  });
})
  .controller('todoApp.sub.subCtrl', function() {
        var vm = this;
        vm.a1 = 34343;
    });
angular.module('todoApp.sub2', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
  $locationProvider.html5Mode(true);
//  $urlRouterProvider.otherwise("hello"); 

  $stateProvider.state('sub2',{
    url: '/sub2',
    templateUrl: 'sub2.html',
    controller:'todoApp.sub2.sub2Ctrl as v'
  });
})
  .controller('todoApp.sub2.sub2Ctrl', function() {
        var vm = this;
        vm.a1 = 34343;
    });
angular.module('todoApp', [
  'todoApp.main',
  'todoApp.sub',
  'todoApp.sub2'
  ]);