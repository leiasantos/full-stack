let username = "Clara"
console.log(username);
console.log(typeof username);

console.log('"Uma string com aspas duplas"');
console.log("'Uma string com aspas simples'");
console.log(`
  Uma string com acento grave permite 
  escrever múltiplas linhas.
  `);

let texto = " JavaScript é incrível "
let fruta = "banana"

console.log("1️⃣ length")
console.log("Explicação: Retorna o tamanho da string.")
console.log("Exemplo:", texto.length)

console.log(" ")

console.log("2️⃣ toUpperCase()")
console.log("Explicação: Converte todos os caracteres para MAIÚSCULO.")
console.log("Exemplo:", texto.toUpperCase())

console.log(" ")

console.log("3️⃣ toLowerCase()")
console.log("Explicação: Converte todos os caracteres para minúsculo.")
console.log("Exemplo:", texto.toLowerCase())

console.log(" ")

console.log("4️⃣ trim()")
console.log("Explicação: Remove espaços no início e no final da string.")
console.log("Exemplo:", texto.trim())

console.log(" ")

console.log("5️⃣ trimStart()")
console.log("Explicação: Remove espaços apenas do início da string.")
console.log("Exemplo:", texto.trimStart())

console.log(" ")

console.log("6️⃣ trimEnd()")
console.log("Explicação: Remove espaços apenas do final da string.")
console.log("Exemplo:", texto.trimEnd())

console.log(" ")

console.log("7️⃣ includes()")
console.log("Explicação: Verifica se a string contém determinado texto.")
console.log("Exemplo:", texto.includes("JavaScript"))

console.log(" ")

console.log("8️⃣ startsWith()")
console.log("Explicação: Verifica se a string começa com determinado texto.")
console.log("Exemplo:", texto.trim().startsWith("JavaScript"))

console.log(" ")

console.log("9️⃣ endsWith()")
console.log("Explicação: Verifica se a string termina com determinado texto.")
console.log("Exemplo:", texto.trim().endsWith("incrível"))

console.log(" ")

console.log("🔟 slice()")
console.log("Explicação: Extrai uma parte da string.")
console.log("Exemplo:", texto.slice(1,11))

console.log(" ")

console.log("11️⃣ substring()")
console.log("Explicação: Extrai parte da string usando posição inicial e final.")
console.log("Exemplo:", texto.substring(1,11))

console.log(" ")

console.log("12️⃣ replace()")
console.log("Explicação: Substitui um texto por outro.")
console.log("Exemplo:", texto.replace("JavaScript","JS"))

console.log(" ")

console.log("13️⃣ replaceAll()")
console.log("Explicação: Substitui todas as ocorrências de um texto.")
console.log("Exemplo:", fruta.replaceAll("a","o"))

console.log(" ")

console.log("14️⃣ split()")
console.log("Explicação: Divide uma string em um array.")
console.log("Exemplo:", "maçã,banana,uva".split(","))

console.log(" ")

console.log("15️⃣ concat()")
console.log("Explicação: Junta duas ou mais strings.")
console.log("Exemplo:", "Olá".concat(" mundo"))

console.log(" ")

console.log("16️⃣ repeat()")
console.log("Explicação: Repete a string várias vezes.")
console.log("Exemplo:", "ha".repeat(3))

console.log(" ")

console.log("17️⃣ charAt()")
console.log("Explicação: Retorna o caractere de um índice.")
console.log("Exemplo:", "Clara".charAt(1))

console.log(" ")

console.log("18️⃣ at()")
console.log("Explicação: Retorna o caractere pelo índice (mais moderno).")
console.log("Exemplo:", "Clara".at(1))

console.log(" ")

console.log("19️⃣ indexOf()")
console.log("Explicação: Retorna a posição da primeira ocorrência.")
console.log("Exemplo:", texto.indexOf("Script"))

console.log(" ")

console.log("20️⃣ lastIndexOf()")
console.log("Explicação: Retorna a posição da última ocorrência.")
console.log("Exemplo:", fruta.lastIndexOf("a"))

console.log(" ")

console.log("21️⃣ search()")
console.log("Explicação: Procura um padrão usando expressão regular.")
console.log("Exemplo:", "abc123".search(/\\d/))

console.log(" ")

console.log("22️⃣ match()")
console.log("Explicação: Retorna as correspondências encontradas.")
console.log("Exemplo:", "abc123".match(/\\d+/))

console.log(" ")

console.log("23️⃣ matchAll()")
console.log("Explicação: Retorna todas as correspondências encontradas.")
console.log("Exemplo:", [..."a1b2".matchAll(/\\d/g)])

console.log(" ")

console.log("24️⃣ padStart()")
console.log("Explicação: Preenche o início da string.")
console.log("Exemplo:", "5".padStart(3,"0"))

console.log(" ")

console.log("25️⃣ padEnd()")
console.log("Explicação: Preenche o final da string.")
console.log("Exemplo:", "5".padEnd(3,"0"))

console.log(" ")

console.log("26️⃣ localeCompare()")
console.log("Explicação: Compara duas strings.")
console.log("Exemplo:", "a".localeCompare("b"))

console.log(" ")

console.log("27️⃣ normalize()")
console.log("Explicação: Normaliza caracteres Unicode.")
console.log("Exemplo:", "é".normalize())

console.log(" ")

console.log("28️⃣ codePointAt()")
console.log("Explicação: Retorna o código Unicode do caractere.")
console.log("Exemplo:", "A".codePointAt(0))

console.log(" ")

console.log("29️⃣ valueOf()")
console.log("Explicação: Retorna o valor primitivo da string.")
console.log("Exemplo:", "JavaScript".valueOf())

console.log(" ")

console.log("30️⃣ toString()")
console.log("Explicação: Converte valor para string.")
let numero = 10
console.log("Exemplo:", numero.toString())
