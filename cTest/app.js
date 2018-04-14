/**
 * Created by zeng on 18-4-14.
 */
angular.module('app',["ui.router", "oc.lazyLoad"])
    .config(function($stateProvider){
        $stateProvider.state('store', {
                templateUrl: '/cTest/store.tmpl.html',
                controller: 'StoreCtrl as store',
                resolve: {
                    store: function($ocLazyLoad){
                        return $ocLazyLoad.load(
                            {
                                name: "store",  //module name is "store"
                                files: ["/cTest/store.js"]
                            }
                        )
                    }
                }
            }
        )
    })

    .controller("AppCtrl", function($state){
        var app = this;
        app.click = function(){
            $state.go('store');
        }
    })