angular.module('todo.controller', [])
    .value('serverUrl','http://localhost:8000/')
    .factory('todoFactory',function($http,serverUrl){
        return {
            get: function(requestBody){
                return $http.post(serverUrl+'get/',requestBody)
            },
            create: function(requestBody){
                return $http.post(serverUrl+'create/',requestBody)
            }
        }
    })
    .controller('todoCtrl',function(todoFactory){
        var vm = this

        todoFactory.get({}).then(function(response){
            vm.todo = response.data
        })
    })