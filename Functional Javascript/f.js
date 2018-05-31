var print = console.log;

// Animal name sound legs
function Animal(name, sound, legs) {
	this.name = name;
	this.sound = sound;
	this.legs = legs;
}

// FourLegged = Animal name sound 4
function FourLegged(name, sound) { Animal.call(this, name, sound, 4); }

// Cat = FourLegged name 'meow'
function Cat(name) { FourLegged.call(this, name, 'meow'); }

// Dog = FourLegged name 'woof'
function Dog(name) { FourLegged.call(this, name, 'woof'); }

// Bird = Animal name 'chirp' 2
function Bird(name) { Animal.call(this, name, 'chirp', 2); }

// Snake = Animal name 'hiss' 0
function Snake(name) { Animal.call(this, name, 'hiss', 0); }

// speak = print '$name says $sound'
function speak($1) { print("%s says %s", $1.name, $1.sound); }

// meow Cat = speak
function meow($1) { if ($1 instanceof Cat) return speak; }

// woof Dog = speak
function woof($1) { if ($1 instanceof Dog) return speak; }

// chirp Bird = speak
function chirp($1) { if ($1 instanceof Bird) return speak; }

// hiss Snake = speak
function hiss($1) { if ($1 instanceof Snake) return speak; }

/*
walk Snake = '$name slithers'
walk = print '$name walks on $legs legs'
*/
function walk($1) { 
	if ($1 instanceof Snake) return print('%s slithers', $1.name);
	print('%s walks on %s legs', $1.name, $1.legs); 
}

// furry Cat | Dog = true
function furry($1) { if ($1 instanceof Dog || $1 instanceof Cat) return true; }

// feathered Bird = true
function feathered($1) { if ($1 instanceof Bird) return true; }

// scaled Snake = true
function scaled($1) { if ($1 instanceof Snake) return true; }

// pets = Cat YenLi, Cat Tun, Dog 'Max', Bird jojo, Snake 'Sammy'
function pets() { 
	return [
		new Cat('YenLi'), 
		new Cat('Tun'), 
		new Dog('Max'), 
		new Bird('jojo'), 
		new Snake('Sammy')
	];
}

/*
print 
	furry pets
	meow pets
	speak pets
	walk pets
*/
[pets().forEach(function($1) { furry($1); }),
 pets().forEach(function($1) { meow($1); }),
 pets().forEach(function($1) { speak($1); }),
 pets().forEach(function($1) { walk($1); })].forEach(function($1) { print($1); });
