new Vue({
  el: '#app',
  data: { // You shouldn't change the "data" part
    company: 'Ironhack',
    x: 6,
    y: 7,
    sentence1: 'This text is writen normally but displayed in uppercase',
    sentence2: 'This text is reversed',
    sentence3: 'This text is in uppercase and reversed',
  },
  methods: {
    multiplyBy2 (number) {
      return number * 2
    }
  },
  filters: {
    capitalize (string) {
      return string.toUpperCase()
    }
  },
})
