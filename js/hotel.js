$(".readmore-btn").on('click', function(){
	$(this).parent().toggleClass("showContent");

	var replaceText = $(this).parent().hasClass("showContent") ? "Leer menos" : "Leer mas";
	$(this).text(replaceText);
});