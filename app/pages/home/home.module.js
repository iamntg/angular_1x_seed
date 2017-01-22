/**
 * @author Nitheesh T Ganesh
 * created on 20.12.2016
 */
(function() {
    'use strict';

    angular.module('NTGAngularSeed.pages.home', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'pages/home/home.html',
                controller: 'homeController',
                controllerAs: "homeCtrl"
            });
    }

})();
