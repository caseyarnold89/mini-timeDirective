angular
    .module("timeApp")
    .directive("showTime", function(){
        return {
              restrict: 'E'
            , template: '<div> The current time is {{time}}'
            , link: function(scope, element, attributes) {
                var currentTime = new Date();
                scope.time = currentTime.toString();
            }
        }
    });