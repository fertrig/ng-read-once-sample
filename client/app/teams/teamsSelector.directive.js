(function() {
	"use strict";

	angular
		.module("app.teams")
		.directive("teamsSelector", teamsSelector);

	/* @ngInject */
	function teamsSelector(teamsRepository) {
		var directive = {
			restrict: "E",
			templateUrl: "app/teams/teams-selector.html",
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