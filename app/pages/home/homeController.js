/**
 * @author Nitheesh T Ganesh
 * created on 20.12.2016
 */
(function() {
    'use strict';

    angular.module('NTGAngularSeed.pages.home')
        .controller('homeController', homeControllerFunction);

    /** @ngInject */
    function homeControllerFunction($scope) {
        var _self = this; //instance of this controller

        _self.text = "Home Controller";

    }

    homeControllerFunction.$inject = ['$scope'];

})();
