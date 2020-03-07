Vue.component('greeting', {
    template: '<p>Hey there, I am {{ name }}. <button v-on:click="changeName">Change name</button></p>',
    data: function() {
        return {
            name: 'Yoshi',
        }
    },
    methods: {
        changeName: function() {
            this.name = 'Mario';
        }
    }
});

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
        success: false,
        health: 100,
        ended: false,
        output: 'Your fav food',

        /* array of strings */
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        /* array of objects */
        ninjas: [
            {name: 'Ryu', age: 25},
            {name: 'Yoshi', age: 35},
            {name: 'Ken', age: 55},
        ]
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
        punch: function() {
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
            }
        },
        restart: function() {
            this.health = 100;
            this.ended = false;
        },
        readRefs: function() {
            console.log(this.$refs.input.value);
            this.output = this.$refs.input.value;
        }
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