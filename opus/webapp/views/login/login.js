/**
 * Created by hxsd on 2016/8/3.
 */
myapp.controller("loginCtrl",function($scope,$state){
    $scope.data={
        email:"",
        password:""
    };
    $scope.clear=function(){
        $scope.data.text=$scope.data.password="";
    };
    $scope.toRegister=function(){
        $state.go("register")
    };
});