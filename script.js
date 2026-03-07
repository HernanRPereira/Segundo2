function ordenarPorFecha() {
  const contenedor = document.getElementById("informes");
  const dias = Array.from(contenedor.getElementsByClassName("dia"));

  dias.sort((a, b) => {
    const fechaA = new Date(a.dataset.fecha);
    const fechaB = new Date(b.dataset.fecha);
    return fechaB - fechaA;
  });

  dias.forEach(dia => contenedor.appendChild(dia));
}