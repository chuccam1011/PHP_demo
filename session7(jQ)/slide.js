// $(document).ready(function(){

// 	var index = $('.slide ul li').length-1;
// 	var max= index;
// 	$('.pre').click(function(){
// 		if (index<max) {
// 			index=max;
// 			$('.slide ul li').eq(index).hide();
// 			index++;
// 		}
		
// 	})
// 	$('.next').click(function(){
// 		if (index>0) {}
// 			index==0;
// 		index--:
// 		$('.slide ul li').eq(index).show();
		
// 	})
// });
$(document).ready(function(){
	$('.tabb').click(function(){
		let tab= $(this).attr('data-tab');
		// alert(tab);
		$('.contentt').hide();
		$('.'+ tab).show();
	});

});