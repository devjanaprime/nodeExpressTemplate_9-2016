console.log( 'js' );

var myApp = angular.module( 'myApp', [] );

myApp.controller( 'testController', [ '$scope', '$http', function( $scope, $http ){
  console.log( 'NG' );
  $scope.testArray =[];
  $scope.counter=0;
  $scope.testPost = function(){
    console.log( 'in test post' );
    // assemble objectToSend
    var objectToSend ={
      myField: 'asdf'
    }; //end object to send
    $http({
      method: 'POST',
      url: '/postRoute',
      data: objectToSend,
    }).then(function successCallback( response ){
      console.log( 'back from post:', response );
    })
  }; // end testPost

}]); // end testController
