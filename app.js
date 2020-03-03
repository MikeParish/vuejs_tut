new Vue({
    el: '#vue-app',
    data: {
        name: 'Mike',
        job: 'Ninja',
        website: 'https://google.com',
        websiteTag: '<a href="https://google.com">The Net Ninja Website</a>' 
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ' ' + this.name;
        }
    }
})