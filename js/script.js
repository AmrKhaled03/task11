document.addEventListener("DOMContentLoaded", function () {
    
     document.querySelector("#txt").onkeyup = function () {
         if (document.querySelector("#txt").value.length < 5) {
             document.querySelector("#btn").disabled = true;
         
         }
          else {
             document.querySelector("#btn").disabled = false;
     }

     }
 document.querySelector("form").onsubmit = function () {

    const text = document.querySelector("#txt").value;
     const li = document.createElement("li");


      li.innerHTML = text + "" + ' <button class="delete"> <i class="far fa-trash-alt"></i> </button>';
      

    document.querySelector("#list").appendChild(li);


     var current_tasks = document.querySelectorAll(".delete");
     for(var i=0; i<current_tasks.length; i++){
         current_tasks[i].onclick = function(){
             this.parentNode.remove();
         }
     }
     
     document.querySelector("#txt").value="";
     document.querySelector("#btn").disabled = true;
    return false;
     }
    document.querySelector("#colBtn").onclick=function(){
    const color=document.querySelector("#colIn").value;  
    document.body.style.backgroundColor=color;
    document.querySelector("#colBtn").style.backgroundColor=color;
    document.querySelector("#colBtn").style.color="white";
  } 
  
  

})
