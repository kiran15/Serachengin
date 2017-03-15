var app = angular.module('MyApp', ['ngMaterial', 'ngMessages', 'slickCarousel', 'ui.bootstrap','ngRoute','ngCookies']);

			
	app.controller("AppCtrl", function ($scope,$http,$location,$window,$cookieStore) 
	{
		$scope.showHomePage = function(ev)
		{
			$window.location.href = '../home1.html#/';
		}
		$scope.posts = function(ev)
		{
			$window.location.href = '../posts.html#/';
		}
		
		
		$scope.userName = $cookieStore.get('username');
		
	});
	
	app.controller("AppCtrl1", function ($scope,$http,$location,$window,$cookieStore) 
	{
		
		$scope.userName = $cookieStore.get("username");
		
	});
	
	app.controller("AppCtrl2", function ($scope,$http,$location,$window) 
	{
		
		 $http({
	        method : 'GET',
	        url : 'http://jsonplaceholder.typicode.com/posts',
	        headers	: {'Content-Type': 'application/x-www-form-urlencoded'}
	     })
	      .success(function(data, status, headers, config) 
			{
	    
	    	  $scope.gruops = data;
	    	
	    	 
			})
		.error(function(data, status, headers, config) 
		{
	             
		});	
		
		$scope.getSearchDetails = function()
		{
			
		}
		
	});







