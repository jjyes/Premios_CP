$('.arrival .btn_filtro').click(function(){
	let filter = $(this).attr('data-filter');
	if(filter == 'general'){
		$('.arrival .box').show(400);
	}else{
		$('.arrival .box').not('.'+filter).hide(200);
		$('.arrival .box').filter('.'+filter).show(400);
	}

	$(this).addClass('button-active').siblings().removeClass('button-active')
});

