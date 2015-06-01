(function() {
	"use strict";

	angular
		.module("app.teams")
		.controller("Team", Team);

	/* @ngInject */
	function Team($scope, $routeParams, teamsRepository) {
		teamsRepository.getById($routeParams.teamId)
			.then(function(team) {
				$scope.team = team;
			});
	}
	
})();