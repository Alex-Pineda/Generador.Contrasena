let cantidad = document.getElementById ("cantidad");
let boton = document.getElementById ("generar");
let contrasena = document.getElementById ("contrasena");
let mesaje = document.getElementById("mensaje");

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    function generar(){
        let numeroDigitado = parseInt (cantidad.value);
        
        if (numeroDigitado < 8) {
            alert ("Por favor, ingresa un número mayor o igual a 8 para generar una contraseña segura.");
            limpiar();
            return;  
        }
      
        let password = "";
        for(let i= 0; i < numeroDigitado; i++){

            let caracterAleatorio = cadenaCaracteres[Math.floor( Math.random() * cadenaCaracteres.length)];
            console.log(caracterAleatorio);

            password+= caracterAleatorio;
        }

        const tieneMayuscula = /[A-Z]/.test(password);
        const tieneMinuscula = /[a-z]/.test(password);
        const tieneNumero = /\d/.test(password);
        const tieneEspecial = /[!@#$%^&*()]/.test(password);

        if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial) {
            mensaje.textContent = "La contraseña es MUY FUERTE";
        } else if (tieneMayuscula && tieneMinuscula && (tieneNumero || tieneEspecial)) {
            mensaje.textContent = "La contraseña es MEDIANA";
        } else if (tieneMayuscula && tieneMinuscula) {
            mensaje.textContent = "La contraseña es DEBIL";
        }
        contrasena.value = password;

    }
    function limpiar() {
        contrasena.value = "";
        cantidad.value = "";
        mensaje.textContent = "";
    }  








