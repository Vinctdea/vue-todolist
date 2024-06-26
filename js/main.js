
  const { createApp } = Vue

  createApp({
    data() {
      return {
            title:"to do list",
            newTask:"",
            error: false,
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
            if(this.newTask.length >= 5){
                this.items.unshift({text:this.newTask,done:"false"});
                this.newTask = "";
                this.error = false;
                // console.log(this.items);
                
            }else{
                this.error = true;
            }
           
        },
        removeTask(indice){
            this.items.splice(indice,1);
        },
        checkClick(){
            if(this.item.done === false){
                this.items.done = true;
            }else{
                this.items.done = false;

            }
        }         
    }
}).mount('#container')
