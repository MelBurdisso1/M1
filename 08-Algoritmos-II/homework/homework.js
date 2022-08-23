'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  /* 1 dividir el array al medio
  2 determinar pivote
  3 ordenar menores a la izq y mayores a la  derecha
  4 recursion
  5 unir y retornar*/ 

  if(array.length<=1) return array;// en primer lugar me aseguro que si el array es menor o igual a 1, voy a retornar el array como está.
  
 
  let left=[];//declaro tres variables que definen la division del array en dos partes , minimos a la izq, mayores a la der y el pivot que va a ser el primer elemento del array
  let right=[];
  let pivot= array.shift();

  for (let i of array) {// para cada item del array se va a ejecutar el mismo bloque, no nos interesa el indice sino el valor de cada indice.
    if(pivot>i){//si el valor de i es menor al pivot, éstese va a agregar a la izquierda del pivot
      left.push(i)
    } else {//en caso contrario, se agregara a la derecha
      right.push(i);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];// en este paso se unen las funciones + el valor del pivote y se retorna el array ordenado. Los tres puntitos sirven para concatenar los diferentes bloques y unir todo en un solo array, en este caso
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length<=1) return array;//me aseguro que el array tenga más de un elemento, sino no se puede dividir.

  let i= Math.floor(array.length/2);//declaro la variable i que va a ser el punto de division de mi array. uso math floor para que sea lo más exacta posible la particion
  let left=array.slice(0,i);//al quedar dividido en dos el array, declaro que la parte derecha va a ser la division que inicia desde el indice o hasta el punto de division(i)
  let right=array.slice(i);//la otra parte de la division va a comprender desde el punto de division(i) hasta el ultimo elemento que no se sabe.

  left= mergeSort(left);//se llama con recursion a la funcion ya que en cada "lado" de la division se va a realizar el mismo bloque de procedimientos.
  right= mergeSort(right);

  let result= [];//declaro una variable result que va a ser el array ordenado

  while(left.length && right.length){// mientras cada variable tenga elementos, voy a recorrer
    if(left[0]>right[0]) {//comparo si el valor de izq es mayor al de la derecha
      result.push(right.shift());// en caso de ser true, saco el valor del indice de right y lo pusheo a la variable de resultado
    } else {
      result.push(left.shift());// en el caso contrario, quito y pusheo el valor del indice de la izq
    }
  }
 return [...result,...left,...right]//concateno y retorno el array ordenado
}





// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
