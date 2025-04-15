const app = Vue.createApp({
   data() {
      return {
         enteredValue:'',
         goals: [],
         items:{name:'adeola', age: 23, location: 'lagos'},
         nums:30
      }
   },
   methods: {
      addGoal() {
         this.goals.push(this.enteredValue);
         this.enteredValue=''
      },
      removeGoal(index) {
         this.goals.splice(index, 1);
      }
   },
})
app.mount('#app');