
  const { createApp } = Vue

  createApp({
    data() {
      return {
        title:"to do list",
        items:[
            "fare la spesa",
            "mangiare",
            "dormire"
        ]
      }
    }
  }).mount('#container')
