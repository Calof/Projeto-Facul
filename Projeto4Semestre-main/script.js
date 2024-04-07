
function consultarLivro(){

  let container = document.getElementById("Card");
  let lista = document.getElementById("list");
  lista.innerHTML = '';
  container.innerHTML ='';

  let research = document.querySelector('#research').value;


    let url = `https://books.googleapis.com/books/v1/volumes?q=${research}+&fields=items/volumeInfo(title,authors,publisher,publishedDate,imageLinks)`;


    //Retornando dados em json
      fetch(url).then(function(response){
       response.json().then(function(dado){
       console.log(dado);
       debugger;

       for(let i = 0; i < dado.items.length; i++)
       { 

          let listitem =`<li> <p>${dado.items[i].volumeInfo.title}</p><li/>`;

          let card =`<div>`;
          card += `<div class="grid-item">`;
          card += `<img src="${dado.items[i].volumeInfo.imageLinks.thumbnail} " class="card-image">`;
          
          card += `<div class="card-content">`
          
          card += `<p class="card-title"> Título: ${dado.items[i].volumeInfo.title} </p>`;

          card += `<p class="card-author"> Autor: ${dado.items[i].volumeInfo.authors} </p>`;

          card += `<p class="card-summary"> Editora: ${dado.items[i].volumeInfo.publisher} </p>`;

          card += `<p class="card-publisher" >Data De Publicação: ${dado.items[i].volumeInfo.publishedDate}</p>`;

          card += `<p>Link Book: </p>
          <a href=" ${dado.items[i].volumeInfo.previewLink}"/>`;

          card += "</div></div></div>"
          

          container.innerHTML += card;
          lista.innerHTML += listitem;
        }
    })

  });
  
  }