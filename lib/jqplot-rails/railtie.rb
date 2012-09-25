module Guidecase
  class JQPlotRailtie < ::Rails::Railtie
    initializer "jquery_mobile.jqplot_helper" do
      ActionView::Base.send :include, ActionView::Helpers::JQPlotHelper
    end
  end
end