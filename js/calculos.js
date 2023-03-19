class Calculo{

//Ejercicios 1-3 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   //R
      sumaNumerosPerfectos() { 
        let datos        = document.getElementById("input-datos").value;
        let resultadoDiv = document.getElementById("mostrar");
        let entradas     = datos.split(";");
        let suma = 0;
        //console.log(entradas)
        
        if(func.recorrerArregloValidarlo(datos)==1){
          resultadoDiv.textContent="Error, por favor ingrese sólo valores numéricos y envíe los datos correctamente"
        }else{
          for (let numero of entradas) {
            if (func.NumeroPerfecto(numero)) {
              suma += parseInt(parseInt(numero));
            }
          }
          resultadoDiv.textContent = "El resultado de la suma es: " + suma ;
        }

       
      }
       //R
      calcularNumerosPrimos () {
        let datos        = document.getElementById("input-datos").value;
        let resultadoDiv = document.getElementById("mostrar");
        let entradas     = datos.split(";")
        let arreglo = []

        if(func.recorrerArregloValidarlo(datos)==1){
          resultadoDiv.textContent="Error, por favor ingrese sólo valores numéricos y envíe los datos correctamente"
        }else{
          for( let i = 0; i < entradas.length; i++){
            if(func.numeroPrimo(entradas[i]) !== "noprimo"){
              arreglo.push(func.numeroPrimo(entradas[i]))
            }
          }
          resultadoDiv.textContent= "El arreglo de primos es: " + arreglo
        }
      
        
      }
     //R
      calcularPotencia() {
        let base         = (document.getElementById("input-base").value);
        let exponente    = (document.getElementById("input-exponente").value);
        let resultadoDiv = document.getElementById("mostrar");

        if((isNaN(base) || isNaN(exponente)) == false){
          parseInt(base,exponente)
          if (exponente == 0) {
            resultadoDiv.textContent = "El resultado es: " + 1;
          }
          resultadoDiv.textContent = "La potencia es: " + func.potencia(base,exponente)
        
        }else{
          resultadoDiv.textContent = "Error, por favor ingrese sólo valores numéricos"
        }
      }

// Ejercicios 4 - 6 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     //R
    exponente() {
        let serie = document.getElementById("serie").value.split(';');
        let $resp = document.getElementById("resp");
        
        if(func.recorrerArregloValidarlo(serie)==1){
          $resp.textContent="Error, por favor ingrese sólo valores numéricos y envíe los datos correctamente"
        }else{
          let resp  = [];
          for (let i = 0; i < serie.length; i++) {
            let resultado = func.potencia(serie[i],serie[i])
            resp.push(resultado);
          }
          $resp.textContent = `La respuesta de los numeros ingresados, elevados a si mismo es: `+resp.join(', ');
        }
  
    }
    //R
    tablaMultiplicar() {
        let base  = (document.getElementById("base").value);
        let $resp = document.getElementById("resp");
        let resultados = "";
        if(isNaN(base)==false){
          parseInt(base)
          for (let i = 1; i <= 12; i++) {
            let resultado = base * i;
            resultados += `${base} * ${i} = ${resultado}\n`;
          }
          $resp.textContent = resultados;
        }else{
          $resp.textContent = "Error, por favor ingrese sólo valores numéricos"
        }
    }
 //R
    arrdivisores() {
      let numero = (document.getElementById("num1").value);
      let valorInicial = (document.getElementById("num2").value);
      let $resp = document.getElementById("resp");

      if((isNaN(numero) || isNaN(valorInicial)) == false){
        parseInt(numero,valorInicial)
        $resp.textContent = "Los divisores del número " + numero + " son: " + "["+func.obtenerDivisoresNumero(valorInicial,numero)+"]"

      }else{
        $resp.textContent = "Error, por favor ingrese sólo valores numéricos"
      }

    }

// Ejercicios 7 - 9 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   //R
    divisor() {
      let digito   = (document.getElementById("num1").value);
      let vinicial = (document.getElementById("num2").value);
      let resp     = document.getElementById("resp");

      if((isNaN(digito) || isNaN(vinicial)) == false){
        parseInt(vinicial,digito)
        let arreglo  = func.obtenerDivisoresNumero(vinicial,digito), i, sumadivisores=0

      for(i=0;i<arreglo.length;i++){
        sumadivisores = arreglo[i]+sumadivisores
      }
      resp.textContent = "La suma de los divisores del número " + parseInt(digito) + " con el valor inicial de " + parseInt(vinicial) + " es: " + sumadivisores

      }else{
        resp.textContent = "Error, por favor ingrese sólo valores numéricos"
      }
      
    }
 //R
    ArregloDigitos() {
        let numero = document.getElementById("num").value
        let resp   = document.getElementById("resp")
        resp.textContent = "Los dígitos del número " + numero + " son: " + func.obtenerDigitosAlmacenarEnArreglo(numero)
        if(isNaN(numero)==false){
          resp.textContent = "Los dígitos del número " + numero + " son: " + func.obtenerDigitosAlmacenarEnArreglo(numero)
  
        }else{
          resp.textContent = "Error, por favor ingrese sólo valores numéricos"
        }
    }

    Sumadigitos() {
        let numero = (document.getElementById("suma").value);
        let resp   = document.getElementById("resp")
        if(isNaN(numero)==false){
          parseInt(numero)
          resp.textContent = "La suma de los dígitos del número " + numero + " es: " + func.sumarDigitosNumero(numero)
        }else{
          resp.textContent = "Error, por favor ingrese sólo valores numéricos"
        }
    }
    

//Ejercicios 10 - 12 -------------------------------------------------------------------------------------------------------------------------------------------------------------
  //R 
    digitoPares() {
        let numero = document.getElementById("digito").value
        let resp   = document.getElementById('resp')

        if(isNaN(numero)==true){
          resp.textContent = "Error, por favor ingrese sólo valores numéricos"
        }else{
          let arreglo=func.obtenerDigitosAlmacenarEnArreglo(numero), arregloPares=[], i
        for(i=0; i < arreglo.length; i++){
          if(arreglo[i]%2==0){
            arregloPares.push(arreglo[i])
          }
        }
        resp.textContent= "Los digitos pares del número " + numero + " son: " + arregloPares

        }
        
    }
 //R
    primeroDigito() {
        let numero = document.getElementById("primer").value
        let resp   = document.getElementById('resp')
        if(numero == ""){
          resp.textContent = 'No se a ingresado valor'
        }else if (isNaN(numero)==false){
          let arreglo = func.obtenerDigitosAlmacenarEnArreglo(numero)
          resp.textContent = "El primer dígito del número " + numero + " es: " + arreglo[0]
        }else{
          resp.textContent = 'Error, por favor ingrese sólo valores numéricos'
        }
    }
     //R
    ultimoDigito = () => {
        let numero  = document.getElementById('ultimo').value;
        let resp    = document.getElementById('resp')
        let arreglo = func.obtenerDigitosAlmacenarEnArreglo(numero)
        let ultimoDigito; //arreglo.length-1
        if(numero == ""){
          resp.textContent = 'No se a ingresado valor'
        }else if(isNaN(numero) == false){
          ultimoDigito  = arreglo.length-1
          resp.textContent = "El último dígito del número " + numero + " es: " + arreglo[ultimoDigito]
        }else{
          resp.textContent = 'Error, por favor ingrese sólo valores numéricos'
        }
        
    }
   
// EJERCICIOS 13 - 15 ---------------------------------------------------------------------------------------------------------------------------------------------------------
    //R
    arregloFactorial = () => {
        let numero = document.getElementById("arreglo").value
        let resp   = document.getElementById("resp")
        let arreglo = [], i, ban = 1, arreglo2 = []
      
        if(func.recorrerArregloValidarlo(numero)==1){
          resp.textContent="Error, por favor ingrese sólo valores numéricos y envíe los datos correctamente"
        }else{
          arreglo = numero.split(";")
          for(i = 0; i < arreglo.length; i++){
              arreglo2 = func.ponerValoresEnArreglo((func.factorial(arreglo[i])),arreglo2,ban)
          }
          resp.textContent= "Los factoriales de cada elemento del arreglo son: " + arreglo2
        }
    }
 //R
    rango() {
        let valorI = parseInt(document.getElementById("valorI").value)
        let valorF = document.getElementById("ValorF").value
        let resp   = document.getElementById("resp")
        if(isNaN(valorI)==true){
          resp.textContent = "Error, por favor ingrese sólo valores numéricos"
        }else{
          resp.textContent= "El arreglo resultante del valor inicial " + valorI + " y del valor final " + valorF + " es: " + func.obtenerSerieNumeros(valorI,valorF)

        }
    }
 //R
    FactorialDeUnNúmero(){
        let numero = document.getElementById("num").value
        let resp   = document.getElementById("resp")
        if(isNaN(numero)==false){
          resp.textContent = "El factorial del número " + numero + " es: " + func.factorial(numero)
        }else{
          resp.textContent = "Error, por favor ingrese sólo valores numéricos"
        }
        //resp.textContent= "El factorial del número " + numero + " es: " + func.factorial(numero)
    }
}

