//  BLOQUE 1: Ejercicios individuales (un solo número)
// 1. Serie de Fibonacci
// Descripción:
// Generar los primeros n términos de la serie de Fibonacci, donde cada término se obtiene
// sumando los dos anteriores.
// Proceso:
// 1. Comenzar con 0 y 1.
// 2. Cada nuevo valor se calcula: nuevo = anterior + actual.
// 3. Repetir hasta obtener n términos.
// Ejemplo paso a paso:
// 0, 1 → 1
// 1, 1 → 2
// 1, 2 → 3
// 2, 3 → 5
// 3, 5 → 8
// Entrada:
// n = 8
// Salida:
// Serie: 0, 1, 1, 2, 3, 5, 8, 13

let cantidad1 = Number( prompt ( ' Ingresa la cantidad de números de la serie Fibonacci: ' ));

let n1 = Number ( prompt ( ' Ingresa el número 1:  ' ));

let n2 = Number ( prompt ( ' Ingresa el número 2: ' ));

let serie1 = [];

for ( let i = 0 ; i < cantidad1 ; i++ ) {
    
    serie1.push(n1);
    
    let siguiente1 = n1 + n2;
    
    n1 = n2;
    
    n2 = siguiente1; 
    
}

console.log('Serie:', serie1.join(', '));


// 2. Divisores de un número
// Descripción:
// Mostrar todos los números que dividen exactamente al número ingresado.
// Proceso:
// 1. Recorrer de 1 a n.
// 2. Si n % i == 0, i es divisor.
// Ejemplo:
// n = 12
// Divisores: 1, 2, 3, 4, 6, 12
// Salida:
// Divisores: 1, 2, 3, 4, 6, 12

let cantidad2 = Number ( prompt ( 'ingresa la cantidad de numeros: ' ) )

let cantidadi2 = Number ( prompt ( 'ingresa hasta que numero desea comprobar si es divisor ' ) )

for ( let i = 0 ; i < cantidad2 ; i++ ) {
    
    let numero2 = Number ( prompt ( 'ingresa el numero: ' ) )
    
    let divisor2 = []
    
    for ( let c = 0 ; c <= cantidadi2 ; c++ ) {
        
        if ( numero2 % c == 0 ) {
            
                    divisor2.push(c)
        }
    }
    
    console.log( `los numeros de divisores de ${numero2} son ${divisor2}`)
}


// 3. Suma de los divisores de un número
// Descripción:
// Calcular la suma total de los divisores positivos de un número.
// Proceso:
// 1. Encontrar los divisores (como en el ejercicio anterior).
// 2. Acumularlos en una variable suma.
// Ejemplo:
// Divisores de 12 = 1 + 2 + 3 + 4 + 6 + 12 = 28
// Salida:
// Suma de divisores: 28


let cantidad3 = Number ( prompt ( 'ingresa la cantidad de numeros: ' ) ) 

let cantidadi3  = Number ( prompt ( 'ingresa hasta que numero deseas buscar divisores: ' ) ) 

for ( let i = 0 ; i < cantidad3 ; i++ ) {

    let numero3 = Number ( prompt ( 'ingresa el numero: ' ) ) 

    let divisores3 = []
    
    let suma3 = 0

    for ( let c = 0 ; c <=  cantidadi3 ; c++ ) {

        if (  numero3 % c == 0 ) {

            divisores3.push(c)
        }
    
    }
    
    for ( let j = 0 ; j < divisores3.length ; j++ ) {
        
        suma3 += divisores3[j]
    }
    console.log( ` Los divisores del  numero "${numero3}" son: ${divisores3.join(" + ")} = ${suma3}   ` )
}
    
   // 4. Verificar si un número es perfecto
// Descripción:
// Un número es perfecto si la suma de sus divisores (sin incluir él mismo) es igual al número.
// Proceso:
// 1. Calcular los divisores hasta n - 1.
// 2. Sumar esos valores.
// 3. Comparar con n.
// Ejemplo:
// n = 6
// Divisores (sin incluir 6): 1 + 2 + 3 = 6
// → 6 es un número perfecto.
// Salida:
// 6 es un número perfecto.

let cantidad4 = Number ( prompt ( 'ingresa la cantidad de numeros: ' ) ) 

