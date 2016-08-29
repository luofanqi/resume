/**
 * Created by hxsd on 2016/7/28.
 */
angular.module("myapp")
    .constant("ac","btn-primary")
    .controller("listCtrl",function($scope,ac,shopCart){
    $scope.clickCategory=null;//创建一个东西用来储存点击的类别
    //让点击的类别储存到这个东西里面
    $scope.selectCategory=function(category){
        $scope.clickCategory=category;
        $scope.currentPage=1;//点击时候默认显示第一页
    };
    //过滤器，判断类别是否过滤，显示当前点击类别的内容
    $scope.showProduct=function(product){
        return $scope.clickCategory==product.category ||$scope.clickCategory==null;
    };
    //让点击的btn加上class的函数
    $scope.clickClass=function(category){
        return $scope.clickCategory==category ? ac : "";
    };
    $scope.currentPage=1;
    $scope.pageSize=3;
    //点击脚标切换页面
    $scope.changePage=function(page){
        $scope.currentPage=page;
    };
    //让点击的脚标加上class的函数
    $scope.clickClassNum=function(page){
        return $scope.currentPage==page ? ac : "";
    };
    $scope.addToCart=function(product){
        shopCart.add(product);
    };
})