/*
square x = x * x
xs = 1, 2, 3
print square xs
*/
var square = function(x) { return x * x; };
var xs = [1, 2, 3];
console.log(xs.map(square));


/* 
Point x y
coords = '($x, $y)'
a = Point 2 4
print coords a
*/
var Point = function(x, y) { this.x = x; this.y = y; };
var coords = function($this) { return "(" + $this.x + ", " + $this.y + ")"; };
var a = new Point(2, 4);
console.log(coords(a));


/*
Point3D Point z
origin = x, y, z == 0 
print origin Point3D 0 0 0
*/
var Point3D = function(x, y, z) {
	Point.call(this, x, y);
	this.z = z;
};
var origin = function($this) {
	return $this.x == 0
		&& $this.y == 0
		&& $this.z == 0;
};
console.log(origin(new Point3D(0, 0, 0)));

/*
Person name age
	birthday = age ++

people = Person 'Bob' 52,
				'Mary' 41,
				'Tim' 6

about = "$name is $age years old."
print about birthday people
*/
var Person = function(name, age) { 
	this.name = name; 
	this.age = age;
	this.birthday = function() { return new Person(this.name, ++this.age); };
};
var people = [new Person('Bob', 52), new Person('Mary', 41), new Person('Tim', 6)];
var about = function($this) { return $this.name + " is " + $this.age + " years old."; };
console.log(people.map(function(p) { return p.birthday(); }).map(about));

/*
square = ^ 2
cube x = square x * x
print cube 1..10
*/
$ = {};
$['^'] = function($a, $b) { return Math.pow($a, $b); };
var square = $['^'].bind(this, 2);
var cube = function(x) { return square(x) * x; };
console.log([1,2,3,4,5,6,7,8,9,10].map(cube));

/*
Position file line col
toString (Position f l c) = "$f($l,$c)"
pos = Position 'stdin' 3 2
print pos.toString
*/
var Position = function(file, line, col) {
	this.file = file;
	this.line = line;
	this.col = col;
};
var toString = function(f, l, c) { return f + "(" + l  + "," + c + ")"; };
var pos = new Position('stdin', 3, 2);
console.log(toString(pos.file, pos.line, pos.col));

/*
myMath a b
	add = a + b
	sub = -

print (Math 1 2).sub + (Math 3 4).add
*/

$['-'] = function(a, b) { return a - b; };
var myMath = function(a, b) {
	this.a = a;
	this.b = b;
	this.add = function add() { return this.a + this.b; };
	this.sub = $['-'].bind(this, this.a, this.b);
};
console.log(new myMath(1, 2).sub() + new myMath(3, 4).add());





