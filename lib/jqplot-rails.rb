require 'rails'
require 'jqplot-rails/railtie' 

module Guidecase
  module Rails
    class JQPlotEngine < ::Rails::Engine; end # automates Rails asset loading from vendor path
  end
end