console.log("ok", Vue);

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Grazie per aver scelto :",
      img: "https://www.peerbits.com/static/5e207b41ae78e363d0afdfe61c8b749f/189bc/vuejs-devlopment-main.jpg",
      text: "Iscriviti alla newsletter per rimanere aggiornato sulle ultime release",
      firstName: "",
      lastName: "",
      email: "",
      number: "",
    };
  },
  methods: {
    checkAndChangeText() {
      // Controllo se tutti i campi sono riempiti
      if (this.firstName && this.lastName && this.email && this.number) {
        this.text = "Grazie per esserti iscritto alla newsletter!";
      } else {
        alert("Compila tutti i campi per iscriverti!");
      }
    },
  },
}).mount("#app");