for ( let i = 0 ; i < cantidad4 ; i++ ) {

    let numero4 = Number ( prompt ( 'ingresa el numero: ' ) )
    
    let divisores4 = []

    let suma4 = 0
    
    let perfecto4 = 0
    
    let noperfecto4 = 0
    
    for ( let c = 0 ; c < numero4 ; c++ ) {
        
        if ( numero4 % c === 0 ) {
            
            divisores4.push(c)
        }
    }
    
    for ( let d = 0 ; d < divisores4.length ; d++ ) {
        
        suma4 += divisores4[d]
        
        if ( suma4 === numero4) {
            
            perfecto4 = suma4
        
        } 
            
    }
    
    console.log( `los divisores del numero "${numero4}" son : ${divisores4.join("  + ")} = ${suma4}` ) 
    
    console.log(`${perfecto4}: Es perfecto`)
     
}

   
// 5. Verificar si un número es primo
// Descripción:
// Un número primo solo tiene dos divisores: 1 y él mismo.
// Proceso:
// 1. Recorrer del 2 hasta n-1.
// 2. Si n % i == 0, no es primo.
// Ejemplo:
// n = 11
// Divisores: 1 y 11 → primo
// n = 12
// Divisores: 1, 2, 3, 4, 6, 12 → no primo
// Salida:
// 11 es un número primo.

let cantidad5 = Number ( prompt ( 'ingresa la cantidad de numeros: ' ) ) 

for ( let i = 0 ; i < cantidad5 ; i++ ) {

    let numero5 = Number ( prompt ( 'ingresa el numero: ' ) )
    
    let n5 = 2
    
    let divisores5 = []

    let primo5 = 0
    
    let noprimo5 = 0

    for ( let c = 0 ; c <= numero5 ; c++ ) {

        if ( numero5 % c == 0) {

            divisores5.push(c)
            
        }
        
    }
    
    for ( let d = 0 ; d < divisores5.length ; d++ ) {
        
    }
    
    if ( numero5 == divisores5[1] ) {
            
           primo5 = numero5
           
           console.log(`${divisores5.join(", ")} el numero primo es ${primo5}`)
            
        } else if ( divisores5.length > 2 ) {
         
         noprimo5 = numero5
         
         console.log(`${divisores5.join(", ")} no es primo el numero ${noprimo5}`)
        
    }
    
}

    
// 6. Invertir los dígitos de un número
// Descripción:
// Mostrar el número al revés.
// Proceso:
// 1. Tomar el último dígito con % 10.
// 2. Agregarlo al nuevo número multiplicando por 10 cada vez.
// 3. Dividir el número original entre 10 hasta llegar a 0.
// Ejemplo:
// n = 1234
// Paso 1: tomar 4 → 4
// Paso 2: tomar 3 → 43
// Paso 3: tomar 2 → 432
// Paso 4: tomar 1 → 4321
// Salida:
// Número invertido: 4321

let cantidad6 = Number(prompt('Ingresa la cantidad de números:'))

for (let i = 0; i < cantidad6; i++) {
   
    let numero6 = Number(prompt('Ingresa el número:'))
   
    let inverso6 = 0

    while (numero6 > 0) {
   
        let digito = numero6 % 10
   
        inverso6 = inverso6 * 10 + digito

        numero6 = Math.floor(numero6 / 10)

    }

    console.log('Número invertido: ' + inverso6)

}


// 7. Contar dígitos de un número
// Descripción:
// Determinar cuántos dígitos tiene un número entero.
// Proceso:
// 1. Mientras n > 0, dividir entre 10 y aumentar un contador.
// Ejemplo:
// n = 9876
// Iteraciones: 9876 → 987 → 98 → 9 → 0
// → Cantidad de dígitos: 4
// Salida:
// Cantidad de dígitos: 4

let cantidad7 = Number(prompt('Ingresa la cantidad de números:'))

for (let i = 0; i < cantidad7; i++) {
    
    let numero7 = Number(prompt('Ingresa el número:'))
    
    let contador = 0

    numero7 = Math.abs(numero7)

    if (numero7 === 0) {
       
        contador = 1
    
    } else {
       
        while (numero7 > 0) {
           
            numero7 = Math.floor(numero7 / 10)
            
            contador++
        
        }
    
    }

    console.log('Cantidad de dígitos: ' + contador)

}


