const { createApp } = Vue;

createApp({
  data() {
    return {
      emailList: [],
    };
  },
  created() {},
  methods: {
    generateEmails() {
      for (let i = 10; i > this.emailList.length; i--) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((resp) => {
           //console.log(resp);
            this.emailList.push(resp.data.response);
            console.log(this.emailList);
          });
      }
    },
  },
}).mount("#app");
