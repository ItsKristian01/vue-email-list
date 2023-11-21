const { createApp } = Vue;

createApp({
  data() {
    return {
        emailList: [],
    };
  },
  created() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((resp) => {
        console.log(resp);
        this.emailList = resp.data.response;
      });
  },
  methods: {
  },
}).mount("#app");