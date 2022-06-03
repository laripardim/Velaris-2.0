const modal = document.querySelector(".modal");

var paramsBusca = new URLSearchParams(location.search);

async function loadCards() {
    fetch("http://localhost:7000/livro/"+paramsBusca.get("id"))
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            let card = document.querySelectorAll('.card');
            let nome_livro = document.querySelectorAll('nome_livro')
            data.forEach((item, index) => {
                document.getElementById("card_img").src = item.capa;
                nome_livro[index] = item.nome_livro;
                let titulo = document.querySelector(".quadrado2").querySelectorAll("h2")
                let genero = document.querySelector(".quadrado2").querySelectorAll("h4")
                let autor = document.querySelector(".quadrado2").querySelectorAll("h3")
                let texto = document.querySelector(".texto").querySelectorAll("p")
                titulo[0].innerHTML = item.titulo
                titulo[1].innerHTML = item.genero
                genero[0].innerHTML = item.sinopse
                autor[0].innerHTML = item.autor
                texto[0].innerHTML = item.texto
                // nome_caps[0].innerHTML = item.nome_caps
            })
        })
}

async function loadComentarios() {
    fetch("http://localhost:7000/comentario/"+paramsBusca.get("id"))
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            console.log(data);
            // alert(resp.json());
            let card = document.querySelectorAll('.card');
            let comentario = document.querySelectorAll('comentario')
            data.forEach((item, index) => {
                document.getElementById("card_img").src = item.capa;
                comentario[index] = item.comentario;
                let titulo = document.querySelector(".quadrado2").querySelectorAll("h2")
                let genero = document.querySelector(".quadrado2").querySelectorAll("h4")
                let autor = document.querySelector(".quadrado2").querySelectorAll("h3")
                let texto = document.querySelector(".texto").querySelectorAll("p")
                // titulo[0].innerHTML = item.titulo
                // titulo[1].innerHTML = item.genero
                // genero[0].innerHTML = item.sinopse
                // autor[0].innerHTML = item.autor
                // texto[0].innerHTML = item.texto
                
            })
        })
}

async function comentario(){
    let body = {
        comentario: document.querySelector("#coms").value,
        id_usuario: 1,
        id_livro:  Number(paramsBusca.get("id"))
    }
 
    let settings = {
        "method": "POST",
        "headers": { 
            "Content-Type": "application/json" 
        },
        "body": JSON.stringify(body)
    }
 
   fetch("http://localhost:7000/comentario", settings)
     .then(response => {
       return response.json();
     })
     .then(data => {
       console.log(data);
     });
     
 }
 

function generateCards(data) {

    localStorage.setItem('ex1', JSON.stringify);
    imgCard = JSON.parse(localStorage.getItem('userdata'));

    livro.innerHTML = userdata;
}

function init() {
    loadCards();
    loadComentarios();
}

(init) ();

function showModal() {
    showModal();
    
}

// function load() {
//     carregarDados();
// }

// function carregarDados() {

// }
// function initMap() {    
    // map = new google.maps.Map(document.querySelector(".map"), {
    //     center: { lat: -34.397, lng: 150.644 },
    //     zoom: 18,
    // });

    // map.addListener("click", (data) => {
    //     let coord = { lat: data.latLng.lat(), lng: data.latLng.lng() };

        // //addMarker(coord, "Teste", "../assets/radar.png");
        // meuAlerta = coord;
        
    //     showModal();
    // });

//     navigator.geolocation.getCurrentPosition((location) => {
//         let coord = { lat: location.coords.latitude, lng: location.coords.longitude};
        
//         map.setCenter(coord);

//         addMarker(coord, "Minha Localizacao", "../assets/localiza.png");
//     });
// }

function showModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}