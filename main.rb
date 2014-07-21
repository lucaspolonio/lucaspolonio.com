require 'rubygems' if RUBY_VERSION < "1.9"
require 'sinatra/base'

class MyApp < Sinatra::Base
  get '/' do
    @test = 'Hello!'
    erb :index
  end
end

MyApp.run!