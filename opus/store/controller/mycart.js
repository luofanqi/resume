/**
 * Created by hxsd on 2016/7/28.
 */
var mycart=angular.module("mycart",[]);
mycart.factory("shopCart",function(){
    var cart=[];
    return {
        add:function(product){
            // 当添加商品时，先看看购物车中有没有该商品
            var flag = false;
            for(var index=0;index<cart.length;index++){
                if(cart[index].product.name == product.name){
                    flag = true;
                    // 这时说明购物车中原来已经有了该商品，我们要做的是将该商品的数量+1
                    cart[index].number += 1;
                    break;
                };
            };
            // 如果购物车中原来没有该商品
            if(!flag){
                var item = {product:product, number:1}; // 构造一个item项
                cart.push(item);        // 将该item放入购物车
            };
        },
        findAll:function(){
            return cart;
        },
        remove:function(name){
            for(var index=0;index<cart.length;index++){
                if(cart[index].product.name == name){
                    // 说明找到了要删除的商品
                    cart.splice(index,1);
                    break;
                }
            }
        },
        clear:function(){
            cart.length = 0;
        }
    };
});
mycart.controller("cartCtrl",function($scope,shopCart){
    var cartData=shopCart.findAll();
    $scope.totalNum=function(){
        var total=0;
        for(var i=0;i<cartData.length;i++){
            total+=cartData[i].number;
        };
        return total;
    };
    $scope.totalCost=function(){
        var total=0;
        for(var i=0;i<cartData.length;i++){
            total+=cartData[i].number*cartData[i].product.price;
        };
        return total;
    };
});