// 8. Factorial de un número
// Descripción:
// Calcular el producto de todos los enteros desde 1 hasta n.
// Proceso:
// 1. Iniciar fact = 1.
// 2. Multiplicar en cada paso fact = fact × i.
// 3. Repetir hasta i = n.
// Ejemplo paso a paso:
// 5! = 5 × 4 × 3 × 2 × 1 = 120
// Salida:
// 5! = 120

let cantidad8 = Number(prompt('Ingresa la cantidad de números:'))

for (let i = 0; i < cantidad8; i++) {
    
    let numero8 = Number(prompt('Ingresa el número:'))
    
    let factorial8 = 1
    
    let n8 = Math.abs(numero8) 
    
    if (n8 === 0 || n8 === 1) {
        
        factorial8 = 1
        
    } else {
        
        let j = 1
        
        while (j <= n8) {
            
            factorial8 = factorial8 * j
            
            j = j + 1
            
        }
        
    }

    console.log(n8 + '! = ' + factorial8)
    
}

  
// 9. Sumas sucesivas
// Descripción:
// Realizar sumas sucesivas de un número.
// Proceso:
// 1. Repetir una suma tantas veces como indique el usuario.
// 2. Acumular el resultado.
// Ejemplo:
// Número = 3, Veces = 4
// 3 + 3 + 3 + 3 = 12
// Salida:
// Resultado = 12


let cantidad9 = Number(prompt('Ingresa la cantidad de operaciones:'))

for (let i = 0; i < cantidad9; i++) {
    
    let numero9 = Number(prompt('Ingresa el número a sumar:'))

    let veces9 = Number(prompt('¿Cuántas veces deseas sumarlo?'))

    let resultado9 = 0

    let contador9 = 0

    while (contador9 < veces9) {

        resultado9 = resultado9 + numero9

        contador9 = contador9 + 1

    }

    console.log('Resultado = ' + resultado9)
    
}

// 10. Restas sucesivas
// Descripción:
// Restar un número de manera repetitiva hasta llegar a 0 o menor.
// Proceso:
// 1. Restar el valor dado en cada ciclo.
// 2. Contar el número de restas necesarias.
// Ejemplo:
// Número = 15, Valor = 4
// 15 − 4 − 4 − 4 = 3
// Salida:
// Resultado final: 3

let cantidad10 = Number(prompt('Ingresa la cantidad de números:'))

let numeros10 = []

let valores10 = []

for (let i = 0; i < cantidad10; i++) {
    
    let numero10 = Number(prompt(`Ingresa el número inicial ${i + 1}:`))
    
    let valor10 = Number(prompt(`Ingresa el valor a restar para el número ${i + 1}:`))
    
    numeros10.push(numero10)
    
    valores10.push(valor10)
    
}

for (let i = 0; i < cantidad10; i++) {
    
    let actual = numeros10[i]
    
    let resta = valores10[i]
    
    let contador = 0

    while (actual > 0) {
        
        actual -= resta
        
        contador++
        
    }

    console.log(`Resultado final para ${numeros10[i]} con resta ${valores10[i]}: ${contador}`)
    
}


// BLOQUE 2: Versión con arreglos (listas)
// Aplicar los mismos algoritmos del bloque anterior, pero a una lista de números, procesando
// cada elemento con ciclos.
// 1. Serie de Fibonacci para varios términos
// Entrada:
// n_valores = [5, 8, 10] 
// Proceso:
// • Para cada n, generar la serie.
// • Usar un ciclo que sume los dos anteriores.
// Salida:
// Fibonacci(5): 0, 1, 1, 2, 3
// Fibonacci(8): 0, 1, 1, 2, 3, 5, 8, 13
// Fibonacci(10): 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

let cantidad11 = Number(prompt('Ingresa la cantidad de números:'))

let nvalores = []

for (let i = 0; i < cantidad11; i++) 
    {
    let numero11 = Number(prompt(`Ingresa el número ${i + 1}:`))

    nvalores.push(numero11)

}

for (let i = 0; i < nvalores.length; i++) {

    let n = nvalores[i]

    let fibonacci = []

    for (let j = 0; j < n; j++) {

        if (j === 0) {

            fibonacci.push(0)

        } else if (j === 1) {

            fibonacci.push(1)

        } else {

            fibonacci.push(fibonacci[j - 1] + fibonacci[j - 2])

        }

    }

    console.log(`Fibonacci(${n}): ${fibonacci.join(', ')}`)

}

