// dados da api
let api = {
    base: 'https://api.openweathermap.org/data/2.5',
    chave: 'c6884a5e48a6c59e8182afbe092647e8',
    cidade: 'açu',
    unidade: 'metric',
    linguagem: 'pt_br'
}
// montar link
function link(api){
    let link = `${api.base}/weather?q=${api.cidade}&lang=${api.linguagem}&units=${api.unidade}&appid=${api.chave}`
    return link
}   

fetch(link(api))
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
})
.catch((erro) => {
    console.log(erro)
})