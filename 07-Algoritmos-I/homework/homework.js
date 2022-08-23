'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
 
 let result=[1]//si o si va a estar porque num/1 va a dar el mismo num
 let i=2; //arranco 2 porque necesito el resultado del indice anterior para poder seguir dividiendo, si arranco en 0 o 1 es irrelevante
 while (num>1){ //mientras el parámetro num sea mayor a 1 voy a dividir, y si su resto da 0 lo voy a agregar al array result
   if(num%i===0){
     result.push(i);
     num = num/i; //luego de agregar el num al array, declaro que num va a ser igual al resultado de num dividido anteriormente
    } else {
      i++; //en el caso que el resto no sea 0, avanzo un numero más en i para seguir dividiendo
    }
  }
   return result;
}
 

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  /* recorre buscando el menor del q le sigue;
  recorre para ubicar el num donde corresponde
  */
 let swap=true;// si se hace swap se recorre, sino no porque esta ordenado
 while(swap){//si en algun momento hay un swap se pasa a true
    swap=false;
    for (let i= 0; i < array.length; i++) {//recorremos el array para verificar si hay que ordenar
      if (array[i]>array[i+1]){//comparo el valor actual con el siguiente
        let aux=array[i];//guardo el valor en una variable auxiliar para luego swapear
        array[i]=array[i+1];//corro de indice el aux que guardé, pero al quedar copiados(iguales)
        array[i+1]=aux;//muevo de indice o posicion asi se realiza el swap.
        swap=true;
      }     
    }
  } return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
 for (let i = 1; i < array.length; i++) {//recorro el array, arranco en 1 porque necesito comparar con un indice anterior
    let j=i-1;//declaro variable j que me indica el anterior de i
    let aux=array[i];// declaro una variable auxiliar para guardar en caso de swap
    while (j>=0 && array[j]>aux) {//mientras el indice de j sea mayor o igual a 0 y array subindice de j se mayor que el valor que me guardo en la variable auxiliar(comparación de indices)
      array[j+1]=array[j];//voy a swapear, al quedar copiados iguales, lo acomodo en una posicion anterior
      j--;
    }
    array[j+1]=aux; //coloco en el lugar correcto el indice
  } 
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
 for (let i = 0; i < array.length; i++) {//recorro el array buscando el menor valor
   let min = i;//declaro variable auxiliar, valor minimo de i
   for (let j = i+1 ; j < array.length; j++) {
     if (array[j]<array[min]) {//si se cumple la condicion de que el valor del indice j sea menor que el valor minimo de i
       min =j;//voy a declarar un nuevo min
      }
    }
   if(i!== min){//si i es diferente del minimo
     let aux=array[i];//se hace el intercambio
     array[i]=array[min];//se igualan los indices, al quedar copiados, se intercambias posiciones
     array[min]= aux;//se termina de acomodar el nuevo valor.
    }
  }return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