// 12. Divisores de varios números
// Entrada:
// numeros = [6, 10, 15]
// Proceso:
// • Recorrer cada número y calcular sus divisores.
// Salida:
// 6 → 1, 2, 3, 6
// 10 → 1, 2, 5, 10
// 15 → 1, 3, 5, 15

let cantidad12 = Number(prompt('Ingresa la cantidad de números:'))

let numeros12 = []

for (let i = 0; i < cantidad12; i++) {

    let numero12 = Number(prompt(`Ingresa el número ${i + 1}:`))

    numeros12.push(numero12)

}

for (let i = 0; i < numeros12.length; i++) {

    let num12 = numeros12[i]

    let divisores12 = []

    for (let j = 1; j <= num12; j++) {

        if (num12 % j === 0) {

            divisores12.push(j)

        }

    }

    console.log(`${num12}  ${divisores12.join(', ')}`)
    
}

// 13. Suma de divisores de varios números
// Entrada:
// numeros = [6, 12, 28]
// Proceso:
// • Calcular los divisores y sumarlos para cada número.
// Salida:
// 6 → 12
// 12 → 28
// 28 → 56

let cantidad13 = Number(prompt('Ingresa la cantidad de números:'))

let nvalores13 = []

for (let i = 0; i < cantidad13; i++) {

    let numero13 = Number(prompt(`Ingresa el número ${i + 1}:`))

    nvalores13.push(numero13)

}

for (let i = 0; i < nvalores13.length; i++) {

    let n = nvalores13[i]

    let sumaDivisores13 = 0

    for (let j = 1; j <= n; j++) {

        if (n % j === 0) {

            sumaDivisores13 += j

        }

    }

    console.log(`${n} → ${sumaDivisores13}`)
    
}


// 14. Números perfectos en una lista
// Entrada:
// numeros = [6, 10, 28, 30]
// Proceso:
// • Comparar cada número con la suma de sus divisores.
// Salida:
// Números perfectos: 6, 28

let cantidad14 = Number(prompt('Ingresa la cantidad de números:'))

let nvalores14 = []

for (let i = 0; i < cantidad14; i++) {
    
    let numero14 = Number(prompt(`Ingresa el número ${i + 1}:`))
    
    nvalores14.push(numero14)
    
}

let perfectos14 = []

for (let i = 0; i < nvalores14.length; i++) {
    
    let n = nvalores14[i]
    
    let sumaDivisores14 = 0

    for (let j = 1; j < n; j++) { 
        
        if (n % j === 0) {
            
            sumaDivisores14 += j
            
        }
        
    }

    if (sumaDivisores14 === n) {
        
        perfectos14.push(n)
        
    }
    
}

console.log(`Números perfectos: ${perfectos14.join(', ')}`)


// 15. Números primos en una lista
// Entrada:
// numeros = [5, 6, 7, 8, 11]
// Proceso:
// • Verificar si cada número solo tiene dos divisores.
// Salida:
// Primos: 5, 7, 11

let cantidad15 = Number(prompt('Ingresa la cantidad de números:'))

let nvalores15 = []

for (let i = 0; i < cantidad15; i++) {
    
    let numero15 = Number(prompt(`Ingresa el número ${i + 1}:`))
    
    nvalores15.push(numero15)
    
}

let primos15 = []

for (let i = 0; i < nvalores15.length; i++) {
    
    let n15 = nvalores15[i]
    
    let divisores15 = 0

    for (let j = 1; j <= n15; j++) {
        
        if (n15 % j === 0) {
            
            divisores15++
            
        }
        
    }

    if (divisores15 === 2) {
        
        primos15.push(n15)
        
    }
    
}

console.log(`Primos: ${primos15.join(', ')}`)


// 16. Invertir varios números
// Entrada:
// numeros = [123, 456, 780]
// Proceso:
// • Extraer los dígitos en orden inverso usando ciclos.
// Salida:
// 123 → 321
// 456 → 654
// 780 → 87

let cantidad16 = Number(prompt('Ingresa la cantidad de números:'))

let nvalores16 = []

for (let i = 0; i < cantidad16; i++) {
    
    let numero16 = Number(prompt(`Ingresa el número ${i + 1}:`))
    
    nvalores16.push(numero16)
    
}

