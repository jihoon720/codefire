var app = angular.module('flapperNews', []);

app.factory('posts', [function(){
	//service body
}]);

app.controller('MainCtrl', function($scope){
	//use $scope to bind data
	$scope.posts = [
		{title: 'post 1', upvotes: 4},
		{title: 'post 2', upvotes: 6},
		{title: 'post 3', upvotes: 2}
	];
	$scope.title = '';

	$scope.addPost = function(){
		if ($scope.title == ""){
			window.alert("Do not leave the title empty");
			return;
		}
		$scope.posts.push({
			title: $scope.title,
			link: $scope.link,
			upvotes: 0
		});
		$scope.title = "";
		$scope.link = "";
	}

	$scope.incrementUpvotes = function(post){
		post.upvotes++;
	}
});

