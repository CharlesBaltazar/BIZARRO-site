const barraDePesquisa = document.querySelector("#textSearch")//<input/>
const lista = document.querySelector("#lista");//<ul></ul>
const itens = document.querySelectorAll(".produto");//<li><li/>


barraDePesquisa.addEventListener("input", ()=>{
    barraDePesquisa.toLowerCase()
    itens.forEach((item)=>{
         if(barraDePesquisa.value == item.textContent){
            item.style.display = "block"
         } else {
             item.style.display = "none"
        }

         if(barraDePesquisa.value == ""){
            item.style.display = "block"
         }
    })
})