for (let i = 0; i < nvalores16.length; i++) {
    
    let original16 = nvalores16[i]
    
    let invertido16 = 0

    while (original16 > 0) {
        
        let digito16 = original16 % 10
        
        invertido16 = invertido16 * 10 + digito16
        
        original16 = Math.floor(original16 / 10)
        
    }

    console.log(`${nvalores16[i]} → ${invertido16}`)
    
}

// 17. Contar dígitos de varios números
// Entrada:
// numeros = [45, 678, 12345]
// Proceso:
// • Dividir cada número entre 10 y contar iteraciones.
// Salida:
// 45 → 2 dígitos
// 678 → 3 dígitos
// 12345 → 5 dígitos

let cantidad17 = Number(prompt('Ingresa la cantidad de números:'))

let nvalores17 = []

for (let i = 0; i < cantidad17; i++) {
    
    let numero17 = Number(prompt(`Ingresa el número ${i + 1}:`))
    
    nvalores17.push(numero17)
    
}

for (let i = 0; i < nvalores17.length; i++) {
    
    let original17 = nvalores17[i]
    
    let contador17 = 0

    if (original17 === 0) {
        
        contador17 = 1
        
    } else {
        
        while (original17 > 0) {
            
            original17 = Math.floor(original17 / 10)
            
            contador17++
            
        }
        
    }

    console.log(`${nvalores17[i]} → ${contador17} dígitos`)
}

// 18. Factorial de varios números
// Entrada:
// numeros = [3, 4, 5]
// Proceso:
// • Multiplicar valores consecutivos hasta n.
// Ejemplo:
// 5! = 5 × 4 × 3 × 2 × 1 = 120
// Salida:
// 3! = 6
// 4! = 24
// 5! = 12

let cantidad18 = Number(prompt('Ingresa la cantidad de números:'))

let nvalores18 = []

for (let i = 0; i < cantidad18; i++) {
    
    let numero18 = Number(prompt(`Ingresa el número ${i + 1}:`))
    
    nvalores18.push(numero18)
    
}

for (let i = 0; i < nvalores18.length; i++) {
    
    let original18 = nvalores18[i]
    
    let factorial18 = 1

    for (let j = 1; j <= original18; j++) {
        
        factorial18 *= j
        
    }

    console.log(`${original18}! = ${factorial18}`)
    
}


// 19. Sumas sucesivas en una lista
// Entrada:
// numeros = [2, 3, 4]
// veces = 4
// Proceso:
// • Repetir la suma de cada número veces veces.
// Salida:
// 2 × 4 = 8
// 3 × 4 = 12
// 4 × 4 = 16

let cantidad19 = Number(prompt('Ingresa la cantidad de números:'))

let nvalores19 = []

for (let i = 0; i < cantidad19; i++) {
    
    let numero19 = Number(prompt(`Ingresa el número ${i + 1}:`))
    
    nvalores19.push(numero19)
    
}

let veces19 = Number(prompt('¿Cuántas veces deseas sumar cada número?'))

for (let i = 0; i < nvalores19.length; i++) {
    
    let original19 = nvalores19[i]
    
    let resultado19 = 0

    for (let j = 0; j < veces19; j++) {
        
        resultado19 += original19
        
    }
    
    console.log(`${original19} × ${veces19} = ${resultado19}`)
    
}

// 20. Restas sucesivas en una lista
// Entrada:
// numeros = [15, 22, 30]
// valor_resta = 4
// Proceso:
// • Restar repetidamente hasta que el resultado sea menor que el valor restado.
// Salida:
// 15 → 3
// 22 → 2
// 30 → 2

let cantidad20 = Number(prompt('Ingresa la cantidad de números:'))

let nvalores20 = []

for (let i = 0; i < cantidad20; i++) {

    let numero20 = Number(prompt(`Ingresa el número ${i + 1}:`))

    nvalores20.push(numero20)

}

let valor_resta20 = Number(prompt('Ingresa el valor que deseas restar repetidamente:'))

for (let i = 0; i < nvalores20.length; i++) {

    let original20 = nvalores20[i]

    let contador20 = 0

    while (original20 >= valor_resta20) {

        original20 -= valor_resta20

        contador20++

    }

    console.log(`${nvalores20[i]} → ${contador20}`)

}
