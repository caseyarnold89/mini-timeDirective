angular
    .module('timeApp')
    .controller('mainCtrl', function($scope){
        
        $scope.name = "Casey"
        
        $scope.names = [
            "John",
            "Jeremy",
            "Lacey",
            "Dax",
            "Casey",
            "Matt",
            "Steve",
            "Jenni",
            "Adam",
            "Nate"
        ];
        
        $scope.p1 = "Joe"
        
    })