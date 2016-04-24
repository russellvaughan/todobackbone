/*global ToDo, Backbone*/

ToDo.Collections = ToDo.Collections || {};

(function () {
    'use strict';

    ToDo.Collections.Todos = Backbone.Collection.extend({

        model: ToDo.Models.Todo

    });

})();
