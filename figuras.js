// Código del cuadrado

function perimetroCuadrado(lado){
    const perimetro = lado * 4
    console.log(`El perímetro del cuadrado es: ${perimetro}cm`)
    return perimetro
}

function areaCuadrado(lado){
    const area = lado * lado
    console.log(`El área del cuadrado es: ${area}cm2`)
    return area
}

// Código del triángulo

function perimetroTriangulo(lado1, lado2, base){
    const perimetro = lado1 + lado2 + base;
    console.log(`El perímetro del triángulo es: ${perimetro}cm`)
    return perimetro
}


function areaTriangulo(base, altura){
    const area = (base*altura) / 2
    console.log(`El área del triángulo es: ${area}cm2`)
    return area
}


// Código del círculo

function diametroCirculo(radio) {
    const diametro = radio * 2
    console.log(`El diámetro del círculo es: ${diametro}cm`)
    return diametro
}

function perimetroCirculo(radio){
    const perimetro = diametroCirculo(radio) * Math.PI
    console.log(`El perímetro del círculo es: ${perimetro}cm`)
    return perimetro
}

function areaCirculo(radio){
    const area = (radio * radio) * Math.PI
    console.log(`El áera del círculo es: ${area}cm`)
    return area
}

function alturaTriangulo(lado1, lado2, base){
    let altura = 0;
    if(lado1===lado2 && lado1!=base){
        const paso1 = (lado1*lado2) - ((Math.pow(base,2))/4)
        console.log(paso1)
        altura = Math.sqrt(paso1)
    }
    return altura;
}

// Interacción con el HTML
function calcularPerimetroCuadrado(){
    const lado = document.getElementById("inputCuadrado").value
    alert(perimetroCuadrado(lado))
}

function calcularAreaCuadrado(){
    const lado = document.getElementById("inputCuadrado").value
    alert(areaCuadrado(lado))
}

function calcularPerimetroTriangulo(){
    const lado1 = Number(document.getElementById("inputLado1").value)
    const lado2 = Number(document.getElementById("inputLado2").value)
    const base = Number(document.getElementById("inputBase").value)
    
    if(lado1===lado2 && lado1!=base){
        alert(perimetroTriangulo(lado1, lado2, base))
    } else {
        alert("No estás ingresando los lados de un triángulo isósceles")
    }
}

function calcularAlturaTriangulo(){
    const lado1 = Number(document.getElementById("inputLado1").value)
    const lado2 = Number(document.getElementById("inputLado2").value)
    const base = Number(document.getElementById("inputBase").value)

    const result = alturaTriangulo(lado1, lado2, base);
    if(result){
        alert(result)
    } else {
        alert("El triángulo no es isósceles")
    }
}

function calcularAreaTriangulo(){
    const base = Number(document.getElementById("inputBase").value)
    const altura = Number(document.getElementById("inputAltura").value)
    alert(areaTriangulo(base, altura))
}