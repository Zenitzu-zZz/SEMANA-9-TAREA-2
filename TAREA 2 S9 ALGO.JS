// Bloque 1: Ejercicios con Cadenas 
// 1.Contar caracteres de una frase publicitaria
// Entrada: "La tecnología avanza"
// Salida: "La frase tiene 19 caracteres."

let frase0 =  String ( prompt ( 'ingresa la frase: ' ) )

let numero0  = 0;

for ( let i = 0 ; i < frase0.length ; i++ ) {
    
    numero0  = frase0.length

}

console.log (`la frase tiene ${numero0} de caracteres`)


//2 Contar apariciones de una vocal en un título
// Entrada: "Programación avanzada"
// Salida: "La vocal 'a' aparece 5 veces."

let frase1 = String ( prompt ( ' ingresa el titulo:  ' ) )

let vocal1 = "a"

let numero1 = 0;

let vocal2 = "A"

let numero20 = 0

for ( let c = 0 ; c < frase1.length ; c++ ) {

  if( frase1[c] === "a" ){

      numero1 += frase1[c].length

  } else if ( frase1[c] === "A") {
      
      numero20 += frase1[c].length
      
      
  }

}

console.log( `la ${vocal1} aparece ${numero1} veces`)
console.log( `la ${vocal2} aparece ${numero20} veces`)

// //3.Invertir un nombre de producto
// // Entrada: "Laptop"
// // Salida: "potpaL"

let palabra1 = String ( prompt ( 'ingresa la palabra: ' ) )

let palabrainvertida1 = ""

for ( let i = palabra1.length-1 ; i >= 0 ; i--) {
    
    palabrainvertida1 += palabra1[i]

}

console.log ( palabrainvertida1)


// 4.Comparar nombres de ciudades por longitud
// Entrada: "Milagro" y "Guayaquil"
// Salida: "La palabra 'Guayaquil' tiene más letras."

let frases1 =   String ( prompt ( 'ingresa la 1ra palabra: ' ) )

let frases2 = String ( prompt ( 'ingresa la 2da palabra: ' ) )



if ( frases1.length > frases2.length){
    
    console.log ( `la palabra ${frases1} tiene mas letras `)
  
} else if ( frases1.length < frases2.length) {
    
    console.log ( `la palabra ${frases2} tiene mas letras `)

} else {
     
    console.log ( `ambas palabras tienen las mismas letras `)
  
}


// 5.Obtener iniciales de un cargo profesional
// Entrada: "Director General Académico"
// Salida: "D.G.A."

let frases =  String ( prompt ( 'ingresa el nombre del cargo: ' ) )

let salidas = ""

for ( let i = 0 ; i < frases.length ;  i++ ){
 
  if (i === 0 && frases[i] !== " ") {
    
    salidas += frases[i] + ".";
    
}

    else if (frases[i] === " " && frases[i + 1] !== " " && frases[i + 1] !== undefined) {

        salidas += frases[i + 1] + ".";

    }

}
 console.log( salidas )


 // Bloque 2 (versión con Arreglos del bloque1)
// 6. Contar caracteres de varias frases publicitarias
// Dado un arreglo con frases publicitarias, contar cuántos caracteres tiene cada una.
// Entrada:
// ["La tecnología avanza", "Innovar para crecer", "Calidad garantizada"]
// Salida:
// "La tecnología avanza" → 19 caracteres  
// "Innovar para crecer" → 20 caracteres  
// "Calidad garantizada" → 21 caracteres

let frasi = ["La tecnología avanza", "Innovar para crecer", "Calidad garantizada"]

let salidan = 0 ;

for ( let i = 0 ; i < frasi.length; i++ ) {
 
 salidan  = frasi[i].length 
 
   
     console.log ( ` la frase ${frasi[i]} tiene ${salidan}` )

}


// 7. Contar apariciones de una vocal en cada título
// Dado un arreglo de títulos y una vocal específica, contar cuántas veces aparece esa vocal en cada título.
// Entrada:
// ["Programación avanzada", "Desarrollo web", "Análisis de datos"]
// vocal = 'a'
// Salida:
// "Programación avanzada" → 5 veces la 'a'  
// "Desarrollo web" → 1 vez la 'a'  
// "Análisis de datos" → 4 veces la 'a'

let titulos = ["Programación avanzada", "Desarrollo web", "Análisis de datos"];

let vocal = 'a';


