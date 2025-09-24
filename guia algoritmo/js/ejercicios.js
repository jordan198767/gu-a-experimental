/*Se registran las edades de tres hermanos. El algoritmo debe determinar quién es el
mayor de los tres, mostrando la edad correspondiente.
o Entrada: tres enteros (edades).
o Proceso: usar condiciones múltiples para comparar.
o Salida: “El hermano mayor tiene X años.”*/
//          EPS
//Entrada: leer(edad1),leer(edad2),leer(edad3);
//Proceso: si edad1>edad2 y edad1>edad3 entonces escribir(edad1)
//         sino si edad2>edad1 y edad2>edad3 entonces escribir(edad2)
//         sino escribir(edad3)
//Salida: "escribir la edad del hermano mayor"
function mayorEdad(){
let edad1 = 0 ,edad2 = 0 , edad3 = 0;
edad1 = parseInt(prompt("ingrese la edad del primer hermano:"));
edad2 = parseInt(prompt("ingrese la edad del segundo hermano:"));
edad3 = parseInt(prompt("ingrese la edad del tercer hermano:"));
    if (edad1 >edad2 && edad1 > edad3){
        alert("el hermano mayor tine " + edad1 +" años.")
    }else if (edad2 >edad1 && edad2 > edad3){
        alert("el hermano mayor tine " + edad2 +" años.")
    }else{
        alert("el hermano mayor tine " + edad3 +" años.")
    }
  
}
   /*  Se registran N grupos de tres hermanos. Para cada grupo, el programa debe
determinar quién es el mayor y mostrarlo en pantalla.
o Entrada: cantidad de grupos y edades de cada grupo.
o Proceso: recorrer con un ciclo for/while.
o Salida: para cada grupo, la edad mayor.*/
//        EPS
//Entrda:
//Proceso:
//Salida:
function SerieMayorEdad() {
    let edad1 = 0, edad2 = 0, edad3 = 0, n = 0, c = 0;
    n = parseInt(prompt("ingrese la cantidad a repetir:"))
    while (c < n) {
        edad1 = parseInt(prompt("ingrese la primer edad"))
        edad2 = parseInt(prompt("ingrese la segunda edad"))
        edad3 = parseInt(prompt("ingrese la tercer edad"))
        if (edad1 > edad2 && edad1 > edad3) {
            alert("el hermano mayor tine " + edad1 + " años.")
        } else if (edad2 > edad1 && edad2 > edad3) {
            alert("el hermano mayor tine " + edad2 + " años.")
        } else {
            alert("el hermano mayor tine " + edad3 + " años.")
        }
        c++;
    }
}

/*Guardar en un arreglo de 3 posiciones las edades de los hermanos y recorrer el arreglo
para determinar la mayor edad.
o Entrada: arreglo de enteros.
o Proceso: recorrer el arreglo y comparar valores.
o Salida: edad mayor*/
    
function ArregloMayorEdad() {
 let edad1 = 0, edad2 = 0, edad3 = 0, n = 0, c ;
 let edades=[[15,30,25],[45,20,35],[5,10,15]];
//               0          |         2
    for (c = 0; c < edades.length; c++) {
        edad  = edades[c];
        edad1 = edad[0];
        edad2 = edad[1];
        edad3 = edad[2];

        if (edad1 > edad2 && edad1 > edad3) {
            alert("el hermano mayor tine " + edad1 + " años.")
        } else if (edad2 > edad1 && edad2 > edad3) {
            alert("el hermano mayor tine " + edad2 + " años.")
        } else {
            alert("el hermano mayor tine " + edad3 + " años.")
        }
        
    }
}
    

/*Una empresa de impresión ofrece tarjetas de invitación:
o Pedido ≤ 200 → $2.00 c/u.
o Entre 201 y 300 → $1.80 c/u.
o Más de 300 → $1.50 c/u.
Calcular el costo total de un pedido*/


function calcularCostoPedido() {
    let costoUnitario;
    let pedido = parseInt(prompt("Ingrese la cantidad de tarjetas a pedir:"));
    if (pedido <= 200) {
        alert("El costo unitario es: $2.00");
        costoUnitario = 2.00;
    } else if (pedido <= 300) {
        alert("El costo unitario es: $1.80");
        costoUnitario = 1.80;
    } else {
        alert("El costo unitario es: $1.50");
        costoUnitario = 1.50;
    }
    alert("El costo total es: $" + (pedido * costoUnitario));
}


/*La empresa recibe N pedidos. Para cada pedido, leer la cantidad de tarjetas y calcular
el costo total aplicando las mismas reglas*/

function calcularCostoPedidoN() {
    let n = parseInt(prompt("Ingrese la cantidad de pedidos:"));
    while(n-- > 0) {
        let costoUnitario;
        let pedido = parseInt(prompt("Ingrese la cantidad de tarjetas a pedir:"));
        if (pedido <= 200) {
            alert("El costo unitario es: $2.00");
            costoUnitario = 2.00;
        } else if (pedido <= 300) {
            alert("El costo unitario es: $1.80");
            costoUnitario = 1.80;
        } else {
            alert("El costo unitario es: $1.50");
            costoUnitario = 1.50;
        }
        alert("El costo total es: $" + (pedido * costoUnitario));
        c++;
    }
} 

