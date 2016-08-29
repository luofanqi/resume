/**
 * Created by hxsd on 2016/7/28.
 */
angular.module("myapp").controller("checkoutCtrl",function($scope,shopCart){
    $scope.cartData=shopCart.findAll();
    //删除
    $scope.removeFromcart=shopCart.remove;
    //总金额
    $scope.totalMon=function(){
        var total=0
        for(var i=0;i<$scope.cartData.length;i++){
            total+=$scope.cartData[i].product.price*$scope.cartData[i].number;
        };
        return total;
    };
})