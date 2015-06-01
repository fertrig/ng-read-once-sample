(function() {
	"use strict";

	angular
		.module("app.teams")
		.directive("teamsList", teamsList);

	/* @ngInject */
	function teamsList(teamsRepository) {
		var directive = {
			restrict: "E",
			templateUrl: "app/teams/teams.html",
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