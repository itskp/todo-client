angular.module('todo.routes',['ngRoute'])
.config(function ($routeProvider) {
    // this file is loaded in index.html so template path would be relative to index.html location
    $routeProvider
        .when('/', {
            templateUrl: './todo/templates/todo.html',
            controller: 'todoCtrl',
            controllerAs: 'ctrl'
        })
})