function exibePesq(){
    let divPesq = document.getElementById('pesq');
    let texto = '';
    
    let dados = (JSON.parse(this.responseText));
    for(i = 0; i < dados.results.length; i++){
        let filme = dados.results[i];

        texto = texto + `
            <div class="row">
                <div class="col-12 cart">
                    <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 photo-cart">
                        <img class="img-fluid" src="https://image.tmdb.org/t/p/w500${filme.poster_path}">
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 text-cart">
                        <h2>${filme.title}</h2>
                        <b>ESTREIA: </b>${filme.release_date}
                        <p><b>SINOPSE: </b>${filme.overview}</p>
                        <a href="https://www.themoviedb.org/movie/${filme.id}"><button type="button" class="btn">Leia mais...</button></a>
                    </div>
                </div>
            </div>
        `;
    };

    divPesq.innerHTML = texto
}

function executarPesq() {
    let query = document.getElementById('txtBuscar').value;
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibePesq;
    xhr.open("GET", `https://api.themoviedb.org/3/search/movie?api_key=98b568247c993c8cf21afa820938b587&language=pt-BR&query=${query}`);
    xhr.send();
}

window.onload = () => {
    document.getElementById("btnBuscar").addEventListener ('click', executarPesq);
}