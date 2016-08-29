/**
 * Created by hxsd on 2016/8/4.
 */
myapp.controller("puppyCtrl",function($scope,$http){
    $http.get("views/puppy/puppy.json").success(function(data){
        $scope.puppys=data;
    });

    $scope.page=0;
    $scope.refresh=function(){
        $http.get("views/puppy/puppy.json").success(function(data){
            $scope.puppys=data;
            $scope.page=0;
        }).finally(function(){
            $scope.$broadcast("scroll.refreshComplete");
        })
    };

    $scope.infinite=function(){
        $http.get("views/puppy/puppy.json").success(function(data){
            Array.prototype.push.apply($scope.puppys,data);
            $scope.page++;
        }).finally(function(){
            $scope.$broadcast("scroll.infiniteScrollComplete");
        });
    };

    $scope.add=function(num){
        $scope.puppys[num].like++
    };
});