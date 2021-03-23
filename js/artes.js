var tabs=document.querySelectorAll(".tabs_wrap_artes ul li");
var poetas1=document.querySelectorAll(".poetas");
var artes1=document.querySelectorAll(".artes");
var conferencistas1=document.querySelectorAll(".conferencistas");
var musicos1=document.querySelectorAll(".musicos");
var niños1=document.querySelectorAll(".niños");

var all=document.querySelectorAll(".item_wrap");


tabs.forEach((tab)=>{
	tab.addEventListener("click", () => {
		tabs.forEach((tab) => {
			tab.classList.remove("activo_artes");
		})
			tab.classList.add("activo_artes");

			var tabval = tab.getAttribute("data-tabs");
			all.forEach((item)=>{
					item.style.display = "none";
			})

			if(tabval == "poetas"){
				poetas1.forEach((poetas)=>{
					poetas.style.display = "block";
				})
			}
			else if(tabval == "artes"){
				artes1.forEach((artes)=>{
					artes.style.display = "block";
				})
			}
			else if(tabval == "conferencistas"){
				conferencistas1.forEach((conferencistas)=>{
					conferencistas.style.display = "block";
				})
			}
			else if(tabval == "musicos"){
				musicos1.forEach((musicos)=>{
					musicos.style.display = "block";
				})
			}
			else if(tabval == "niños"){
				niños1.forEach((niños)=>{
					niños.style.display = "block";
				})
			}
			else{
				all.forEach((item)=>{
					item.style.display = "block";
				})
			}
	})
})



/*leer mas*/
$(".readmore-btn").on('click', function(){
	$(this).parent().toggleClass("showContent");

	var replaceText = $(this).parent().hasClass("showContent") ? "Leer menos" : "Leer mas";
	$(this).text(replaceText);
});