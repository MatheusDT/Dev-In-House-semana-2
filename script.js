var ul = document.getElementById("myList"); // a variavel declarada ul está recebendo o valor da tag que possue myList como identificador
var li;
var itemId;
var item;
addTask= function (){
   //linha 48 está fazendo uma verificação do valor do documento e diferente de vazio.!!!      
   if (document.getElementById("task").value != ""){
       item = document.getElementById("task").value;    // = recebe um valor do input task
       itemId= ul.childElementCount;        //está recebendo a propriedade childelementcount da lista,que corresponde ao numero de elementos que está lista contém
       li = createItemEl(item.value,itemId); // li esta recebendo um elemento de lista criado pela createItemEl
       li.appendChild(createRemoveTaskBtn(itemId)); 
       ul.appendChild(li); // ul está recebendo um item li
   }

}
   
removeTask= function (itemId){
         for(i = 0 ; i < ul.children.length ; i++){
             if(ul.children[i].getAttribute("index") == itemId){
                 ul.children[i].remove();
             }
         }
}

createItemEl= function (itemValue, itemId){
     let li = document.createElement("li");
     li.setAttribute("index", itemId);
     li.appendChild(document.createTextNode(itemValue)); 
     return li;
}

createRemoveTaskBtn= function(itemId){
     let btn = document.createElement("button");
     btn.setAttribute("onclick", "removeTask("+itemId+")");
     btn.innerHTML="X";
     return btn;
}
