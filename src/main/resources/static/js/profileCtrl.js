bulkAppControllers.controller("profileCtrl", function($scope, $http) {
	$scope.profile = {name: "Barack Obama",
    		id: 'abc123',
    		joined: 2009,
    		rating: 5,
    		img: 'http://a5.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE4MDAzNDEwNzg5ODI4MTEw.jpg',
    		description: "woo i president",
    		reviews: []}; 
		/*
		if (!$rootScope.userId) {
			$location.path("/");
		}
		var postData = $.param({
			json: JSON.stringify({
				userId: userId,
			})
		});
		$http.post("/feedEntries", postData).success(function(data, status) {
			$scope.events = data.entries;
		});*/
});