/*Guardar en un arreglo las cantidades de tarjetas de N pedidos. Calcular en un arreglo
paralelo el costo total de cada pedido.*/


 function calcularCostoPedidoArreglo() {
    let pedidos = [150, 250, 350];  
    let costos = [];                

    for (let i = 0; i < pedidos.length; i++) {
        let cantidad = pedidos[i];
        let costoTotal = 0;

        if (cantidad <= 200) {
            costoTotal = cantidad * 2.00;
        } else if (cantidad <= 300) {
            costoTotal = (200 * 2.00) + ((cantidad - 200) * 1.80);
        } else {
            costoTotal = (200 * 2.00) + (100 * 1.80) + ((cantidad - 300) * 1.50);
        }

        costos.push(costoTotal);
    }

    alert("Los costos totales son: " + costos.join(", "));
 }

/*Una tienda de electrónicos fija un precio inicial a un celular y ajusta según marca y
capacidad:
o Marca A, 64 GB → +$20.
o Marca A, 128 GB → +$30.
o Marca B, 64 GB → –$30.
o Marca B, 128 GB → –$50.
Determinar el precio final de un celular vendido.*/

function calcularPrecioFinal() {
    let precioBase = parseFloat(prompt("Ingrese el precio base del celular:"));
    let marca = prompt("Ingrese la marca del celular (A o B):").toUpperCase();
    let capacidad = parseInt(prompt("Ingrese la capacidad del celular (64 o 128):"));

    let ajuste = 0;

    if (marca === "A" && capacidad === 64) {
        ajuste = 20;
    } else if (marca === "A" && capacidad === 128) {
        ajuste = 30;
    } else if (marca === "B" && capacidad === 64) {
        ajuste = -30;
    } else if (marca === "B" && capacidad === 128) {
        ajuste = -50;
    } else {
        alert("Combinación de marca y capacidad no válida.");
        return;
    }

    let precioFinal = precioBase + ajuste;

    alert("El precio final del celular es: $" + precioFinal);
}

/*La tienda vende N celulares. Para cada uno se ingresan marca y capacidad, y se calcula
el precio final con las reglas anteriores.*/


function calcularPreciosCelulares() {
    const precioBase = parseFloat(prompt("Ingrese el precio base de los celulares:"));
    const cantidad = parseInt(prompt("¿Cuántos celulares se van a vender?"));

    let contador = 1;

    while (contador <= cantidad) {
        let marca = prompt("Ingrese la marca del celular #" + contador + " (A o B):").toUpperCase();
        let capacidad = parseInt(prompt("Ingrese la capacidad del celular #" + contador + " (64 o 128):"));

        let ajuste = 0;

        if (marca === "A" && capacidad === 64) {
            ajuste = 20;
        } else if (marca === "A" && capacidad === 128) {
            ajuste = 30;
        } else if (marca === "B" && capacidad === 64) {
            ajuste = -30;
        } else if (marca === "B" && capacidad === 128) {
            ajuste = -50;
        } else {
            alert("Combinación no válida para el celular #" + contador + ". Se omitirá.");
            contador++;
            continue;
        }

        let precioFinal = precioBase + ajuste;
        alert("Celular #" + contador + ": Precio final = $" + precioFinal);
        contador++;
    }
}


/*Guardar en un arreglo las marcas, en otro las capacidades y en un tercer arreglo los
precios finales de cada celular.*/

function calcularPreciosConArreglos() {
    const precioBase = parseFloat(prompt("Ingrese el precio base de los celulares:"));
    const cantidad = parseInt(prompt("¿Cuántos celulares se van a vender?"));

    let marcas = [];
    let capacidades = [];
    let preciosFinales = [];

    for (let i = 0; i < cantidad; i++) {
        let marca = prompt("Ingrese la marca del celular #" + (i + 1) + " (A o B):").toUpperCase();
        let capacidad = parseInt(prompt("Ingrese la capacidad del celular #" + (i + 1) + " (64 o 128):"));

        let ajuste = 0;
        let valido = true;

        if (marca === "A" && capacidad === 64) {
            ajuste = 20;
        } else if (marca === "A" && capacidad === 128) {
            ajuste = 30;
        } else if (marca === "B" && capacidad === 64) {
            ajuste = -30;
        } else if (marca === "B" && capacidad === 128) {
            ajuste = -50;
        } else {
            alert("Datos inválidos para el celular #" + (i + 1) + ". Se omitirá.");
            valido = false;
        }

        if (valido) {
            let precioFinal = precioBase + ajuste;

            marcas.push(marca);
            capacidades.push(capacidad);
            preciosFinales.push(precioFinal);

            alert("Celular #" + (i + 1) + ": Precio final = $" + precioFinal);
        }
    }

}

  
/*Versión condicional:
Una aplicación de streaming cobra según número de usuarios:
• ≥100 usuarios → $5 c/u.
• 50–99 usuarios → $6 c/u.
• 30–49 usuarios → $8 c/u.
• <30 usuarios → $300 fijos.
Calcular el costo total y el costo por usuario para un grupo dado.*/


