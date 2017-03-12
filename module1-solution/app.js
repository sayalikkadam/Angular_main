(function(){
	angular.module('LunchCheckerApp',[])
	.controller('LunchCheckerController',LunchCheckerController)

	

	function LunchCheckerController($scope){
		$scope.items = "";

		$scope.decideEvent = function(){
			//console.log("In function");
			var items_array = $scope.items.split(",");
			//console.log(items_array);
		

			var count = calculateCount(items_array);
			//console.log("count = ",count);

			if(count == 0 ){
				$scope.items = "data should not be blank";
			}
			else if(count <=3){
			$scope.items = "Enjoy";
			}
			else{
				$scope.items = "Too much";
			}
		};
	}


	function calculateCount(string){
		var cnt = 0;
		for(var i=0;i<string.length;i++){
			if(!(isEmpty(string[i]))){
				cnt+= 1 ;
			}
		}
		return cnt;
	}

	function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
	}
})();

