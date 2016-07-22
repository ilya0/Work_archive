angular
  .module('myApp', ['ui.router'])
  .config(configuration);
configuration.$inject = ["$stateProvider", "$urlRouterProvider"]; //injecting as nonchangable parameters

function configuration($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('search', {
      url: '',
      templateUrl: 'partials/search.html'
    })
    .state('list', {
      url: '/results?s',
      templateUrl: 'partials/list.html',
      controller: 'AppController as ctrl'
    })

}
