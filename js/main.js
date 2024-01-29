const { createApp } = Vue;

createApp({
  data() {
    return {
      box: {
        title: "Vue Hello",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
      },
    };
  },
}).mount("#app");
