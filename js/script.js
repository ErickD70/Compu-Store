const formulario = document.getElementById("registroForm");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;

    alert(`¡Bienvenido a Compu Store, ${nombre}!`);

    formulario.reset();

});