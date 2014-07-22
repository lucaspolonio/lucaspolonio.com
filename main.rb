require 'rubygems' if RUBY_VERSION < "1.9"
require 'sinatra/base'

class Lucas < Sinatra::Base
  get '/' do
    @test = 'Hello!'
    erb :index
  end
end

Lucas.run!