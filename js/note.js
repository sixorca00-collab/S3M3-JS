// Recuperar notas al cargar
let invNotas = JSON.parse(localStorage.getItem("notas")) || [];
console.log(`Notas cargadas: ${invNotas.length}`);

// Llamamos los id's del HTML
const btncrear = document.getElementById("create");
const note = document.getElementById("inNote");
const Vform = document.getElementById("Vform");
const btnSave = document.getElementById("save");
let listaNotas = document.getElementById("note")

// Ocultar formulario al inicio
Vform.style.display = "none"; 

// Mostrar/ocultar formulario
btncrear.addEventListener('click', () => {
  Vform.style.display =
    Vform.style.display === "none" ? "flex" : "none";
});
//Mostrar las notas
function mostrarNotas(){
  listaNotas.innerHTML = ""; //Limpiamos las listas para evitar duplicados
  invNotas.forEach((texto, index) =>{ //Recorremos el Array con el forEach
    const li = document.createElement("li");
    li.textContent = texto
    //Tambien añadimos su btn de eliminar
    btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    
    //Agregamos la funcionalidad al boton
    btnEliminar.addEventListener('click', () =>{
      eliminarNota(index, li);
    });
    li.appendChild(btnEliminar);
    listaNotas.appendChild(li);
  });
}


// Guardar nota
btnSave.addEventListener('click', (e) => {
  e.preventDefault();

  if (!note.value.trim()) {
    alert("Ingrese un dato válido.");
    return;
  }

  invNotas.push(note.value); // Guardar en el array
  localStorage.setItem("notas", JSON.stringify(invNotas)); // Guardar en localStorage

  console.log("Nota agregada:", note.value);
  note.value = ""; // Limpiar input
  note.focus();
//Aqui la ponemos en pantalla
  mostrarNotas()
});
//Funcion de eliminar notas.
function eliminarNota(index, li){
  //Eliminamos en el DOM
  listaNotas.removeChild(li); 
//Eliminamos en el Array para evitar traerla de vuelta
  invNotas.splice(index, 1);
  //Actualizamos localStorage
  localStorage.setItem("notas", JSON.stringify(invNotas));
  console.log("Nota eliminada. total:", invNotas.length);
  mostrarNotas();
}
//Mostrarlas al iniciar
mostrarNotas();