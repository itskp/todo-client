angular.module('todo.controller', [])
    .value('serverUrl', 'http://localhost:8000/')
    .factory('todoFactory', function ($http, serverUrl) {
        return {
            get: function (requestBody) {
                return $http.post(serverUrl + 'get/', requestBody)
            },
            create: function (requestBody) {
                return $http.post(serverUrl + 'create/', requestBody)
            },
            updateStatus: function (requestBody) {
                return $http.post(serverUrl + 'updateStatus/', requestBody)
            },
            markAll: function (requestBody) {
                return $http.post(serverUrl + 'markAll/', requestBody)
            }
        }
    })
    .controller('todoCtrl', function (todoFactory) {
        var vm = this
        vm.todo = null
        vm.marked = 0

        todoFactory.get({}).then(function (response) {
            vm.todoList = response.data
        })

        vm.createTodo = function () {
            todoFactory.create({
                name: vm.todo
            }).then(function (response) {
                vm.todoList.push(response.data)
                vm.todo = null
            })
        }

        vm.updateStatus = function (todo, index) {
            todoFactory.updateStatus({
                todoid: todo._id,
                status: vm.todoList[index].status
            }).then(function (response) {
                vm.todoList[index] = response.data
            })
        }

        vm.toggleStatus = function () {
            vm.marked = !vm.marked
            todoFactory.markAll({
                status: vm.marked
            }).then(function (response) {
                vm.todoList = response.data
            })

        }
    })