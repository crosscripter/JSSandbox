/*
# square is multiplication of n with itself
square1 n = n * n

# square is n to the power of 2 
square2 n = n ** 2

# square is a partial application of power of 2
square3 = ** 2

# the double application operator <|> 
# takes a function and a single argument 
# and passes the argument to the function twice
$$ f a = f a a

// square is just the double application of the multiplication of n
square4 = $$ *

# Run all our square functions
squares = square1, square2, square3, square4
print map squares, $ 4
*/

// square is multiplication of n with itself
var square1 = function(n) { return n * n; };

// square is n to the power of 2 
var square2 = function(n) { return Math.pow(n, 2); };

// square is a partial application of power of 2
var square3 = (function(a, b) { return Math.pow(b, a); }).bind(this, 2);

// the double application operator <|> 
// takes a function and a single argument 
// and passes the argument to the function twice
this["$$"] = function(f, a) { return f(a, a); };

// square is just the partial application of 
// the double application of 
// the multiplication of n :)
var square4 = this["$$"].bind(this, function(a, b) { return a * b; });

// Run all our square functions
var squares = [square1, square2, square3, square4];
console.log(squares.map(function(square) { return square.apply(this, [4]) }));