for (let i = 0; i < titulos.length; i++) {

  let contador = 0;

  let titulo = titulos[i].toLowerCase();

  for (let j = 0; j < titulo.length; j++) {

    if (titulo[j] === vocal) {

      contador++;

    }

  }

  console.log('La frase "' + titulos[i] + '" tiene ' + contador + ' ' + (contador === 1 ? 'vez' : 'veces') + ' la "' + vocal + '"');
}


// 8. Invertir los nombres de varios productos
// Dado un arreglo con nombres de productos, mostrar cada uno invertido.
// Entrada:
// ["Laptop", "Celular", "Tablet"]
// Salida:
// "Laptop" → "potpaL"  
// "Celular" → "raluleC"  
// "Tablet" → "telbaT"

let palabra = ["Laptop", "Celular", "Tablet"]

    for ( let c = 0 ; c < palabra.length ; c++ ) {
        
        let invertida = ""
        
      for ( let c1 = palabra[c].length-1 ; c1 >= 0 ; c1-- ){
         
         invertida += palabra[c][c1]
           
      }
       
      console.log( `${palabra[c]} → ${invertida}`)
    
    }
     

// 9. Comparar longitudes de nombres de ciudades
// Dado un arreglo con nombres de ciudades, identificar cuál tiene más letras.
// Entrada:
// ["Milagro", "Guayaquil", "Quito", "Cuenca"]
// Salida:
// "La ciudad con más letras es 'Guayaquil' (9 letras)."

let ciudades = ["Milagro", "Guayaquil", "Quito", "Cuenca"];

let ciudadmayor = "";

let numeromayor = 0;

for ( let c = 0 ; c < ciudades.length ; c++ ) {
    
  if ( ciudades[c].length  > numeromayor ) {
       
      ciudadmayor = ciudades[c]
       
      numeromayor = ciudades[c].length
       
  }
   
}

 console.log( `la ciudad con mas letras es ${ciudadmayor} y tiene ${numeromayor} letras`)


// 10. Obtener iniciales de varios cargos profesionales
// Dado un arreglo con nombres de cargos profesionales, obtener las iniciales de cada uno.
// Entrada:
// ["Director General Académico", "Jefe de Laboratorio", "Asistente Administrativo"]
// Salida:
// "Director General Académico" → D.G.A.  
// "Jefe de Laboratorio" → J.D.L.  
// "Asistente Administrativo" → A.A.

let cantidaden = Number ( prompt ( 'ingresa la cantidad de cargos: ' ) )

let arreglon = []

let ini = ''

let frasen = ''

for ( let i = 1 ; i <= cantidaden ; i++ ) {

    let cargos = String ( prompt ( `ingresa el cargo #${i}: ` ) )
    
    arreglon.push ( cargos )

}

for ( let c = 0 ; c < arreglon.length ; c++ ) {
    
    frasen = arreglon[c]
 
    for ( let j = 0 ; j < arreglon[c].length ; j++) {
        
        if ( j === 0 && arreglon[c][j] !== " " ) {
            
             ini = arreglon[c][j] + '.'
       
        } else if ( arreglon[c][j] === " " && arreglon[c][j + 1] !== " " && arreglon[c][j + 1] !== undefined)
        
        ini  += arreglon[c][j + 1] + ".";
    }
    console.log ( `"${frasen}" —> ${ini}` )
}
 

// Bloque 3: Ejercicios Individuales con Ciclos
// 11. Promedio de calificaciones mayores a 70
// Descripción:
// Dadas n calificaciones de estudiantes, calcular el promedio solo de aquellas que sean mayores o iguales a 70.
// Entrada / Proceso:
// Ingresar la cantidad de calificaciones n.
// Leer n notas dentro de un ciclo for.
// Acumular y contar solo las notas ≥ 70.
// Calcular el promedio correspondiente.
// Salida esperada:
// Ingrese número de calificaciones: 5  
// Notas: 65, 80, 90, 50, 75  
// Promedio de notas ≥ 70: 81.67

let n1 = prompt ( ' ingresa el numero de calificaciones: ')

let arregloparamayores1 = [] 

let arreglo1 = []

let suma1 = 0

let div1 = 0

for ( let i = 0 ; i < n1 ; i++ ) {
    
let calificaciones = Number ( prompt ( 'ingresa las calificaciones: ' ))
    
     arreglo1.push(calificaciones)
     
}

  for ( let c = 0 ; c < arreglo1.length ; c++ ) {
       
      if ( arreglo1[c] >= 70 ) {
          
        arregloparamayores1.push(arreglo1[c])
           
        suma1 += arreglo1[c]
          
      }  for ( let j = 0 ; j <arregloparamayores1.length ; j++ ) {
           
            div1 = suma1 / arregloparamayores1.length
      }
     
  }
    
  console.log ( `la suma de las notas q son mayor o igual a 70: ${suma1} se las promedian y como resultado dan: ${div1} `)


