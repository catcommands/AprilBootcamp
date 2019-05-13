#a = 5
#puts a

# def with_tax(subtotal)
#     tax_amount = subtotal * 0.20
#     subtotal + tax_amount
# end

# puts with_tax(100.00)


class Invoice
    def initialize(subtotal)
        @subtotal = subtotal
    end