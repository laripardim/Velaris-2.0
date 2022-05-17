var paramsBusca = new URLSearchParams(location.search);

async function loadCards() {
    fetch("http://localhost:7000/livro/"+paramsBusca.get("id"))
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            console.log(data)
            alert("teste");
            // alert(resp.json());
            let card = document.querySelectorAll('.card');
            let nome_livro = document.querySelectorAll('nome_livro')
            data.forEach((item, index) => {
                alert (item.titulo);
                document.getElementById("card_img").src = item.capa;
                nome_livro[index] = item.nome_livro;
                let titulo = document.querySelector(".quadrado2").querySelectorAll("h2")
                let genero = document.querySelector(".quadrado2").querySelectorAll("h4")
                titulo[0].innerHTML = item.titulo
                titulo[1].innerHTML = item.genero
                genero[0].innerHTML = item.sinopse
            })
        })
}

function generateCards(data) {

    localStorage.setItem('ex1', JSON.stringify);
    imgCard = JSON.parse(localStorage.getItem('userdata'));

    livro.innerHTML = userdata;
}

function init() {
    loadCards();
}

(init) ();

// function load() {
//     carregarDados();
// }

// function carregarDados() {

// }