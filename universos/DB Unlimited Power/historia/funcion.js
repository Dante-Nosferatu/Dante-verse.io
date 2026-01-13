const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");
    const closeBtn = document.querySelector(".close-btn");

    // Abrir modal con HTML externo
    document.querySelectorAll(".chapter-block").forEach(block => {
        block.addEventListener("click", async () => {

            const htmlFile = block.getAttribute("data-html");

            // Cargar archivo HTML
            const respuesta = await fetch(htmlFile);
            const contenido = await respuesta.text();

            // Insertarlo dentro del modal
            modalBody.innerHTML = contenido;

            modal.style.display = "block";
        });
    });

    // Cerrar modal con botón
    closeBtn.onclick = () => {
        modal.style.display = "none";
    };

    // Cerrar tocando afuera
    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    };