/**
 * Created by hxsd on 2016/7/28.
 */
var myFilter=angular.module("myFilter",[]);
myFilter.filter("pageFilter",function(){
    return function(product,currentPage,pageSize){
        if(angular.isArray(product) && angular.isNumber(currentPage) && angular.isNumber(pageSize)){
            var startIndex=(currentPage-1)*pageSize;
            if(startIndex>product.length){
                return [];
            }else{
                return product.splice(startIndex,pageSize);//return product.slice(startIndex,startIndex+pageSize);
            };
        }else{
            return product;
        };
    };
});
myFilter.filter("numBtnFilter",function(){
    return function(products,pageSize){
        if(angular.isArray(products) && angular.isNumber(pageSize)){
            var newArr=[];
            var num=Math.ceil(products.length/pageSize);
            for(var i=0;i<num;i++){
                newArr.push(i+1);
            };
            return newArr;
        }else{
            return products;
        }
    };
});