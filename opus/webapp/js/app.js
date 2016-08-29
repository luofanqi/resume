/**
 * Created by hxsd on 2016/8/3.
 */
var myapp=angular.module("myapp",["ionic"]);
myapp.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
       //-----------------------兼容安卓TAB--------------------------

        $ionicConfigProvider.platform.ios.tabs.style('standard');
        $ionicConfigProvider.platform.ios.tabs.position('bottom');
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('bottom');

        $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
        $ionicConfigProvider.platform.android.navBar.alignTitle('center');

        $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
        $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

        $ionicConfigProvider.platform.ios.views.transition('ios');
        $ionicConfigProvider.platform.android.views.transition('android');

       //-------------------------------------------------
        $ionicConfigProvider.backButton.text("");
        $ionicConfigProvider.backButton.previousTitleText("");
    $stateProvider
        .state("login",{
        url:"/login",
        templateUrl:"views/login/login.html",
        controller:"loginCtrl"
    }).state("register",{
        url:"/register",
        templateUrl:"views/register/register.html",
        controller:"registerCtrl"
    }).state("banner",{
        url:"/banner",
        templateUrl:"views/banner/banner.html"
    }).state("tabs",{
        url:"/tabs",
        abstract:true,
        templateUrl:"views/tabs/tabs.html"
    }).state("tabs.home",{
        url:"/home",
        views:{"tabs-home":{templateUrl:"views/home/home.html",controller:"homeCtrl"}},
    }).state("tabs.about",{
        url:"/about",
        views:{"tabs-about":{templateUrl:"views/about/about.html",controller:"aboutCtrl"}}
    }).state("tabs.contact",{
        url:"/about/contact",
        views:{"tabs-about":{templateUrl:"views/about/contact.html"}}
    }).state("tabs.address",{
        url:"/about/address",
        views:{"tabs-about":{templateUrl:"views/about/address.html"}}
    }).state("tabs.intro",{
        url:"/about/intro",
        views:{"tabs-about":{templateUrl:"views/about/intro.html"}}
    }).state("tabs.puppy",{
        url:"/puppy",
        views:{"tabs-home":{templateUrl:"views/puppy/puppy.html",controller:"puppyCtrl"}}
    }).state("tabs.page1",{
        url:"/page1",
        views:{"tabs-home":{templateUrl:"views/home/page1.html",controller:"homeCtrl"}}
    }).state("tabs.page2",{
        url:"/page2",
        views:{"tabs-home":{templateUrl:"views/home/page2.html",controller:"homeCtrl"}}
    }).state("tabs.page3",{
        url:"/page3",
        views:{"tabs-home":{templateUrl:"views/home/page3.html",controller:"homeCtrl"}}
    }).state("tabs.girls",{
        url:"/girls",
        views:{"tabs-home":{templateUrl:"views/girls/girls.html",controller:"girlsCtrl"}}
    }).state("tabs.boys",{
        url:"/boys",
        views:{"tabs-home":{templateUrl:"views/boys/boys.html"}}
    });
    $urlRouterProvider.otherwise("banner")
})
    .controller("myCtrl",function($scope,$ionicPopup,$state){
        $scope.dataForm={};
        $scope.menushow=false;
        $scope.show=function(){
            $scope.menushow=true;
        };
        $scope.showConfirm = function() {
            var confirmPopup = $ionicPopup.confirm({
                title: '退出',
                template: '你确定要退出登录吗?'
            });
            confirmPopup.then(function(res) {
                if(res){$state.go("login");$scope.menushow=false;}
            });
        };
    });