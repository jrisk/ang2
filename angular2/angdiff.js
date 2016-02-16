//Controller angular 1.x

angular.module('example')
	.controller('ExampleCtrl', function($scope) {
	$scope.name = "Joe Risk";
	});

//Angular 2.0
import {Component} from 'angular2/core';

@Component({
	selector: 'example'
})

