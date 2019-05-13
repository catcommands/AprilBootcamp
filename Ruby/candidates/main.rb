# This is the main entrypoint into the program
# It requires the other files/gems that it needs

require 'pry'
require './candidates'
require './filters'

## Your test code can go here

#binding.pry

#pp @candidates

#pp find(20)
pp qualified_candidates(@candidates)

=begin
1) List out the ruby files that are loaded (required) when we run ruby main.rb
2) What does the pp method do? How is it different from puts (try it out!)?
3) Why is ActiveSupport being used (what happens if we take it out)?
4) What is pry and how is it different than irb?


=end

#Task 1: Practice with Pry

