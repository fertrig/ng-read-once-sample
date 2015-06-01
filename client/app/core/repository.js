(function() {
	"use strict";

	angular
		.module("app.core")
		.factory("Repository", Repository);

	/* @ngInject */
	function Repository($http, $q) {

		var Repo = function(apiPath) {

			this.read = read;

			var loaded = false,
				calling = false,
				callers = [],
				data = [];

			function read() {
				if (loaded) {
					return $q.when(data);
				}
				else if (calling) {
					var deferred = $q.defer();
					callers.push(deferred);
					return deferred.promise;
				}
				else {
					calling = true;
					return $http.post(apiPath)
						.then(function(res) {
							for (var i = 0; i < res.data.length; i++) {
								data.push(res.data[i]);
							}

							loaded = true;
							calling = false;

							for (var i = 0; i < callers.length; i++) {
								callers[i].resolve(data);
							}

							callers = [];

							return data;
						})
				}
			}
		};

		return Repo;
	}
})();