const usuarios = [
    {
      id: 1,
      nome: 'Fulano',
      sobrenome: 'da Silva',
      idade: 19,
      uf: 'SP',
      cidade: 'São Paulo'
    },
    {
      id: 2,
      nome: 'Ciclano',
      sobrenome: 'da Silva',
      idade: 91,
      uf: 'SP',
      cidade: 'Santos'
    },
    {
      id: 3,
      nome: 'Beltrano',
      sobrenome: 'da Silva',
      idade: 28,
      uf: 'MG',
      cidade: 'Belo Horizonte'
    },
    {
      id: 4,
      nome: 'Huguinho',
      sobrenome: 'Donald',
      idade: 82,
      uf: 'RJ',
      cidade: 'Niterói'
    },
    {
      id: 5,
      nome: 'Zezinho',
      sobrenome: 'Donald',
      idade: 37,
      uf: 'GO',
      cidade: 'Goiânia'
    },
    {
      id: 6,
      nome: 'Luizinho',
      sobrenome: 'Donald',
      idade: 73,
      uf: 'BA',
      cidade: 'Itaparica'
    },
    {
      id: 7,
      nome: 'Mônica',
      sobrenome: 'de Souza',
      idade: 46,
      uf: 'CE',
      cidade: 'Canoa Quebrada'
    },
    {
      id: 8,
      nome: 'Magali',
      sobrenome: 'de Souza',
      idade: 64,
      uf: 'PR',
      cidade: 'Ilha do Mel'
    },
    {
      id: 9,
      nome: 'Cascão',
      sobrenome: 'de Souza',
      idade: 55,
      uf: 'RJ',
      cidade: 'Rio de Janeiro'
    },
    {
      id: 10,
      nome: 'Cebolinha',
      sobrenome: 'de Souza',
      idade: 100,
      uf: 'SP',
      cidade: 'São Paulo'
    }
  ]
       

/**
 * DESAFIO 01
 * Criar uma função que exiba (console.log()) o nome e sobrenome (numa string só) de cada usuário.
 * Tente a desestruturação.
 */
//   function exibirNomesCompletos(users) {
//     let nomesCompletos = ""
//     for (let user of users) {
//         let nome = user.nome
//         let sobrenome = user.sobrenome
//         nomesCompletos = nomesCompletos + nome + " " + sobrenome + " - "
//     }
//     console.log(nomesCompletos.slice(0, nomesCompletos.length - 3))
// } 
// exibirNomesCompletos(usuarios)

/**
 *______________________________________________________________________________________________________________________* 
 * 
 * DESAFIO 02
 * Criar uma função que exiba (console.log()) o nome e cidade (numa string só) apenas dos usuários de RJ.
 * Tente usar a desestruturação.
 */
  // function exibirNomeECidadeDeUsuariosDoRJ(users) {
  //   let nomesUF = ""
  //   for (let user of users) {
  //   if(user.uf == "RJ"){
  //     let nome = user.nome;
  //     let uf = user.uf
  //     nomesUF += nome + " " + uf + " - "
  //     }
  //   } 
  //   console.log(nomesUF.slice(0, nomesUF.length - 3))
  // } 

  // exibirNomeECidadeDeUsuariosDoRJ(usuarios)

/**
 * _________________________________________________________________________________________________________________________________
 * 
 * DESAFIO 03
 * Criar uma função que exiba (console.log()) um array de cidades - sem repetir valores.
 * Tente usar a desestruturação.
 */
// function exibirCidadesUnicas(users){
//   let cidades = []
//   for (let user of users){
//     if(!cidades.includes(user.cidade)){
//       cidades.push(user.cidade)
//     }
//   }
//   console.log(cidades)
// }

// exibirCidadesUnicas(usuarios)

/**
 * ________________________________________________________________________________________________________________________________
 * 
 * DESAFIO 04
 * Criar uma função que exiba (console.log()) um objeto com um objeto por UF dentro - e, dentro desse objeto 'UF', as cidades dessa UF (sem repetir) 
 * Tente usar a desestruturação.
 * Resultado esperado:
 * {
 *  SP: [ 'São Paulo', 'Ribeirão Preto' ],
 *  RJ: [ 'Rio de Janeiro', 'Niterói' ]
 * }
 */

function exibirCidadesUnicasPorUF(users) {
  let CidadesUnicasPorUF = {}
 for (let user of users) {
      CidadesUnicasPorUF[user.uf] = []
     }
     for (let user of users) {
      if(!CidadesUnicasPorUF[user.uf].includes(user.cidade)) {
         CidadesUnicasPorUF[user.uf].push(user.cidade)
      }
     } 
     console.log(CidadesUnicasPorUF)
} 
exibirCidadesUnicasPorUF(usuarios)