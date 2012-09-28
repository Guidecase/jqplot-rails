//= require jquery.jqplot

(function($) {
  function substitueRenderOptions(options) {
	if (!options) return options

    // Because options are based as a data attribute string, any renderer object options must be eval'ed for execution
    // TODO: recursively walk options for renderer strings; for now just eval defaultseries  renderer
	if (options.seriesDefaults && 
		typeof(options.seriesDefaults.renderer) === 'string' &&
		options.seriesDefaults.renderer.indexOf('$.') === 0) {
      options.seriesDefaults.renderer = eval(options.seriesDefaults.renderer)
	}
	return options
  }
	
  $( document ).on( "pageshow", function( e ){
	$( document ).trigger( "jqplotbeforecreate" );

    // Automatically bind to data-role='jqplot' items.
	$("[data-role='jqplot']", e.target ).each(function() {
	  var container = $(this)

	  if ( typeof(container.data('jqplot')) === "undefined" ) {
        var dataSeries = container.data('series')
        var options = substitueRenderOptions(container.data('options'))
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