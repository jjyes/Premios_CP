var tabs=document.querySelectorAll(".tabs_wrap_premios ul li");
var juradoss=document.querySelectorAll(".jurados");
var actas=document.querySelectorAll(".acta");
var all=document.querySelectorAll(".item_wrap");


tabs.forEach((tab)=>{
	tab.addEventListener("click", () => {
		tabs.forEach((tab) => {
			tab.classList.remove("activo");
		})
			tab.classList.add("activo");

			var tabval = tab.getAttribute("data-tabs");
			all.forEach((item)=>{
					item.style.display = "none";
				})

			if(tabval == "jurados"){
				juradoss.forEach((jurados)=>{
					jurados.style.display = "block";
				})
			}
			else if(tabval == "acta"){
				actas.forEach((acta)=>{
					acta.style.display = "block";
				})
			}
			else{
				all.forEach((item)=>{
					item.style.display = "block";
				})
			}
	})
})