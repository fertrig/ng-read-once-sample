(function() {
	"use strict";

	angular
		.module("app.teams")
		.config(configure);

	/* @ngInject */
	function configure($routeProvider) {
		$routeProvider
			.when("/", {
				redirectTo: "/team/1"
			})
			.when("/team/:teamId", {
				templateUrl: "app/teams/team.html",
				controller: "Team"
			});
	};
})();