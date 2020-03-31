const tarjeta = document.querySelector("#tarjeta"),
  btnAbrirFormuario = document.querySelector("#btn-abrir-formulario"),
  formulario = document.querySelector('#formulario-tarjeta'),
  numeroTarjeta = document.querySelector('#tarjeta .numero'),
  nombreTarjeta = document.querySelector('#tarjeta .nombre'),
  logomarca = document.querySelector('#logo-marca'),
  firma = document.querySelector('#firma .firma p'),
  mesExpiracion = document.querySelector('#tarjeta #expiracion .mes'),
  yearExpiracion = document.querySelector('#tarjeta #expiracion .year'),
  ccvExpiracion = document.querySelector('#tarjeta #ccv .ccv');
  
/* --------------- Volteamos la tarjeta para mostrar el frente -------------- */

const mostrarFrente = () => {
  if (tarjeta.classList.contains('active')) {
     tarjeta.classList.remove('active');
  }
};

/* --------------- Volteamos la tarjeta para mostrar la parte de atras -------------- */

const mostrardetras = () => {
  tarjeta.classList.add('active');
}

/* ------------------------- ROTACION DE LA TARJETA ------------------------- */

tarjeta.addEventListener("click", () => {
  tarjeta.classList.toggle("active");
});

/* ------------------------- ABRIR CERRAR FORMULARIO ------------------------ */

btnAbrirFormuario.addEventListener("click", () => {
  btnAbrirFormuario.classList.toggle("active");
  formulario.classList.toggle("active");
});

/* ----------------------------- SELECT DEL MES ----------------------------- */

for ( let i = 1; i <= 12; i++ ) {
   let opcion = document.createElement('option');
   let selectMes = document.querySelector('#selectMes');
   opcion.value = i;
   opcion.innerText = i;
   formulario.selectMes.appendChild(opcion);
}

const YearActual = new Date().getFullYear();
for (let i = YearActual; i <= YearActual + 8; i++) {
 let opcion = document.createElement('option');
 let selectYear = document.querySelector('#selectYear');
opcion.value = i;
opcion.innerText = i;
formulario.selectYear.appendChild(opcion);
}

/* ------------------------- INPUT NUMERO DE TARJETA ------------------------ */

formulario.inputNumero.addEventListener('keyup', (e) => {
 let valorInput = e.target.value;
 formulario.inputNumero.value = valorInput
//  Eliminar espacios en blancos
 .replace(/\s/g, '')
//  Eliminar letras
 .replace(/\D/g, '')
//  Poner espacions cada 4 números
.replace(/([0-9]{4})/g, '$1 ')
// Elimina el ultimo espaciado
.trim();

numeroTarjeta.textContent = valorInput;
if (valorInput == '') {
numeroTarjeta.textContent = '#### #### #### ####';
logomarca.innerHTML = '';
}

if (valorInput[0] == '4') {
  logomarca.innerText = '';
  let imagen = document.createElement('img');
  imagen.src = 'img/logos/visa.png';
  logomarca.appendChild(imagen);
}

if (valorInput[0] == '5') {
  logomarca.innerText = '';
  let imagen = document.createElement('img');
  imagen.src = 'img/logos/mastercard.png';
  logomarca.appendChild(imagen);
}

if (valorInput[0] == '3') {
  logomarca.innerText = '';
  let imagen = document.createElement('img');
  imagen.src = 'img/logos/americanexpress.png';
  logomarca.appendChild(imagen);
}

/* --------- VOLTEAMOS LA TARJETA PARA QUE EL  USUARIO VEA ELFRENTE --------- */

mostrarFrente();

});

/* -------------------------- INPUT NOMBRE TARJETA -------------------------- */

formulario.inputNombre.addEventListener('keyup', (e) => {
  let valorInput =  e.target.value;
  nombreTarjeta.textContent = valorInput;
  firma.textContent = valorInput;
  if (valorInput == '') {
  nombreTarjeta.textContent = 'JHON DOE';
  };
  formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');

  /* --------- VOLTEAMOS LA TARJETA PARA QUE EL  USUARIO VEA ELFRENTE --------- */

  mostrarFrente();

});

/* ----------------------------- SELECT DEL MES ----------------------------- */

formulario.selectMes.addEventListener('change', (e) => {
  mesExpiracion.textContent = e.target.value; 

   /* --------- VOLTEAMOS LA TARJETA PARA QUE EL  USUARIO VEA ELFRENTE --------- */

   mostrarFrente();
});

/* ----------------------------- SELECT DEL año----------------------------- */

formulario.selectYear.addEventListener('change', (e) => {
  yearExpiracion.textContent = e.target.value.slice(2); 

   /* --------- VOLTEAMOS LA TARJETA PARA QUE EL  USUARIO VEA ELFRENTE --------- */

   mostrarFrente();
});


/* ----------------------------- SELECT DEL CCV----------------------------- */

formulario.inputCCV.addEventListener('keyup', (e) => {
  let valorInput = e.target.value;
  ccvExpiracion.textContent = valorInput;
  mostrardetras();
  formulario.inputCCV.value = valorInput.replace(/\s/g, '');
  formulario.inputCCV.value = valorInput.replace(/\D/g, ''); 
});



