new Vue({
    el: '#vue-app',
    data: {
        name: 'Mike',
        name2: '',
        job: 'Ninja',
        website: 'https://google.com',
        websiteTag: '<a href="https://google.com">The Net Ninja Website</a>',
        age: 25,
        age2: '',
        x: 0,
        y: 0,
        a: 0,
        b: 0,
        age3: 20,
        available: false,
        nearby: false,
        error: false,
        success: false
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
        logName: function() {
            console.log('You entered your name');
        },
        logAge: function() {
            console.log('You entered your age');
        },
        /*
        addToA: function() {
            console.log('addToA');
            return this.a + this.age3;
        },
        addToB: function() {
            console.log('addToB');
            return this.b + this.age3;
        },*/
    },
    computed: {
        addToA: function() {
            console.log('addToA');
            return this.a + this.age3;
        },
        addToB: function() {
            console.log('addToB');
            return this.b + this.age3;
        },
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }  
})