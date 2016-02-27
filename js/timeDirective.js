angular
    .module("timeApp")
    .directive("showTime", function(){
        return {
              restrict: 'E'
            , template: '<div> Hey {{title}} {{name}}, the current time is: {{time}}</div>'
            , scope: {
                name: '=pName',
                title: '@title', //take the value that is a literal string
                doSomething: '&something' //think of this like an ng-click
            }
            , link: function(scope, element, attributes) {
                var currentTime = new Date();
                scope.time = currentTime.toString();
            },
            // controller: function($scope, myService) {
                
            // }
        }
    });
    
    //get a name from the controller