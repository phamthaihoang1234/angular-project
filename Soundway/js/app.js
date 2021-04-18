// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform,$rootScope,$ionicPopup,$ionicScrollDelegate,$location,$timeout) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
  $rootScope.showDetails='post';
  
  $rootScope.items=[{id:"1",img:"img/001.png",time:"2:25",title:"Aksel Hennie",follow_num:"48",country:"London"},{id:"2",img:"img/002.png",time:"4:47",title:"Matt Damon",follow_num:"125"},{id:"3",img:"img/003.png",time:"9:36",title:"Jessica Chastain",follow_num:"39"},
  {id:"4",img:"img/004.png",time:"2:15",title:"Mash",follow_num:"6242"},{id:"5",img:"img/005.png",time:"8:04",title:"Sean Bean",follow_num:"275"},{id:"6",img:"img/002.png",time:"7:17",title:"Stef mark",follow_num:"214"}]
  
   $rootScope.posts=[{id:"1",img:"img/001.png",time:"2:25",name:"Everybody dose"},{id:"2",img:"img/002.png",time:"4:47",name:"STACK"},{id:"3",img:"img/003.png",time:"9:36",title:"Jessica Chastain",name:"love songs"},
  {id:"4",img:"img/004.png",time:"2:15",name:"cyra Morgan - collaborations"},{id:"5",img:"img/005.png",time:"8:04",name:"Demos"},{id:"6",img:"img/002.png",time:"7:17",name:"love songs"}]
  
  $rootScope.notification=[{id:"1",img:"img/001.png",time:"2 Hours Ago",title:"Aksel Hennie",status:"1"},{id:"2",img:"img/002.png",time:"4 Hours Ago",title:"Matt Damon",status:"2"},{id:"3",img:"img/003.png",time:"1 Day Ago",title:"Stef mark",status:"1"},
  {id:"4",img:"img/004.png",time:"3 Days Ago",title:"Sean Bean",status:"2"},{id:"5",img:"img/005.png",time:"2 Weeks Ago",title:"Matt Damon",status:"1"}]
  
  $rootScope.setting=[{id:"1",title:"Like On Your Post"},{id:"3",title:"Comment On Your Post",checked:"true"},{id:"3",title:"Repost Of Your Posts"},{id:"4",title:"New Follower",checked:"true"},{id:"5",title:"New Posts By Followed Users",checked:"true"}
  ,{id:"6",title:"New frequency Ftetures",checked:"true"},{id:"7",title:"Only update data over Wi-Fi",discription:"only update new likes , etc .over Wi-Fi"}
  ,{id:"8",title:"Auto play related tracks",discription:"when a playlist ends , play tracks based on the last track"}]
  
   $rootScope.forget_password=function (){	
        $ionicPopup.show({
        template: 'Enter your email address below.<label class="item item-input" style="  height: 34px; margin-top: 10px;"><input  type="email"  /></label>',
        title: 'Forget Password',
        subTitle: ' ',
        scope: $rootScope,
        buttons: [
        {text: '<b>Send</b>',
        type: 'button-positive'},
        { text: 'Cancel' ,
        type: 'button-positive'},]
        });	
    };
	
$rootScope.play_sound=function(type,index){
	 if(index&&type==1&&$rootScope.play_item==1){
		  $rootScope.play_item=2
          $timeout(function(){$rootScope.play_sound(1,index) },100); 
	 }else{
         if(type==1) $rootScope.playrow=index
         else delete $rootScope.playrow 
         $rootScope.play_item=type
    }
}

$rootScope.goto=function(url){
	 $location.path(url);
	}	
	
 $rootScope.scrollTop = function() {
    $ionicScrollDelegate.scrollTop();
  };
    		
	
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.navBar.alignTitle('center');
  $ionicConfigProvider.backButton.text('').previousTitleText('')  ;

  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })


.state('login', {
    url: "/login",
        templateUrl: "templates/login.html"
  })


  .state('register', {
    url: "/register",
        templateUrl: "templates/register.html"
  })
  
  .state('app.notification', {
    url: "/notification",
    views: {
      'menuContent': {
        templateUrl: "templates/notification.html"
      }
    }
  })
  .state('app.record', {
    url: "/record",
    views: {
      'menuContent': {
        templateUrl: "templates/record.html"
      }
    }
  })
  .state('app.about', {
    url: "/about",
    views: {
      'menuContent': {
        templateUrl: "templates/about.html"
      }
    }
  })

 .state('app.setting', {
    url: "/setting",
    views: {
      'menuContent': {
        templateUrl: "templates/setting.html"
      }
    }
  })


  .state('app.profile', {
    url: "/profile",
    views: {
      'menuContent': {
        templateUrl: "templates/profile.html"
      }
    }
  })
    .state('app.home', {
      url: "/home",
      views: {
        'menuContent': {
          templateUrl: "templates/home.html"
        }
      }
    })
;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
