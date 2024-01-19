console.log("ok", Vue);

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello",
    };
  },
}).mount("#app");
