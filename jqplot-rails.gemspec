$:.push File.expand_path("../lib", __FILE__)

Gem::Specification.new do |s|
  s.name         = "jqplot-rails"
  s.version      = '0.9.0'
  s.platform     = Gem::Platform::RUBY  
  s.description  = "JQPlot"
  s.summary      = "This gem provides the JQPlot plugin assets to Rails apps."
  s.author       = 'Earlydoc'
  s.email        = 'developer@earlydoc.com'
  s.homepage     = 'http://www.earlydoc.com'  
  s.require_path = 'lib'
  s.required_rubygems_version = ">= 1.8.x"

  s.files        = `git ls-files`.split("\n")
  s.executables  = `git ls-files`.split("\n").select{|f| f =~ /^bin/}

  s.add_dependency "rails"
end