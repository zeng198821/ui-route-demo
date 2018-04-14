/**
 * Created by zeng on 18-1-31.
 */
var app = angular.module('myApp', ['ui.router','oc.lazyLoad']);
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('css/antd.min.css', {
        url: 'css/antd.min.css',
        templateUrl: '/css/antd.min.css'

    });
    $stateProvider.state('partials/startApp.js', {
        url: 'partials/startApp.js',
        templateUrl: 'partials/startApp.js'
    });
    $stateProvider.state('partials/secondApp.js', {
        url: 'partials/secondApp.js',
        templateUrl: 'partials/secondApp.js'
    });
    $stateProvider.state('start', {
        url: '/start',
        templateUrl: 'partials/start.html',
        controller: "startCtrl as startCtrl",
        resolve: {
            store: function ($ocLazyLoad) {
                return $ocLazyLoad.load(
                    {
                        name: "startCtrl",  //module name is "store"
                        files: ["partials/startApp.js"]
                    }
                )
            }
        }
    });

    $stateProvider.state('second', {
            url: '/second',
            templateUrl: 'partials/second.html'
    });

});