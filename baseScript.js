(function() {
  window.DonorDonaApp = angular.module('DonorDonaApp', ["ui.router", "ui.bootstrap", "ui.mask", "vcRecaptcha", "leaflet-directive"]);

  window.cnvDate = function(v) {
    var d, res;
    res = null;
    if (v) {
      if (typeof v === "object") {
        res = (new Date(v.year, v.month, v.date)).toString();
        if (res === "Invalid Date") {
          res = null;
        }
      } else if (typeof v === "string") {
        d = new Date(v);
        res = {
          year: d.getFullYear(),
          month: d.getMonth(),
          date: d.getDate()
        };
      } else {
        console.log(v);
        throw "cnvDate: incrorrect type " + typeof v;
      }
    }
    return res;
  };

  window.serverError = function(data, status, headers, config) {
    return alert("Ошибка связи с сервером: " + status);
  };

  window.scrollTop = function() {
    return setTimeout(function() {
      return window.scrollTo(0, 0);
    }, 100);
  };

  window.DonorDonaApp.config(function($stateProvider, $routeProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider.state('index', {
      url: "/",
      views: {
        "viewA": {
          templateUrl: "/partials/main.html"
        }
      }
    }).state('donor_signout', {
      url: "/donor/signout",
      views: {
        "viewA": {
          templateUrl: "/partials/donor-signout.html"
        }
      }
    }).state('recipient_signout', {
      url: "/recipient/signout",
      views: {
        "viewA": {
          templateUrl: "/partials/recipient-signout.html"
        }
      }
    }).state('donationCenters', {
      url: "/donationCenters/:id",
      views: {
        "viewA": {
          templateUrl: "/partials/donationCenters.html"
        }
      }
    }).state('news', {
      url: "/news",
      views: {
        "viewA": {
          templateUrl: "/partials/news.html"
        }
      }
    }).state('newsItem', {
      url: "/news/:newsID",
      views: {
        "viewA": {
          templateUrl: "/partials/newsItem.html"
        }
      }
    }).state('aboutUs', {
      url: "/aboutUs",
      views: {
        "viewA": {
          templateUrl: "/partials/aboutUs.html"
        }
      }
    }).state('disquss', {
      url: "/disquss",
      views: {
        "viewA": {
          templateUrl: "/partials/disquss.html"
        }
      }
    }).state('404', {
      url: "/404",
      views: {
        "viewA": {
          templateUrl: "/partials/404.html"
        }
      }
    }).state('recipient', {
      url: "/recipient",
      views: {
        "viewA": {
          templateUrl: "/partials/recipient.html"
        }
      }
    }).state('recipient_newRequest', {
      url: "/recipient/newRequest",
      views: {
        "viewA": {
          templateUrl: "/partials/rec-newRequest.html"
        }
      }
    }).state('recipient_options', {
      url: "/recipient/options",
      views: {
        "viewA": {
          templateUrl: "/partials/recipient-options.html"
        }
      }
    }).state('donor', {
      url: "/donor",
      views: {
        "viewA": {
          templateUrl: "/partials/donor.html"
        }
      }
    }).state('donor_options', {
      url: "/donor/options",
      views: {
        "viewA": {
          templateUrl: "/partials/donor-options.html"
        }
      }
    }).state('donor_newDonation', {
      url: "/donor/newDonation",
      views: {
        "viewA": {
          templateUrl: "/partials/donor-newDonation.html"
        }
      }
    }).state('volunteer', {
      url: "/volunteer",
      views: {
        "viewA": {
          templateUrl: "/partials/volunteer.html"
        }
      }
    }).state('news_management', {
      url: "/volunteer/news",
      views: {
        "viewA": {
          templateUrl: "/partials/news.html"
        }
      }
    }).state('newsItem_management', {
      url: "/volunteer/news/:newsID",
      views: {
        "viewA": {
          templateUrl: "/partials/newsItem-edit.html"
        }
      }
    }).state('volunteer_donor_signout', {
      url: "/volunteer/donor/signout",
      views: {
        "viewA": {
          templateUrl: "/partials/donor-signout.html"
        }
      }
    }).state('volunteer_donor_options', {
      url: "/volunteer/donor/:donorID/options",
      views: {
        "viewA": {
          templateUrl: "/partials/donor-options.html"
        }
      }
    }).state('volunteer_donor', {
      url: "/volunteer/donor/:donorID",
      views: {
        "viewA": {
          templateUrl: "/partials/donor.html"
        }
      }
    }).state('volunteer_donor_newDonation', {
      url: "/volunteer/donor/:donorID/newDonation",
      views: {
        "viewA": {
          templateUrl: "/partials/donor-newDonation.html"
        }
      }
    }).state('volunteer_recipient_signout', {
      url: "/volunteer/recipient/signout",
      views: {
        "viewA": {
          templateUrl: "/partials/recipient-signout.html"
        }
      }
    }).state('volunteer_recipient_newRequest', {
      url: "/volunteer/recipient/:recID/newRequest",
      views: {
        "viewA": {
          templateUrl: "/partials/rec-newRequest.html"
        }
      }
    }).state('volunteer_recipient_options', {
      url: "/volunteer/recipient/:recID/options",
      views: {
        "viewA": {
          templateUrl: "/partials/recipient-options.html"
        }
      }
    }).state('volunteer_recipient', {
      url: "/volunteer/recipient/:recID",
      views: {
        "viewA": {
          templateUrl: "/partials/recipient.html"
        }
      }
    }).state('callbacks', {
      url: "/volunteer/callbacks",
      views: {
        "viewA": {
          templateUrl: "/partials/callbacks.html"
        }
      },
      onExit: function() {
        return clearInterval(window.refresher);
      }
    }).state('donors_management', {
      url: "/volunteer/donors_management",
      views: {
        "viewA": {
          templateUrl: "/partials/donors_management.html"
        }
      }
    }).state('recipient_management', {
      url: "/volunteer/recipient_management",
      views: {
        "viewA": {
          templateUrl: "/partials/recipient_management.html"
        }
      }
    }).state('donation_management', {
      url: "/volunteer/donation_management",
      views: {
        "viewA": {
          templateUrl: "/partials/donation_management.html"
        }
      }
    }).state('request_management', {
      url: "/volunteer/request_management",
      views: {
        "viewA": {
          templateUrl: "/partials/request_management.html"
        }
      }
    }).state('options', {
      url: "/volunteer/options",
      views: {
        "viewA": {
          templateUrl: "/partials/options.html"
        }
      }
    }).state('help', {
      url: "/volunteer/help",
      views: {
        "viewA": {
          templateUrl: "/partials/help.html"
        }
      }
    }).state('support', {
      url: "/volunteer/support",
      views: {
        "viewA": {
          templateUrl: "/partials/support.html"
        }
      }
    }).state('download_db', {
      url: "/volunteer/download_db",
      views: {
        "viewA": {
          templateUrl: "/partials/download_db.html"
        }
      }
    }).state('shedule', {
      url: "/volunteer/shedule",
      views: {
        "viewA": {
          templateUrl: "/partials/shedule.html"
        }
      }
    });
    $urlRouterProvider.otherwise('404');
    return $locationProvider.html5Mode(Modernizr.history);
  });

}).call(this);
