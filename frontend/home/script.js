const { response } = require("express");
const { INTEGER } = require("sequelize/types");

async function loadCapas(genero, div) {
    fetch("http://localhost:7000/livro")
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            console.log(data)
            let capa = document.querySelectorAll('#'+div);
            data.forEach((item, index) => {
                //alert ('passou'+item+'index='+index);

                if(item.genero == genero)
                {
                    capa[index].src = item.capa;
                    capa[index].id = item.id;
                    capa[index].addEventListener("click", () => {
                       window.open("../livro/index.html?id=" + capa[index].id);
                    });
                }
                //capa[index].onclick = linkLivro(item.id);
                
            })
        })
        
}


async function linkLivro(id)
{
    document.location = "../dadoslivro/index.html?id="+id;
}

// async function loadDadosLivro(){
//     //construir funcao que exibe nome_livro, capa, capitulo e escrita 
// }

function redireciona() {
    window.location.href = "../leia/index.html"
}

function red() {
    window.location.href = "../perfil/index.html"
}

function redirecionar() {
    window.location.href = "../escrever/index.html"
}

function navegar() {
    window.location.href = "https://www.instagram.com"
}

function navegarum() {
    window.location.href = "https://www.instagram.com"
}

function navegardois() {
    window.location.href = "https://www.instagram.com"
}

function navegartres() {
    window.location.href = "https://www.instagram.com"
}

function navegarquatro() {
    window.location.href = "https://www.instagram.com"
}

function handleLogoutClick() {
    localStorage.clear();
    AuthActions.logout().then(() => {
    window.location.reload();
});
}

function tras(e) {
    console.log(e)
    let livros = document.querySelector(".row__posters");

    livros.scrollLeft = 0;
}
function frente(e) {
    let livros = document.querySelector(".row__posters");

    let move = livros.scrollLeft + 300;

    if(move >= livros.scrollWidth) {
        livros.scrollLeft = livros.scrollWidth;
    }else {
        livros.scrollLeft = move;
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
    alert ( JSON.stringify(body));
  
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

function init() {
    loadCapas();
    // loadDadosLivro();
}

init();