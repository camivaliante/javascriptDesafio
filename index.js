import {artistas} from "./artistas.js";

const entradas = document.getElementById("tickets-container");

artistas.forEach((artista) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="col-md-6 col-0-gutter">
					<div class="ot-portfolio-item">
						<figure class="effect-bubba">
							<img src="${artista.img1}" class="img-responsive">
							<figcaption>
								<h2>${artista.nombre}</h2>
								<p>${artista.ubicacion}</p>
								<a href="./${artista.url}"></a>
							</figcaption>
						</figure>
					</div>
			</div>
`;
  entradas.appendChild(div);

});

let inconveniente = [];

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {

   e.preventDefault();

   const nombre = document.getElementById('nombre').value;
   const email = document.getElementById('email').value;
   const mensaje = document.getElementById('mensaje').value;

   inconveniente.push({nombre, email, mensaje});

   Swal.fire(
    'Muchas gracias ' + nombre + ', tu mensaje ha sido enviado!',
    'Nos comunicaremos con vos por E-mail en un plazo de 72hs',
    'success'
  )

   const enJSON = JSON.stringify(inconveniente);

   localStorage.setItem('inconveniente', enJSON);

   const miInconveniente = JSON.parse(localStorage.getItem('inconveniente'));

   fetch("https://formsubmit.co/ajax/camilavaliante_6@hotmail.com",{
    method: "POST",
    body: new FormData(e.target),
  })
  .then(res => res.ok ? res.json() : Promise.reject(res))
  .then(json => {
    form.reset();
  })
  .catch (err => {
    console.log(err);
  })
  ;

})
