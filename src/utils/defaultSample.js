export const defaultSample = `algoritmo "Exemplo"
var
   inteiro contador
   real media

inicio
   contador := 0
   leia(media)
   se media >= 7 entao
      escreval("Aprovado!")
   senao
      escreval("Reprovado!")
   fimse

   para contador de 1 ate 3 faca
      escreva("i = ", contador)
   fimpara
fim
`