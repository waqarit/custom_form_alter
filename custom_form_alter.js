(function ($) {
    Drupal.behaviors.qs_user_profiles = {
        attach: function (context, settings ) {
		  		  
			//$(function () {
				$("#edit-term-node-tid-depth-b").change(function(e) {
					
					var fnid = $(this).val(); 
					var data = 'fnid=' + encodeURI(fnid);
					$.ajax({
						type: "GET",
						url: "/child/terms/values",
						data: data,
						success: function(msg){ 
							$('.form-item-term-node-tid-depth-b1 select#edit-term-node-tid-depth-b1').remove();
							$('.form-item-term-node-tid-depth-b1').html(msg);
						}
					});
			
				});
			//});
  
		}// end attach
	}//end drupal behavior	

})(jQuery);