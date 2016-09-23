angular.module('static', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('static').config(function($stateProvider) {

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'static/partial/home/home.html'
    });
    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'static/partial/about/about.html'
    });
    /* Add New States Above */

});

