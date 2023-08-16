// let dolar = document.querySelector("#dolar")
const jsonContainer = document.getElementById('dolar');


fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")

    .then(response => response.json())
    .then(data => {
        const filtroDolar = data.filter(item => {
            const nombre = item.casa.nombre.toLowerCase();
            return nombre.includes('blue') || nombre.includes('oficial') || nombre.includes('bolsa');
        });
        let html = '';

        filtroDolar.forEach(item => {
            const casa = item.casa;
            html += `
                <div class="dolar-card">
                    <h2>${casa.nombre}</h2>
                    <p>Compra: ${casa.compra}</p>
                    <p>Venta: ${casa.venta}</p>
                    <p>Variación: ${casa.variacion}</p>
                </div>
            `;
        });

        jsonContainer.innerHTML = html;
    })
    .catch(error => {
        console.error('Error al cargar el JSON:', error);
    });