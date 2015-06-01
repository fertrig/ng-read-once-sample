(function() {
	"use strict";

	angular
		.module("app.teams")
		.factory("teamsRepository", teamsRepository);

	function teamsRepository(Repository) {
		
		var repo = new Repository("/teams");

		var service = {
			getTeams: getTeams,
			getById: getById
		};

		return service;

		function getTeams() {
			return repo.read();
		}

		function getById(id) {
			return repo.read()
				.then(function(teams) {
					for (var i = 0; i < teams.length; i++) {
						if (id === teams[i].id.toString()) {
							return teams[i];
						}
					}

					throw new Error("Team not found");
				});
		}
	}
})();