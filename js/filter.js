var tabs=document.querySelectorAll(".filter-menu li");
var miercoles1=document.querySelectorAll(".miercoles");
var jueves1=document.querySelectorAll(".jueves");
var viernes1=document.querySelectorAll(".viernes");
var sabado1=document.querySelectorAll(".sabado");
var domingo1=document.querySelectorAll(".domingo");

var all=document.querySelectorAll(".item_wrap");


tabs.forEach((tab)=>{
    tab.addEventListener("click", () => {
        tabs.forEach((tab) => {
            tab.classList.remove("activo_pro");
        })
            tab.classList.add("activo_pro");

            var tabval = tab.getAttribute("data-tabs");
            all.forEach((item)=>{
                    item.style.display = "none";
            })

            if(tabval == "miercoles"){
                miercoles1.forEach((miercoles)=>{
                    miercoles.style.display = "flex";
                })
            }
            else if(tabval == "jueves"){
                jueves1.forEach((jueves)=>{
                    jueves.style.display = "flex";
                })
            }
            else if(tabval == "viernes"){
                viernes1.forEach((viernes)=>{
                    viernes.style.display = "flex";
                })
            }
            else if(tabval == "sabado"){
                sabado1.forEach((sabado)=>{
                    sabado.style.display = "flex";
                })
            }
            else if(tabval == "domingo"){
                domingo1.forEach((domingo)=>{
                    domingo.style.display = "flex";
                })
            }
            else{
                all.forEach((item)=>{
                    item.style.display = "flex";
                })
            }
    })
})


