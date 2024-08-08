let btn = document.querySelector("button");
let ul = document.querySelector("ul"); 
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let items = document.createElement("li");
    items.innerText=inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");
    delBtn.classList.add("btn");
    items.appendChild(delBtn);
    ul.appendChild(items);
    inp.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem =event.target.parentElement;
        listItem.remove();
        console.log("delete");
    }
})





// let delBtns =document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     })
// }