/**
 * Created by hxsd on 2016/8/3.
 */
myapp.controller("registerCtrl",function($scope,$state){
    $scope.clear=function(){
        $scope.dataForm.tel=$scope.dataForm.password=$scope.dataForm.name=$scope.dataForm.email="";
    };
    $scope.toLogin=function(){
        $state.go("login");
    };
});