import Prism from 'prismjs'

// base necessária (linguagem "markup" já vem)
import 'prismjs/components/prism-clike'

// Tema base opcional (pode trocar por outro CSS de tema do Prism se quiser)
// import 'prismjs/themes/prism-tomorrow.css'

const keywords = [
    // controle
    'algoritmo','inicio','fim','var','declare','constante',
    'se','entao','senao','fimse',
    'para','de','ate','passo','faca','fimpara',
    'enquanto','fimenquanto',
    'repita','ate',
    'escolha','caso','outrocaso','fimescolha',
    'procedimento','fimprocedimento','funcao','fimfuncao','retorne',
    // io
    'leia','escreva','escreval',
    // outros
    'registro','fimregistro'
]

const types = [
    'inteiro','real','logico','caracter','cadeia'
]

const constants = [
    'verdadeiro','falso','nulo'
]

Prism.languages.portugol = {
    comment: [
        { pattern: /\/\/.*/m },
        { pattern: /\/\*[\s\S]*?\*\// }
    ],
    string: {
        pattern: /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/,
        greedy: true
    },
    // números: inteiros, reais com vírgula ou ponto
    number: /\b\d+(?:[.,]\d+)?\b/,
    boolean: new RegExp(`\\b(?:${constants.join('|')})\\b`, 'i'),
    keyword: new RegExp(`\\b(?:${keywords.join('|')})\\b`, 'i'),
    type: new RegExp(`\\b(?:${types.join('|')})\\b`, 'i'),
    function: /\b[a-zA-Z_á-úÁ-Ú][\wá-úÁ-Ú]*\s*(?=\()/,
    // operadores comuns
    operator: /<>|<=|>=|:=|==|[-+*/%=<>]/,
    punctuation: /[()[\]{},.;:]/
}

export default Prism