function calcularCostoStreamingb2() {
    let usuarios = parseInt(prompt("Ingrese el número de usuarios del grupo:"));
    let costoTotal = 0;
    let costoPorUsuario = 0;

    if (usuarios >= 100) {
        costoPorUsuario = 5;
        costoTotal = usuarios * costoPorUsuario;
    } else if (usuarios >= 50) {
        costoPorUsuario = 6;
        costoTotal = usuarios * costoPorUsuario;
    } else if (usuarios >= 30) {
        costoPorUsuario = 8;
        costoTotal = usuarios * costoPorUsuario;
    } else {
        costoTotal = 300;
        costoPorUsuario = (costoTotal / usuarios).toFixed(2); // puede dar decimal
    }

    alert("Costo total: $" + costoTotal);
    alert("Costo por usuario: $" + costoPorUsuario);
}

/*La aplicación recibe N solicitudes de grupos. Para cada uno, calcular el costo total y el
costo por usuario aplicando las mismas reglas*/

function calcularCostosGrupos() {
    let cantidadGrupos = 0;
    
    cantidadGrupos = parseInt(prompt("¿Cuántos grupos van a usar el servicio?"));
    
    for (let i = 1; i <= cantidadGrupos; i++) {
        let cantidadUsuarios = 0;
        let costoTotal = 0;
        let costoPorUsuario = 0;
        
        alert("--- SOLICITUD DEL GRUPO " + i + " ---");
        cantidadUsuarios = parseInt(prompt("Ingrese la cantidad de usuarios del grupo " + i + ":"));
        
        // Aplicar reglas de pricing
        if (cantidadUsuarios >= 100) {
            costoTotal = cantidadUsuarios * 5;
            costoPorUsuario = 5;
        } else if (cantidadUsuarios >= 50) {
            costoTotal = cantidadUsuarios * 6;
            costoPorUsuario = 6;
        } else if (cantidadUsuarios >= 30) {
            costoTotal = cantidadUsuarios * 8;
            costoPorUsuario = 8;
        } else {
            costoTotal = 300;
            costoPorUsuario = 300 / cantidadUsuarios;
        }
        
        alert("Costo para el Grupo " + i + ":\n" +
              "Usuarios: " + cantidadUsuarios + "\n" +
              "Costo total: $" + costoTotal + "\n" +
              "Costo por usuario: $" + costoPorUsuario.toFixed(2));
    }
    
    alert("Se procesaron " + cantidadGrupos + " solicitudes de grupos.");
}


/*Guardar en un arreglo la cantidad de usuarios de cada grupo y en otro arreglo el costo
total calculado. Mostrar además en un arreglo paralelo el costo por usuario.*/


function procesarSolicitudesGrupos() {
    let cantidadSolicitudes = 0;
    
    cantidadSolicitudes = parseInt(prompt("Ingrese la cantidad de solicitudes de grupos a procesar:"));
    
    for (let i = 1; i <= cantidadSolicitudes; i++) {
        let cantidadUsuarios = 0;
        let costoTotal = 0;
        let costoPorUsuario = 0;
        
        alert("--- SOLICITUD " + i + " DE " + cantidadSolicitudes + " ---");
        cantidadUsuarios = parseInt(prompt("Ingrese la cantidad de usuarios para la solicitud " + i + ":"));
        
        // Aplicar reglas de pricing
        if (cantidadUsuarios >= 100) {
            costoTotal = cantidadUsuarios * 5;
            costoPorUsuario = 5;
        } else if (cantidadUsuarios >= 50) {
            costoTotal = cantidadUsuarios * 6;
            costoPorUsuario = 6;
        } else if (cantidadUsuarios >= 30) {
            costoTotal = cantidadUsuarios * 8;
            costoPorUsuario = 8;
        } else {
            costoTotal = 300;
            costoPorUsuario = 300 / cantidadUsuarios;
        }
        
        alert("RESULTADO SOLICITUD " + i + ":\n" +
              "• Usuarios: " + cantidadUsuarios + "\n" +
              "• Costo total: $" + costoTotal + "\n" +
              "• Costo por usuario: $" + costoPorUsuario.toFixed(2));
    }
    
    alert("Procesamiento completado!\nTotal de solicitudes: " + cantidadSolicitudes);
}

debugger
//mayorEdad();
//SerieMayorEdad();
//ArregloMayorEdad();
//calcularCostoPedido();
//calcularCostoPedidoN();
//calcularCostoPedidoArreglo();
//calcularPrecioFinal();
//calcularPreciosCelulares();
calcularPreciosConArreglos();

//calcularCostosGrupos();
//procesarSolicitudesGrupos();
//calcularCostoStreamingb2();