// 12. Contar cuántos números negativos se ingresan
// Descripción:
// Ingresar n números y contar cuántos son negativos.
// Entrada / Proceso:
// Leer n.
// Usar un ciclo for o while para pedir los números.
// Contar los valores menores a 0.
// Salida esperada:
// Ingrese cuántos números desea ingresar: 6  
// Valores: 3, -5, 0, 7, -1, -8  
// Cantidad de negativos: 3


let n2 = prompt ( ' ingresa cuantos numeros desea ingresar : ')

let numer2 = 0

let arregloparanegativos2 = [] 

let arreglo2 = []


for ( let i = 0 ; i < n2 ; i++ ) {
    
let numeros2 = Number ( prompt ( 'ingresa los numeros: ' ))
    
     arreglo2.push( numeros2 )
     
}

  for ( let c = 0 ; c < arreglo2.length ; c++ ) {
       
      if ( arreglo2[c] < 0) {
          
        arregloparanegativos2.push(arreglo2[c])
           
          
      }  for ( let j = 0 ; j < arregloparanegativos2.length ; j++ ) {
           
            numer2 =  arregloparanegativos2.length
      }
     
  }
    
     console.log ( `los numeros negativos son: ${arregloparanegativos2} y en total hay: ${numer2} negativos`)


 // 13. Promedio de edades: mayores vs menores de edad
// Descripción:
// Dadas las edades de un grupo de personas, obtener el promedio de los mayores de edad (≥ 18 años) y de los menores de edad (< 18 años).
// Entrada / Proceso:
// Ingresar el número de personas n.
// Leer las edades una por una con un ciclo.
// Mantener contadores y acumuladores separados para mayores y menores.
// Calcular los promedios respectivos.
// Salida esperada:
// Ingrese número de personas: 5  
// Edades: 17, 20, 35, 15, 18  
// Promedio de mayores de edad: 24.33  
// Promedio de menores de edad: 16.00

let cantidad3 = parseInt ( prompt ( 'ingresa la cantidad de edades:  ') )

let sumamayores = 0

let sumamenores = 0

let divmayores  = 0

let divmenores = 0

let edadesmenores = []

let edadesmayores = []

for ( let c = 0 ; c < cantidad3 ; c++ ) {
    
    let edades = parseInt ( prompt ( 'ingresa las edades: ') )
    
      if ( edades >= 18) {
    
          edadesmayores.push(edades) 
    
        } else {
    
          edadesmenores.push(edades)
    
    } 
    
}    for ( let i = 0 ; i < edadesmenores.length ; i++ ) {
        
        sumamenores += edadesmenores[i]
        
      divmenores  = sumamenores / edadesmenores.length
        
        } for ( let j = 0 ; j < edadesmayores.length ; j++ ) {
            
             sumamayores += edadesmayores[j]
        
             divmayores =  sumamayores / edadesmayores.length
            
          }
           
console.log ( `el promedio de los mayores de edad: ${divmayores}`)
console.log ( `el promedio de los menores de edad: ${divmenores}`) 


// 14. Mostrar la tabla de multiplicar de un número
// Descripción:
// Dado un solo número, mostrar su tabla de multiplicar del 1 al 10.
// Entrada / Proceso:
// Ingresar el número.
// Usar un ciclo for desde 1 hasta 10.
// Mostrar el producto en cada iteración.
// Salida esperada:
// Ingrese un número: 4  
// Tabla del 4:
// 4 × 1 = 4  
// 4 × 2 = 8  
// 4 × 3 = 12  
// …  
// 4 × 10 = 40
 
 let cantidad4 = parseInt ( prompt ( 'ingresa la cantidad hasta donde desea multiplicar: ') )
 
 let numero4 = parseInt ( prompt ( 'ingresa el numero que deseas multiplicar: ' ))
 
 let r4 = 0
 
 for ( let i = 0 ; i <= cantidad4 ; i++ ) {
     
     r4 = numero4 * i 
     
     
     console.log ( `la tabla del:  ${numero4} x ${i} = ${r4}`)
 }


 // 15. Promedio de números pares e impares
