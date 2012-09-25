//= require jquery.jqplot

(function($) {
  // Automatically bind to data-role='jqplot' items.
  $( document ).on( "pagecreate create", function( e ){
	$( document ).trigger( "jqplotbeforecreate" );

	$( ":jqmData(role='jqplot')", e.target ).each(function() {
	  var container = $(this)
      if ( typeof(container.data('jqplot')) === "undefined" ) {
        var dataSeries = container.data('series')
        var options = container.data('options')
	    var chart = $.jqplot(container, dataSeries, options);
	  }
	});
  });
})( jQuery );