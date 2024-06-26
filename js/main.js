
  const { createApp } = Vue

  createApp({
    data() {
      return {
            title:"to do list",
            newTask:"",
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
        
    },
    methods:{   //aggiungere tasks
        addTask(){
            this.items.unshift({text:this.newTask,done:"false"});
            this.newTask = "";
        },
        removeTask(indice){
            this.items.splice(indice,1);
        }           
    }
}).mount('#container')
