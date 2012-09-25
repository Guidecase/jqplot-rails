module ActionView
  module Helpers
  	module JQPlotHelper
      extend ActiveSupport::Concern

      def jqplot(height, width, data_series, options={})
      	dom_id = SecureRandom.hex(12)
        tag "div", :data => {:series => data_series, :options => options}
      end
  	end
  end
end