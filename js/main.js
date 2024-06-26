
  const { createApp } = Vue

  createApp({
    data() {
      return {
            title:"to do list",
            items:[
                {
                    text:"fare la spesa",
                    done: "true"
                },
                {
                    text:"dormire",
                    done: "false"
                },
                {
                    text:"mangiare",
                    done: "true"
                },
                {
                    text:"fare sport",
                    done: "true"
                }       
                
            ]
            
        }
    }
}).mount('#container')
