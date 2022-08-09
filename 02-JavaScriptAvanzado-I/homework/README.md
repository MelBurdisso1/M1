
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;//contexto global
var a = 5;//global
var b = 10;//global
var c = function(a, b, c) {
  var x = 10;//!=de x=1 xq está dentro de la función
  console.log(x);//10 porque está definida en la función
  console.log(a);//8
  var f = function(a, b, c) {
    b = a;
    console.log(b);//8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);//9
}
c(8,9,10);
console.log(b);//10
console.log(x);//1
```

```javascript

console.log(bar);//undef
console.log(baz);//undef
foo();
function foo() { console.log('Hola!'); }
var bar = 1;//se va para el inicio sin su valor (hoisting)
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);//"Franco" porque dentro del if se redefinió la variable instructor
```

```javascript
var instructor = "Tony";
console.log(instructor);//"Tony"
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);//"Franco" porque es una var en otro contexto
   }
})();
console.log(instructor);//"Tony" porque está en el contexto global
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);//"The Flash" 
    console.log(pm);//""Reverse Flash" porque se corresponden al mismo contexto de ejecución"
}
console.log(instructor);//"The Flash"
console.log(pm);//"Franco"
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"//el string será un num y el resultado será un 2.
"2" * "3"//primero se buscará pasar ambos a num y luego dará 6
4 + 5 + "px"//9px porque el string no es un num
"$" + 4 + 5//$45
"4" - 2// 2
"4px" - 2//No es un numero "4px"
7 / 0// infinity
{}[0]//undef
parseInt("09")//9
5 && 2// 2
2 && 5//5
5 || 0//5
0 || 5//5
[3]+[3]-[10]//f
3>2>1//error
[] == ![]//true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);//undefined
   console.log(foo()); //2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();//
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);//Undefined
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); //Aurelio De Rosa

var test = obj.prop.getFullname;//llama a la Function()

console.log(test());//undefined
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing(); //1 4 3 2. Porque los setTimeout quedan en cola de espera y va a depender de la cantidad de segundos que tarden en procesarse que van a entrar primero o despues a ejecutarse en el call stack.
```
