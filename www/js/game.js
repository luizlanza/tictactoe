$(document).ready(function(){
	
	var character = null;
	
	$('li.select-char').click(function(){
		character = $(this).attr('id');
		
		$('li.selected-char').each(function(){
			$(this).removeClass('selected-char');
		});
		
		$(this).addClass('selected-char');
	});
	
	$('input#start-game').click(function(){
		if(character == null){
			alert('por favor escolha');
		}else{
			$('div#choose-animal').hide();
			$('div#play-game').show();
		}
	});
	
	$('td.cel-game').click(function(){
		var thisValue = $(this).html();
		
		if(thisValue == 'dog' || thisValue == 'cat'){
			alert('escolha outra');
		}else{
			$(this).html(character);
		}
	});
	
});
