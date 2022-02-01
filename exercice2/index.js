new Vue({
  el: '#app',
  data: {
    message: 'The current time is '
  },
  methods:{
      getTime(){
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes();
        return time; 
      }
  }
})
