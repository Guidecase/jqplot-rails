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

### Use

A jqPlot element is simply a div with a number of data options that are read when initializing the control from the script. Initialize a graph with the height, width, array of one or more datasets, and a hash of jqPlot options.

    <%= jqplot 200, 300, [first_dataset, second_dataset], 
             :axes => {
               :xaxis => {:min => 0, :max => 11, :ticks => [[0,'J'],[1,'F'],[2,'M'],[3,'A'],[4,'M'],[5,'J'],[6,'J'],[7,'A'],[8,'S'],[9,'O'],[10,'N'],[11,'D']]}, 
               :yaxis => {:min => 0, :ticks => [[0,'0'],[10,'10'],[20,'20']]} 
             },
             :legend => {:show => true},
             :axesDefaults => {:tickOptions => {:showGridline => false}},
             :grid => {:shadow => false, :drawGridLines => false} ) %>    

The `jqplot` helper method simply creates a <div> tag populated with the provided data attribute options plus some sane defaults.

Note: this gem is meant to be used with JQuery Mobile and binds document triggers against JQM-specific events (namely 'pageshow').


### License

The JQPlot Rails Gem is published under the New BSD license.

Originally developed for Earlydoc health management apps: 

http://www.earlydoc.com