// Descripción:
// Ingresar n números y calcular el promedio de los números pares y de los números impares por separado.
// Entrada / Proceso:
// Ingresar n.
// Leer cada número dentro de un ciclo for.
// Acumular por separado los pares (n % 2 == 0) y los impares (n % 2 != 0).
// Calcular los promedios respectivos.
// Salida esperada:
// Ingrese cantidad de números: 6  
// Valores: 2, 5, 8, 9, 4, 7  
// Promedio de pares: 4.67  
// Promedio de impares: 7.00

let cantidad5 =  Number( prompt ( 'ingresa la cantidad de numeros: ' ) )

let arregloimpar5 = []

let arreglopar5 = []

let sumaimpar5 = 0

let sumapar5  = 0

let promediopar5 = 0

let promedioimpar5 = 0

for ( let i = 0 ; i < cantidad5 ; i++ ) {

     let numeros5 =  Number( prompt ( 'ingresa los numeros: ' ) )

    if ( numeros5 % 2 === 0 ) {
        
        arreglopar5.push( numeros5 )
        
    } else {
        
        arregloimpar5.push( numeros5 )
        
    } 
    
}       for ( let c = 0 ; c < arreglopar5.length ; c++ ) {
    
          sumapar5 += arreglopar5[c]
    
          promediopar5 = sumapar5 / arreglopar5.length
    
        }       for ( let j = 0 ; j < arregloimpar5.length ; j++ ) {
    
                    sumaimpar5 += arregloimpar5[j]
    
                    promedioimpar5 = sumaimpar5 / arregloimpar5.length
    
   
                }
    
    console.log( `el promedio de los numeros par son: ${promediopar5} ` )
  console.log( `el promedio de los numeros impar son: ${promedioimpar5} ` )


  // Bloque 4: Versión con Arreglos (versión con arreglos del bloque 3)
// 16. Promedio de calificaciones mayores a 70
// Descripción:
// Dada una lista de calificaciones, calcular el promedio solo de aquellas que sean mayores o iguales a 70.
// Entrada:
// calificaciones = [65, 80, 90, 50, 75]
// Proceso:
// Recorrer la lista con un ciclo for.
// Sumar y contar solo las calificaciones ≥ 70.
// Calcular el promedio correspondiente.
// Salida esperada:
// Promedio de calificaciones ≥ 70: 81.67

let cantidad6 = Number ( prompt ( 'ingresa la cantidad de numeros: ' ) );

let arreglo6 = [];

let arreglomayores6 = []

let div6 = 0

let suma6 = 0

for ( let c = 0 ; c < cantidad6 ; c++ ) {

    let numero6 = Number ( prompt ( 'ingresa las calificaciones: ' ) ) 

    arreglo6.push ( numero6 )


} for ( let i = 0 ; i < arreglo6.length ; i++ ) {

     if ( arreglo6[i] >= 70) {
         
      arreglomayores6.push(arreglo6[i])
      
     } 

} for ( let j = 0 ; j < arreglomayores6.length ; j++ ) {
         
             suma6 += arreglomayores6[j]
             
             div6 = suma6 / arreglomayores6.length
         
     }




console.log ( `el promedio de las calificaciones que son mayores a 70 son ${div6}`)


// 17. Contar números negativos en una lista
// Descripción:
// Dada una lista de números, contar cuántos son negativos.
// Entrada:
// numeros = [3, -5, 0, 7, -1, -8]
// Proceso:
// Usar un ciclo for para recorrer la lista.
// Contar los valores menores a 0.
// Salida esperada:
// Cantidad de números negativos: 3


let cantidad7 = Number ( prompt ( 'ingresa la cantidad de numeros: ' ) );

let arreglo7 = []

let arreglonegativo = []

let negativos = 0

for ( let c = 0 ; c < cantidad7 ; c++ ) {

    let numeros = Number ( prompt ( 'ingresa los numeros: ' ) )

    arreglo7.push( numeros )

}      for ( let i = 0 ; i < arreglo7.length ; i++ ) {

        if ( arreglo7[i] < 0 ) {
    
         arreglonegativo.push ( arreglo7[i] )

        }


}         
console.log( `la cantidad de numeros negativos son: ${arreglonegativo.length}`)


// 18. Promedio de edades: mayores vs menores de edad
// Descripción:
// Dada una lista con edades de personas, obtener el promedio de los mayores de edad (≥ 18) y de los menores de edad (< 18).
// Entrada:
// edades = [17, 20, 35, 15, 18]
// Proceso:
// Recorrer la lista con un ciclo for.
// Separar acumuladores y contadores para mayores y menores.
// Calcular los promedios correspondientes.
// Salida esperada:
// Promedio de mayores de edad: 24.33  
// Promedio de menores de edad: 16.00

