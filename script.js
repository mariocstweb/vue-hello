console.log("ok", Vue);

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Grazie per aver scelto :",
      img: "https://www.peerbits.com/static/5e207b41ae78e363d0afdfe61c8b749f/189bc/vuejs-devlopment-main.jpg",
    };
  },
}).mount("#app");
