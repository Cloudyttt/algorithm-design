function foo() {
  getName = function () { console.log (1); }; // window.getName
  return this; // return window
}
foo.getName = function () { console.log(2);};
foo.prototype.getName = function () { console.log(3);};
var getName = function () { console.log(4);}; // window.getName => 4
function getName () { console.log(5);}

foo.getName ();                // 2
getName ();                    // 4
foo().getName ();              // 1
getName ();                    // 1
new foo.getName ();            // 2
new foo().getName ();          // 3
new new foo().getName ();      // 3