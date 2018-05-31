
/*
use strutils
s = 'This is Bill'
print ^ s
print _ s
print ! s
print % s
print s & '-'
print s - 'Bill'
print s - 'Bill' 'Bob'
print s * 3
print (& (% (^(!'racecar')) 'a') '_') * 2
*/

var strutils = {
	'^': function(s) { return s.toUpperCase(); },
	'_': function(s) { return s.toLowerCase(); },
	'!': function(s) { var t = ""; for (var i = s.length - 1; i >= 0; i--) t += s[i]; return t; },
	'%': function(s) { return s.split(''); },
	'&': function(s, d) { return this['%'](s).join(d); },
	'-': function(s, r, n) { n = n || ''; return s.replace(new RegExp(r, 'g'), n); },
	'*': function(s, n) { var t = ""; for (var i = 0; i < n; i++) t += s; return t; }
};

var s = 'This is Bill';
console.log(strutils['^'](s));
console.log(strutils['_'](s));
console.log(strutils['!'](s));
console.log(strutils['%'](s));
console.log(strutils['&'](s, '-'));
console.log(strutils['-'](s, 'Bill'));
console.log(strutils['-'](s, 'Bill', 'Bob'));
console.log(strutils['*'](s, 3));
var u = strutils;
console.log( u['*']( u['&']( u['%']( u['^']( u['!']('racecar')), 'a'), '_'), 2) );
