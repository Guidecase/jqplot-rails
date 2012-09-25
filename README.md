JQPlot Rails
============

This gem provides the jQuery JQPlot plugin assets for Rails 3.1 and greater. The files will be added to the asset pipeline and available for you to use. It follows the lead of other jQuery gems in exposing a vendored asset directory and a few view helpers for the DOM API.

Full details about JQPlot (and the HTML options API docs) can be found on the JQPlot website itself:

http://www.jqplot.com/index.php

### Installation

In your Gemfile, add this line:

    gem 'jqplot-rails', :git => 'https://github.com/Guidecase/jqplot-rails.git'

You can include it by adding the following line to your javascript manifest:

    //= require jqplot

Additional JQPlot plugins must be individually required as needed. e.g.

    //= require plugins/jqplot.logAxisRenderer
    //= require plugins/jqplot.pointLabels
    //= require plugins/jqplot.mobile
    //= require plugins/jqplot.trendline

Include the script in your layout:

    <%= javascript_include_tag "jqplot" %>

You must also add the following to your stylesheet manifest:

    //= require jqplot