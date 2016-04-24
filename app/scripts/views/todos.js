/*global ToDo, Backbone, JST*/

ToDo.Views = ToDo.Views || {};

(function () {
    'use strict';

    ToDo.Views.Todos = Backbone.View.extend({

        template: JST['app/scripts/templates/todos.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
