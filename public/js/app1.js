angular.module("app1", ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      controller: 'MainController',
      templateUrl: "templates/main.html"
    })
    .when("/Shortly", {
      controller: 'ShortlyController',
      templateUrl: "templates/shortly.html"
    })
    .when("/Login", {
      controller: 'LoginController',
      templateUrl: "templates/login.html"
    })
    .otherwise({
      redirectTo:"/"
    });


  })
.factory("userNameService", function($q, $http){
  var userName;
  return userName;
})
.controller('MainController', function($scope, $http, userNameService)  {
  $http({
    method: 'GET',
    url: '/links'
  })
  .success(function(data) {
      var results = [];
      results[0] = data;
      results[1] = [];
      $scope.links = results;
      console.log($scope.links[0]);

    })
  .error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
      console.log('error');
  });

  console.log(userNameService.userName);
})
.controller('ShortlyController', function($scope, $http){
  $scope.submit = function() {
    console.log($scope.webSiteName);
    var siteObj = {};
    siteObj['url'] = $scope.webSiteName;
    $http({
      method: 'POST',
      url: '/links',
      data: siteObj
    })
    .success(function(data) {
      console.log("Success", data);
    })
    .error(function (data) {

    });

  };
});
