puts "Hello"
print "World"
put "!"

# hashtag to comment
=begin 
everything between these two = equals are like /* ... */ in JS.
=end


# Casting & Converting

puts 3.14to_1
puts 3.to_f
puts "3.0".to_s
puts 100 + "50".to_i


#Methods (something like functions in JS)

def add_numbers(num1, num2=99)
    return num1 + num2
end

sum = add_numbers(4)
puts sum
