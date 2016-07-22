angular
.module('movieApp',['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/search');

    $stateProvider

        // route1 STATES AND NESTED VIEWS ========================================
        .state('search', {
            url: '/search',
            templateUrl: '/partials/partial-route1.html',
            controller: 'appController as appCtnrl'
        })

                // route1 STATES AND NESTED VIEWS ========================================
        .state('list', { //?s allows a search variable to be passed in
            url: '/list?s',
            templateUrl: '/partials/partial-route2.html',
            controller: 'listController as listCtnrl'
        });


});