let cantidad8 = Number (  prompt ( 'ingresa la cantidad de numeros: ' ) )

let arreglooriginal = []

let arreglomayor = [];

let sumamayor = 0;

let divmayor = 0;

let arreglomenor = [];

let sumamenor = 0;

let divmenor = 0;

for ( let c = 0 ; c < cantidad8 ; c++ ) {

    let numero = Number ( prompt ( 'ingresa los numeros: ' ) )

    arreglooriginal.push ( numero )
}  

for ( let i = 0 ; i < arreglooriginal.length ; i++ ) {

    if ( arreglooriginal[i] >= 18 ) {

        arreglomayor.push ( arreglooriginal[i])

    } else {

        arreglomenor.push ( arreglooriginal[i])
    }
}

for ( let j = 0 ; j < arreglomayor.length ; j++ ) {

    sumamayor += arreglomayor[j]

    divmayor = sumamayor / arreglomayor.length

}

for ( let m = 0 ; m < arreglomenor.length ; m++) {

    sumamenor += arreglomenor[m]

    divmenor = sumamenor / arreglomenor.length 
}

console.log ( `El promedio de las edades mayores son: ${divmayor}`)

console.log ( `El promedio de las edades menores son: ${divmenor}`)


// 19. Mostrar tablas de multiplicar de varios números
// Descripción:
// Dada una lista de números, mostrar la tabla de multiplicar del 1 al 10 para cada uno.
// Entrada:
// numeros = [3, 5]
// Proceso:
// Ciclo externo: recorrer cada número.
// Ciclo interno: multiplicar del 1 al 10.
// Salida esperada:
// Tabla del 3:
// 3, 6, 9, 12, 15, 18, 21, 24, 27, 30

// Tabla del 5:
// 5, 10, 15, 20, 25, 30, 35, 40, 45, 50

let cantidad9 = Number ( prompt ( 'ingresa la cantidad de numeros que desea multiplicar: ' ) );

let arreglo = [];

let hasta = Number ( prompt ( 'ingresa el numero hasta donde desea multiplicar: ' ) )

let iterador = 0

let n = 0

let r = 0;

for ( let c = 0 ; c < cantidad9 ; c++ ) {

    let numero = Number ( prompt ( 'ingresa los numeros que se multiplicaran: ' ) )

    arreglo.push ( numero )
}

    for ( let i = 0 ; i < arreglo.length ; i++ ) {
        
        n =  arreglo[i]
    
    
        for ( let j = 0 ; j <=  hasta ; j++ ) {
            
          iterador = j
          
          r =  n * j
        
             console.log (  ` ${n} X ${iterador} = ${r}` )
             
        }
          
         
        
        }
        


// 20. Promedio de números pares e impares
// Descripción:
// Dada una lista de números, calcular el promedio de los pares y de los impares.
// Entrada:
// numeros = [2, 5, 8, 9, 4, 7]
// Proceso:
// Recorrer el arreglo con un ciclo for.
// Sumar y contar pares e impares por separado.
// Calcular los promedios respectivos.
// Salida esperada:
// Promedio de pares: 4.67  
// Promedio de impares: 7.00

let cantidad = Number ( prompt ( 'ingresa la cantidad de numeros: ' ) );

let arreglopar = [];

let sumapar = 0;

let divpar = 0;

let arregloimpar = [];

let sumaimpar = 0;

let divimpar = 0;

for ( let i = 0 ; i < cantidad ; i++ ) {

    let numero = Number ( prompt ( 'ingresa los numeros: ') )

    if ( numero % 2 === 0) {

        arreglopar.push ( numero )
    
    } else {

        arregloimpar.push ( numero )
    }
}

for ( let c = 0 ; c < arreglopar.length ; c++ ) {

    sumapar += arreglopar[c]
    
    divpar = sumapar / arreglopar.length
}

for ( let j = 0 ; j < arregloimpar.length ; j++ ) {

    sumaimpar += arregloimpar[j]
    
    divimpar = sumaimpar / arregloimpar.length 
}

console.log ( `La suma de los numeros par son: ${sumapar} y el promedio de los numeros pares es:  ${divpar} ` )

console.log ( `la suma de los numeros impar son: ${sumaimpar} y el promedio de los numeros impares es:  ${divimpar}` )
