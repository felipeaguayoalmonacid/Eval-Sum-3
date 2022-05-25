const validar = () => {
    const email = val_email();
    const pasw1 = val_contrasena1();
    const pasw2 = val_contrasena2();
    const direct = val_direccion();
    const postal = val_cod_postal();
    const ciudad = val_ciudad();
    const checkbox = comprobarChecks();
    const refe = val_referencia();
    const comuna = val_comuna();
    const unnumero = uno_o_dos();

    return (email && pasw1 && pasw2 && direct && postal && ciudad && checkbox && refe && comuna && unnumero);
}

const val_fto_email = (email) => {
    const idx_arroba = email.indexOf("@");
    if(idx_arroba < 1){
        return false;
    } else{
        const idx_punto = email.indexOf(".");
        if(idx_punto <= idx_arroba + 2 || idx_punto == email.legth - 1){
            return false;
        }
        return true;
    }
}

const val_email = () => {
    const email = document.getElementById("email").value;
    const div = document.getElementById("msj-email");
    if(email != ""){
        if(val_fto_email(email)){
            div.innerHTML = "✓";
            div.className = "text-success";
            return true;
        } else{
            div.innerHTML = "Formato incorrecto!";
            div.className = "text-danger";
            return false;
        }
    } else{
        div.innerHTML = "No se encuentra ningún email";
        div.className = "text-danger";
        return false;
    }
}


const val_contrasena1 = () => {
    const contrasena1 = document.getElementById("contrasena1").value;
    const div = document.getElementById("msj-pasw1");
    if(contrasena1.length > 2 && contrasena1.length < 7){
        if(tiene_numyletr(contrasena1)){
            div.innerHTML = "✓";
            div.className = "text-success";
            return true;
        }else{
            div.innerHTML = "No cumple con los caracteres";
            div.className = "text-danger";
            return false;
        }
    } else{
        div.innerHTML = "No cumple con los caracteres";
        div.className = "text-danger";
        return false;
    }
}

const tiene_numyletr = (contrasena1) => {
    const numbers = "0123456789";
    const leters = "abcdefghyjklmnñopqrstuvwxyz";

    for(i=0; i<contrasena1.length; i++){
        if(numbers.indexOf(contrasena1.charAt(i),0)!=-1){
            contrasena1 = contrasena1.toLowerCase();
            for(i=0; i<contrasena1.length; i++){
                if(leters.indexOf(contrasena1.charAt(i),0)!=-1){
                    return true;
                }
            }
        }
    }
}

const val_contrasena2 = () => {
    const contrasena1 = document.getElementById("contrasena1").value;
    const contrasena2 = document.getElementById("contrasena2").value;
    const div = document.getElementById("msj-pasw2");
    if(contrasena2.length > 2 && contrasena2.length < 7){
        if(contrasena1 == contrasena2){
            div.innerHTML = "Coinciden :D";
            div.className = "text-success";
            return true;
        } else{
            div.innerHTML = "No coinciden";
            div.className = "text-danger";
            return false;
        }
    } else{
        div.innerHTML = "No cumple con los caracteres";
        div.className = "text-danger";
        return false;
    }
}

const val_direccion = () => {
    const direccion = document.getElementById("direct").value;
    const div = document.getElementById("msj-direct");
    if(direccion != ""){
        div.innerHTML = "✓";
        div.className = "text-success";
        return true;
    } else{
        div.innerHTML = "¡No hay direccion!";
        div.className = "text-danger";
        return false;
    }
}

const val_cod_postal = () => {
    const codpostal = document.getElementById("cod_pos").value;
    const div = document.getElementById("msj-codpos");
    if(codpostal != ""){
        if(isNaN(codpostal)){
            div.innerHTML = "y los numeros?";
            div.className = "text-danger";
            return false;
        } else{
            div.innerHTML = "✓";
            div.className = "text-success";
            return true;
        }
    } else{
        div.innerHTML = "No se encuentra el codigo postal";
        div.className = "text-danger";
        return false;
    }
}

const val_ciudad = () => {
    const ciudad = document.getElementById("ciudad").value;
    const div = document.getElementById("msj-city");
    if(ciudad != ""){
        div.innerHTML = "✓";
        div.className = "text-success";
        return true;
    } else{
        div.innerHTML = "No se ha especificado una ciudad";
        div.className = "text-danger";
        return false;
    }
}

const uno_o_dos = () => {
    const primero = document.getElementById("telefono").value;
    const segundo = document.getElementById("celular").value;
    const div = document.getElementById("msj-tel");
    const div2 = document.getElementById("msj-cel");
    if(primero == "" && segundo == ""){
        div.innerHTML = "Ingrese un número al menos";
        div.className = "text-danger";
        div2.innerHTML = "Ingrese un número al menos";
        div2.className = "text-danger";
        return false;
    } else{
        div.innerHTML = "✓";
        div.className = "text-success";
        div2.innerHTML = "✓";
        div2.className = "text-success";
        return true;
    }
}

const val_telefono = () => {
    const telefono = document.getElementById("telefono").value;
    const div = document.getElementById("msj-tel");
    if(telefono != ""){
        if(telefono.slice(0,3)=="56"){
            if(isNaN(telefono)){
                div.innerHTML = "y los números?";
                div.className = "text-danger";
                return false;
            } else{
                return true;
            }
        } else{
            div.innerHTML = "Intente comenzar con 56 ";
            div.className = "text-danger";
            return false;
        }
    } else{
        div.innerHTML = "No hay telefono";
        div.className = "text-danger";
        return false;
    }
}

const val_celular = () => {
    const celular = document.getElementById("celular").value;
    const div = document.getElementById("msj-cel");
    if(celular != ""){
        if(celular.slice(0,3)=="569"){
            if(isNaN(celular)){
                div.innerHTML = "y los números?";
                div.className = "text-danger";
                return false;
            } else{
                return true;
            }
        } else{
            div.innerHTML = "Intente comenzar con 569 ";
            div.className = "text-danger";
            return false;
        }
    } else{
        div.innerHTML = "No hay celular";
        div.className = "text-danger";
        return false;
    }
}

const comprobarChecks = () => {
    const div = document.getElementById("msj-chec");
    const checkbox = document.getElementsByName("groupCheckbox");
    var contador = 0;
    for(var i=1; i< checkbox.length; i++) {
        if(checkbox[i].checked)
            contador++
    }
    if(contador == 0){
        div.innerHTML = "///Seleccione al menos 2 ///";
        div.className = "text-danger";
        return false;
    }
}

const val_referencia = () => {
    const ciudad = document.getElementById("referencia").value;
    const div = document.getElementById("msj-refe");
    if(ciudad != ""){
        div.innerHTML = "✓";
        div.className = "text-success";
        return true;
    } else{
        div.innerHTML = "No es obligatorio pero ayudaria tener una referencia";
        div.className = "text-warning";
        return true;
    }
}

const val_comuna = () => {
    const comuna = document.getElementById("comuna").value;
    const div = document.getElementById("msj-comuna");
    if(comuna == "" || comuna == 0){
        div.innerHTML = "No se ha seleccionado una comuna";
        div.className = "text-danger";
        return false;
    } else{
        div.innerHTML = "✓";
        div.className = "text-success";
        return true;
    }
}