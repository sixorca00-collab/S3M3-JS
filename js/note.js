// Recuperar notas al cargar
let invNotas = JSON.parse(localStorage.getItem("notas")) || [];

// Nodos HTML
const btncrear = document.getElementById("create");
const note = document.getElementById("inNote");
const Vform = document.getElementById("Vform");
const btnSave = document.getElementById("save");

// Ocultar formulario al inicio
Vform.style.display = "none"; 

// Mostrar/ocultar formulario
btncrear.addEventListener('click', () => {
  Vform.style.display =
    Vform.style.display === "none" ? "flex" : "none";
});

// Guardar nota
btnSave.addEventListener('click', (e) => {
  e.preventDefault();

  if (!note.value.trim()) {
    alert("Ingrese un dato válido.");
    return;
  }

  invNotas.push(note.value); // Guardar en el array
  localStorage.setItem("notas", JSON.stringify(invNotas)); // Guardar en localStorage

  console.log(invNotas);
  note.value = ""; // Limpiar input
});
