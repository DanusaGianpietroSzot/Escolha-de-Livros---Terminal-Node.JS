// pegar um input
//Se for sim, mostra as categorias disponíveis, pergunta qual ela escolhe
//Se não, mostra todos os livros em ordem crescente em ordem de páginas

const livros = require('./database')
//console.log(livros)

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N  ')

if(entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis:')
    console.log('Suspense Policial', '/ Fantasia', '/ Romance', '/ História do Brasil', '/ Estilo de Vida', '/ Pesquisa Científica')

    const entradaCategoria = readline.question('Escolha sua categoria: ')
    const retorno = livros.filter(livros => livros.categoria == entradaCategoria)

    console.table(retorno)
}else{
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Esses são todos os livros disponíveis: ')
    console.table(livrosOrdenados)
}

