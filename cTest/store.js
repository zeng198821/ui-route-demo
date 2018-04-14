/**
 * Created by zeng on 18-4-14.
 */
angular.module("store", [])
    .controller("StoreCtrl", function () {
        var cart = this;
        cart.message = "I'm a message from the controller";
    });