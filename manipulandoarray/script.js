let tec = ['html', 'css', 'js']

//  add no final da lista
tec.push('nodejs')
// add no começo da lista
tec.unshift('sql')
// remover do fim
tec.pop()
// remover do começo
tec.shift()
// pegar somente alguns elementos do arraytec
tec.slice(1,3)
// remover 1 ou mais items em qualquer prosição do array
tec.splice(1,2)
// encontrar a posição de um elemento no array
let index = tec.indexOf('css')
tec.splice(index, 1)

console.log(index)