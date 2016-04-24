/*global ToDo, Backbone*/

ToDo.Models = ToDo.Models || {};

(function () {
    'use strict';

    ToDo.Models.Todo = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
