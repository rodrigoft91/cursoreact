
/*

// desafio IfElse

var idade = prompt('Digite a sua idade: ')

idade = parseInt(idade)


// condições

if (idade >= 0 && idade < 15) {

    document.write('Você é uma criança!')

} else
    if (idade >= 15 && idade < 30) {


        document.write('Você é Jovem!')

    } else
        if (idade >= 30 && idade < 60) {

            document.write('Você é adulto!')

        } else {

            document.write('Você é idoso!')
        }
*/



// logiga de média de notas


alert('Ola, digite as notas A1, A2, A3 e as faltas para sabermos se está aprovada ou reprovada!')

//notas
var nota1 = prompt('Digite a nota A1: ')
var nota2 = prompt('Digite a nota A2: ')
var nota3 = prompt('Digite a nota A3: ')
var notatotal = null

nota1 = parseFloat(nota1)
nota2 = parseFloat(nota2)
nota3 = parseFloat(nota3)
notatotal = parseFloat(notatotal)

notatotal = nota1 + nota2 + nota3

//faltas

var faltas = prompt('Digite a quantidade de faltas do aluno: ')

faltas = parseInt(faltas)


//media

var media = notatotal / 3



//condição

if(media >= 7 && faltas <= 20){

    alert('Média para aprovação 7,0 pontos. \nTotal de faltas permitidas 20!')
    alert('Nota A1: ' + nota1 + '\nNota A2: ' + nota2 + '\nNota A3: ' + nota3 + '\nMédia: ' + media + '\nFaltas: ' + faltas + '\n\nVOCÊ ESTÁ APROVADO!')


}else{

    alert('Média para aprovação 7,0 pontos. \nTotal de faltas permitidas 20!')
    alert('Nota A1: ' + nota1 + '\nNota A2: ' + nota2 + '\nNota A3: ' + nota3 + '\nMédia: ' + media + '\nFaltas: ' + faltas + '\n\nVOCÊ ESTÁ REPROVADO!')

}



