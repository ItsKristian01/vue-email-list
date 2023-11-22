const { createApp } = Vue;

createApp({
  data() {
    return {
      emailList: [],
      isLoading: false
    };
  },
  created() {},
  methods: {
    generateEmails() {
      this.emailList = [];
      this.isLoading = true;
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((resp) => {
            console.log(resp);
            this.emailList.push(resp.data.response);
            if(this.emailList.length === 10) {
              this.isLoading = false;
            }
          });
      }
      console.log(this.emailList);
    },
  },
}).mount("#app");
