// main.js

var View = Backbone.View.extend({

    el: '.app',
    template: HBS['hbs/view.hbs'],

    initialize: function() {
        this.render();
    },
    render: function() {
        var _this = this;
        _this.$el.find('.omg').html('omg some text');
        var content = this.template({
            bird: "sparrow"
        });
        _this.$el.append(content);
    },
    events: {
        'click .omg': 'sayHello'
    },
    sayHello: function() {
        alert('hello');
    }
});

var v = new View();
