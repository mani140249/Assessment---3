var data = [

	{
		"id" : 100,
		"name" : "Anand",
		"salary" : 5000,
		"city" : "Hyderabad"
	},
	
	{
		"id" : 101,
		"name" : "Kiran",
		"salary" : 10000,
		"city" : "Hyderabad"
	},
	{
		"id" : 102,
		"name" : "Prasad",
		"salary" : 20000,
		"city" : "Vijayawada"
	},
	{
		"id" : 103,
		"name" : "Hari",
		"salary" : 6500,
		"city" : "Tenali"
	},
	{
		"id" : 104,
		"name" : "Raja",
		"salary" : 7500,
		"city" : "Tirupati"
	},
]


var app = angular.module('myApp',[])
app.controller('employeeCtrl',function($scope){

	$scope.data = data;
	$scope.isEdit = false;
	$scope.isAdd = false;
	$('#editDiv').hide();
	$('#addDiv').hide();

	$scope.edit = function(obj){
		$scope.isEdit = true;
		$scope.isAdd = false;
		$('#editDiv').show();
		$('#addDiv').hide();

		var idx = $scope.data.indexOf(obj);
		$scope.editObject = angular.copy($scope.data[idx]);
		$scope.originalObject = $scope.data[idx];
	}

	$scope.delete = function(obj){
		var idx = $scope.data.indexOf(obj);
		var confirmWindow = confirm("Are you sure to remove this record");
		if(confirmWindow == true)
		{
			$scope.data.splice(idx,1);
		}
		
	}

	$scope.update = function(object){
		var idx = $scope.data.indexOf($scope.originalObject);
		$scope.data[idx] = object;
		alert("Saved Successfully !!")
		$('#editDiv').hide();
	}

	$scope.addNewEmp = function(){
		$scope.isAdd = true;
		$scope.isEdit = false;
		$('#addDiv').show();
		$('#editDiv').hide();

	}

	$scope.save = function(object){
		$scope.data.push(object);

		alert("Saved Successfully !!")
		$('#addDiv').hide();

	}

	$scope.cancel = function(){
		$('#editDiv').hide();
		$('#addDiv').hide();
	}
});

