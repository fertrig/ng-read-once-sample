(function() {
	"use strict";

	angular
		.module("app.teams")
		.controller("teamsList", teamsList);

	/* @ngInject */
	function teamsList(teamsRepository) {
		var directive = {
			restrict: "E",
			templateUrl: "teams.html",
			controller: controller
		};

		return directive;

		function controller($scope) {
			teamsRepository.getTeams()
				.then(function(teams) {
					$scope.teams = teams;
				});
		}
	}
})();