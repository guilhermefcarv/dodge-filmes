const API_KEY = 'dbc57a6a0e93b700b9be0d86d34108a2';

/*Lançamentos*/
function exibeLan(){
    let divLan = document.getElementById('lan');
    let texto = '';
    
    let dados = (JSON.parse(this.responseText));
    for(i = 0; i < 4; i++){
        if(i == 0){
            let filme = dados.results[i];

            texto = texto + `
                <div class="carousel-item active pb-4">
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 photo">
                        <img class="img-fluid" src="https://image.tmdb.org/t/p/w500${filme.poster_path}">
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 text">
                        <h1>${filme.title}</h1>
                        <p><b>SINOPSE: </b>${filme.overview}</p>

                        <b>ESTREIA: </b>${filme.release_date}
                        <p><b>AVALIAÇÃO: </b>${filme.vote_average} / 10.0</p><br>
                        
                        <a href="https://www.themoviedb.org/movie/${filme.id}"><button type="button" class="btn btn-outline-secondary mb-4">Leia mais...</button></a>
                    </div>
                </div>
            `;
        }
        else{
            let filme = dados.results[i];

            texto = texto + `
                <div class="carousel-item pb-4">
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 photo">
                        <img class="img-fluid" src="https://image.tmdb.org/t/p/w500${filme.poster_path}">
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 text">
                        <h1>${filme.title}</h1>
                        <p><b>SINOPSE: </b>${filme.overview}</p>

                        <b>ESTREIA: </b>${filme.release_date}
                        <p><b>AVALIAÇÃO: </b>${filme.vote_average} / 10.0</p><br>
                        
                        <a href="https://www.themoviedb.org/movie/${filme.id}"><button type="button" class="btn btn-outline-secondary mb-4">Leia mais...</button></a>   
                    </div>
                </div>
            `;
        }
    };

    divLan.innerHTML = texto
}
function executarLan() {
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeLan;
    xhr.open("GET", `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=pt-BR`);
    xhr.send();
}

/*POPULARES*/
function exibePopu(){
    let divPopu = document.getElementById('popu');
    let texto = '';
    
    let dados = (JSON.parse(this.responseText));
    for(i = 4; i < 8; i++){
        let filme = dados.results[i];

        texto = texto + `
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 card-des">
                <a href="https://www.themoviedb.org/movie/${filme.id}"><img class="img-fluid" src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="destaques 1"></a>
            </div>
        `;
    };

    divPopu.innerHTML = texto
}
function executarPopu() {
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibePopu;
    xhr.open("GET", `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`);
    xhr.send();
}

/*EM CARTAZ*/
function exibeCartaz(){
    let divCartaz = document.getElementById('cartaz');
    let texto = '';
    
    let dados = JSON.parse(this.responseText);
    for(i = 8; i < 12; i++){
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

    divCartaz.innerHTML = texto
}
function executarCartaz() {
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeCartaz;
    xhr.open("GET", `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=pt-BR`);
    xhr.send();
}

window.onload = () => {
    executarCartaz()
    executarPopu()
    executarLan()
}