// Funciones -----------------------------------------------------------------------------------------------------------------------------------------------------------

class funciones{
  
    NumeroPerfecto(numero){
        let sum = 0;
        // Se elige los números cuya suma de divisores sea igual al número
        for (let i = 1; i < numero; i++) {
          if (numero % i == 0) {
            sum += i;
          }
        }
        return sum == numero;
    }

    potencia(base,exponente){
      let potencia=Math.pow(base,exponente)
      return potencia
    }

    factorial(numero) {
        // 5 = 5*1*2*3*4*5 = 120
        let c, aux=1
        for(c=1;c<=numero;c++){
            aux=aux*c
            }
      return aux
    }
    sumarDigitosNumero(numero){
      let digito, suma=0
        while (numero > 0) {
            digito = numero % 10;
            console.log(digito)
            suma=suma+digito
            numero = Math.floor(numero / 10);
          }
          return suma
    }

    obtenerDigitosAlmacenarEnArreglo(numero) { 
        // 1234 = 1, 2 , 3 , 4 
        let digito, arreglo=[]
        while (numero > 0) {
            digito = numero % 10;
            this.ponerValoresEnArreglo(digito,arreglo)
            numero = Math.floor(numero / 10);
          }
          return arreglo
    }

    ponerValoresEnArreglo(digito,arreglo,ban){
        // 1, 2, 3, 4 = [1,2,3,4]
        if(ban==1){
            arreglo.push(digito)
            return arreglo
        }else{
            arreglo.unshift(digito)
            return arreglo 
        }
      
    }
   

