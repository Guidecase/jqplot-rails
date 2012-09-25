//= require jquery.jqplot

(function($) {
  $( document ).on( "pageshow", function( e ){
	$( document ).trigger( "jqplotbeforecreate" );

    // Automatically bind to data-role='jqplot' items.
	$("[data-role='jqplot']", e.target ).each(function() {
	  var container = $(this)

	  if ( typeof(container.data('jqplot')) === "undefined" ) {
        var dataSeries = container.data('series')
        var options = container.data('options')
        var targetId = container.attr('id')

        try {
          var chart = $.jqplot(targetId, dataSeries, options);
		} catch(e) {
		 container.html("<span style='color:red'>JQPlot Charting Error: <strong>"+e+"</strong></span>")
		}    
	    container.data('jqplot', true) // flag to prevent possible duplicate initialization
	  }
	});
  });
})(jQuery);  