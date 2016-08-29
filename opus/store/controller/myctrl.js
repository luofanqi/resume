/**
 * Created by hxsd on 2016/7/28.
 */
angular.module("myapp")
    .constant("categories","json/categories.json")
    .constant("products","json/products.json")
    .constant("orderUrl","json/order.json")
    .controller("myCtrl",function($scope,$http,categories,products,shopCart,$location,orderUrl){
    //生成类别
    $scope.data={};
    $http.get(categories).success(function(data){
        $scope.data.categories=data;
    });
    $http.get(products).success(function(data){
        $scope.data.products=data;
    });
    //用户信息
    $scope.data.shipping={};
    //完成订单，提交数据
    $scope.sendOrder=function(){
        var order=angular.copy($scope.data.shipping);
        order.products=shopCart.findAll();//储存购物车内的商品信息
        $http.post(orderUrl,order)//发送给服务器 post方法
            .success(function(data,status){
                $scope.data.shipping.orderId=data.orderId;//保存服务器返回的订单号
                shopCart.clear();
            })
            .error(function(data,status){
                $scope.data.shipping.errorStatus=status;//保存错误代码
            })
            .finally(function(){
                $location.path("thankYou")//跳转到这个页面
            })
    };

})