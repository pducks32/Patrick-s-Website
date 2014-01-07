$('dd dd meter').each( function() {
	var $data_value = $(this).data('value');
	console.log( $data_value );
	$(this).parent().width( $data_value );
});
$('dd dl').on('hover', function(){
	$(this).children('dd meter').width( 100% );
	$('dd dd meter').each( function() {
		var $data_value = $(this).data('value');
		console.log( $data_value );
		$(this).parent().width( $data_value );
	});
});