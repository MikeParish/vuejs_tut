new Vue({
    el: '#vue-app',
    data: {
        name: 'Mike',
        job: 'Ninja',
        website: 'https://google.com',
        websiteTag: '<a href="https://google.com">The Net Ninja Website</a>',
        age: 25,
        x: 0,
        y: 0,
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ' ' + this.name;
        },
        add: function(inc) {
            this.age += inc;
        },
        sub: function(dec) {
            this.age -= dec;
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            alert('You clicked me');
        },
    }
})