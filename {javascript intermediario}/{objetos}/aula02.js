const user = {
  name: "Bella",
  message  : function(){
    //console.log(`Olá ${user.name}`);  
    console.log(`Olá ${this.name}`);
    
  },
 }

 user.message()