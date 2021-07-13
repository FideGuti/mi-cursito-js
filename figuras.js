// //Codigo de cuadrado
// console.group("Cuadrados")

//     const ladoCuadrado = 5;
//     console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

//     const perimetroCuadrado = ladoCuadrado * 4;
//     console.log("El perimetro del cuadrado miden: " + perimetroCuadrado + "cm");

//     const areaCuadrado = ladoCuadrado * ladoCuadrado;
//     console.log("El area del cuadrado mide: " + areaCuadrado + "cm^2");

// console.groupEnd();

// //Codigo de triangulo

// console.group("Triangulos")

//     const ladoTriangulo1 = 6;
//     const ladoTriangulo2 = 6;
//     const baseTriangulo = 4;
    
//     console.log(
//         "Los lados del triangulo miden: " 
//         + ladoTriangulo1 
//         + "cm, " 
//         + ladoTriangulo2 
//         + "cm y " 
//         + baseTriangulo  
//         + "cm"
//     );

//     const alturaTriangulo = 5.5;
//     console.log(
//         "La altura de triangulo mide: " 
//         + alturaTriangulo 
//         + "cm, "
//     )

//     const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
//     console.log("El perimetro del triangulo miden: " + perimetroTriangulo + "cm");

//     const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//     console.log("El area del triangulo mide: " + areaTriangulo + "cm^2");

// console.groupEnd()
// //Codigo de circulo

// console.group("Circulo");

//     const radioCirculo = 4 ;
//     console.log("El radio de mi circunferencia es de : " 
//                 + radioCirculo
//                 + "cm"
//                 );

//     const diametroCirculo = radioCirculo * 2;
//     console.log("El diametro de mi circunferencia es de: " 
//                 + diametroCirculo
//                 + "cm"
//                 );

//     const pi = Math.PI;
//     console.log("pi mide: " 
//                 + pi 
//                 );


//     const perimetroCirculo = diametroCirculo * pi;
//     console.log("El perimetro de mi circulo es de: " 
//                 + perimetroCirculo
//                 + "cm"
//                 );


//     const areaCirculo = (radioCirculo * radioCirculo) * pi
//     console.log("El area de mi circulo es de: " 
//                 + areaCirculo
//                 + "cm^2"
//                 );

// console.groupEnd()

////////////////////// (encapsulando en funciones) /////////////////////////////

//Codigo de cuadrado
console.group("Cuadrados")

    function perimetroCuadrado(lado) {
        return lado * 4;
    }  

    function areaCuadrado(lado) {
        return lado * lado;
    }  

console.groupEnd();

//Codigo de triangulo

console.group("Triangulos")

    function perimetroTriangulo(lado1,lado2,base) {
       return (lado1 + lado2 + base);
    }

    function areaTriangulo(base,altura) {
      return (base * altura) / 2;  
    } 
   

console.groupEnd()
//Codigo de circulo

console.group("Circulo");


    function diametroCirculo(radio) {
       return radio * 2
    }  

    const pi = Math.PI;
    console.log("pi mide: " 
                + pi 
                );


    function perimetroCirculo(radio) {
        const diametro = diametroCirculo(radio);
        return diametro * pi
    }

    function areaCirculo(radio) {
        return (radio * radio) * pi
    }  
    
console.groupEnd()



//////////////////////// Aqui interactuamos con el HTML //////////////////

//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value)
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value)
    alert(area);
} 

// Triangulo

function calcularPerimetroTriangulo() {

    const lado = document.getElementById("inputLagoTriangulo");
    const value = Number(lado.value);

    const lado2 = document.getElementById("inputLagoTriangulo2");
    const value2 = Number(lado2.value);

    const baseI = document.getElementById("inputBaseTriangulo");
    const base = Number(baseI.value);

    const perimetro = perimetroTriangulo(value,value2,base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("inputAltoTriangulo");
    const value1 = input1.value;

    const input2 = document.getElementById("inputBaseATriangulo");
    const value2 = input2.value;
    
    const perimetro = areaTriangulo(value1,value2)
    alert(perimetro)
    console.log(perimetro);
}

//Circulo

function calcularDiametroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = Number(input.value);

    const diametro = diametroCirculo(value);
    alert (diametro)
}

function calcularPerimetroCirculo() {
    
    const input = document.getElementById("inputCirculo");
    const value = Number(input.value);

    const perimetro = perimetroCirculo(value);
    alert (perimetro)

}

function calcularAreaTriangulo() {
    const input = document.getElementById("inputCirculo");
    const value = Number(input.value);

    const area = areaCirculo(value)
    alert (area)
}