    obtenerSerieNumeros(valorI,valorF){
        let arreglo=[], ban=1
        for(valorI; valorI<valorF;valorI++){
          console.log("ENTRE PAPU")
            this.ponerValoresEnArreglo(valorI,arreglo,ban)
            }
        return arreglo
    }

    numeroPrimo(num1){

      let cont = 0;
      for( let i = 1; i <= num1; i++){
          if( num1 % i == 0){
              cont++
          }
      }
      if( cont == 2 || num1==1){
          return num1
      }else{
        return "noprimo"
      }
    }
    obtenerDivisoresNumero(valorInicial,numero){
      let divisores = [];
        for (let i = valorInicial; i <= numero / 2; i++) {
          if (numero % i === 0) {
            divisores.push(i);
          }
        }
        return divisores
    }
    recorrerArregloValidarlo(arreglo){
      console.log("comprobando")
      let i
      for(i=0;i<arreglo.length;i++){
        console.log(arreglo[i])
        if((isNaN(arreglo[i]) && arreglo[i]!= ";") ==true){
          return 1
        }
      }
      return 0
    }
}

let func = new funciones()
let cal = new Calculo()

cal.digitoPares()
cal.primeroDigito()
cal.ultimoDigito()
cal.divisor()
cal.Sumadigitos()
cal.tablaMultiplicar()
cal.arrdivisores()
cal.exponente()
cal.FactorialDeUnNúmero()
cal.ArregloDigitos
cal.rango
cal.sumaNumerosPerfectos()
cal.calcularNumerosPrimos()
cal.calcularPotencia() 