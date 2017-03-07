import angular from 'angular';

angular.module('Eggly', [
    'ngAnimate',
    'ui.router',
    'categories',
    'categories.bookmarks'
])
.config(($stateProvider, $urlRouterProvider) => {
    $stateProvider.state('eggly', {
        url: '',
        abstract: true
    });

    $urlRouterProvider.otherwise("/");
});