    // Angular module, defining routes for the app

function toolsMessage() {
    if ((window.outerHeight - window.innerHeight) > 250) window.location = '#/dev' ;
}

angular.module('polls', ['pollServices']).
	config(['$routeProvider', function ($routeProvider) {
		$routeProvider.
			when('/polls', { templateUrl: 'partials/list.html', controller: PollListCtrl }).
			when('/poll/:pollId', { templateUrl: 'partials/item.html', controller: PollItemCtrl }).
			when('/new', { templateUrl: 'partials/new.html', controller: PollNewCtrl }).
            when('/dev', { templateUrl: 'partials/dev.html' }).
			// If invalid route, just redirect to the main list view
			otherwise({ redirectTo: '/polls' });
		if (!toolsMessage()) {
		    window.onresize = function () {
		        toolsMessage();
		    }
		}
	}]);
	