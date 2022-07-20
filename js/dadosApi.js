// dados da api
let api = {
    base: 'https://api.openweathermap.org/data/2.5',
    chave: 'c6884a5e48a6c59e8182afbe092647e8',
    cidade: 'açu',
    unidade: 'metric',
    linguagem: 'pt_br'
}
// dados da pagina
    let buscar = document.querySelector('#buscar')
    let botão = document.querySelector('.botão')
    let nomeCidade = document.querySelector('.nomeCidade')
    let icone = document.querySelector('.icone')
    let graus = document.querySelector('.graus')
    let dataAtual = document.querySelector('.data')
    let clima = document.querySelector('.clima')
    let minMax = document.querySelector('.min-max')
    let humidade = document.querySelector('.humidade')
    let sTermica = document.querySelector('.sTermica')

    // chamada das funções
        mudarData(dataAtual)


// carregar a api
fetch(link(api))
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
})
.catch((erro) => {
    console.log(erro)
})

// funções
    // montar link
    function link(api, cidade = 'açu'){
        let link = `${api.base}/weather?q=${cidade}&lang=${api.linguagem}&units=${api.unidade}&appid=${api.chave}`
        return link
    }   
    // modificar data 
    function mudarData(data){
        let date = new Date()
        let dia = String(date.getDate()).padStart(2, '0')
        let mes = String(date.getMonth() + 1).padStart(2, '0')
        let ano = date.getFullYear()
        let dataCompleta = `${dia}/${mes}/${ano}`
        data.innerText = dataCompleta
    }
