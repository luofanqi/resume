/**
 * Created by hxsd on 2016/8/4.
 */
myapp.controller("homeCtrl",function($scope,$http,$ionicScrollDelegate){
    $http.get("views/home/items.json").success(function(data){
        $scope.items=data;
    });
    $http.get("views/home/startitems.json").success(function(data){
        $scope.startitems=data;
    });

    $scope.page=0;
    $scope.refresh=function(){
        $http.get("views/home/items.json").success(function(data){
            $scope.items=data;
            $scope.page=0;
        }).finally(function(){
            $scope.$broadcast("scroll.refreshComplete");
        })
    };

    $scope.infinite=function(){
        $http.get("views/home/items.json").success(function(data){
            Array.prototype.push.apply($scope.items,data);
            $scope.page++;
        }).finally(function(){
            $scope.$broadcast("scroll.infiniteScrollComplete");
        });
    };

    $scope.toggle=false;
    $scope.icon="更多";
    $scope.more=function(){
        $scope.toggle=!$scope.toggle;
        $scope.toggle ? $scope.icon="收起" : $scope.icon="更多";
        if($scope.toggle==false){$ionicScrollDelegate.scrollTop(true);}
    };
});