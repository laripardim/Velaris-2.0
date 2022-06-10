const utternance = new SpeechSynthesisUtterance();
const modal = document.querySelector(".modal");

var paramsBusca = new URLSearchParams(location.search);

async function loadCards() {
    fetch("http://localhost:7000/livro/" + paramsBusca.get("id"))
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
    fetch("http://localhost:7000/livro/" + paramsBusca.get("id"))
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

async function comentario() {
    let body = {
        comentario: document.querySelector("#coms").value,
        id_usuario: 1,
        id_livro: Number(paramsBusca.get("id"))
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

init();

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

// function showModal() {
//     modal.style.display = "flex";
// }

// function closeModal() {
//     modal.style.display = "none";
// }

function redirecionar() {
    window.location.href = "../home/index.html"
}

function redireciona() {
    window.location.href = "../escrever/index.html"
}

function handleLogoutClick() {
    localStorage.clear();
    AuthActions.logout().then(() => {
        window.location.reload();
    });
}

function setSpeech() {
    return new Promise(
        function (resolve, reject) {
            let synth = window.speechSynthesis;
            let id;

            id = setInterval(() => {
                if (synth.getVoices().length !== 0) {
                    resolve(synth.getVoices());
                    clearInterval(id);
                }
            }, 10);
        }
    )
}

let s = setSpeech();
s.then((voices) => utternance.voice = voices[1]); 

function falar() {
    utternance.text = document.querySelector(".quadrado2").innerHTML;
    //utternance.voice = {voiceURI: 'Microsoft Maria - Portuguese (Brazil)', name: 'Microsoft Maria - Portuguese (Brazil)', lang: 'pt-BR', localService: true, default: false}
    console.log(utternance);
    speechSynthesis.speak(utternance);
}

function leitura(status) {
    let chamarTexto = document.querySelector(".texto");

    if(status == "on")
    {
        chamarTexto.style.display = "flex";
    }

    if(status == "off")
    {
        chamarTexto.style.display = "none";
    }
}

function buscar(texto) {
    let body = {
      busca: texto
    }

  
    let settings = {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify(body) 
    }
    // alert ( JSON.stringify(body));
  
    fetch(
      "http://localhost:7000/livro/busca"
      , settings
    )
      .then(response => {
        return response.json()
      })
      .then(data => {
        var id = 0;
        if(data.length > 0) {
         // data.forEach((item, index) => {
         //   id = item.id;
         // })
          window.location.href = "../livro/index.html?id="+data[0].id;
      }else {
          alert("Not found");
      }
  
      });
  }
