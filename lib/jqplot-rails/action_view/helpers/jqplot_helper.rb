module ActionView
  module Helpers
  	module JQPlotHelper
      extend ActiveSupport::Concern

      def jqplot(height, width, data_series, options={})
      	dom_id = SecureRandom.hex(12)
        height = height.is_a?(String) ? height : "#{height}px"
        width = width.is_a?(String) ? width : "#{width}px"
        tag "div", :data => {:series => data_series, :options => options, :role => 'jqplot'}, 
        	         :id => dom_id, :style => "height:#{height};width:#{width}"
      end
  	end
  end
end
