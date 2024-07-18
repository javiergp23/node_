import fs from 'fs';


let outputMessage = '';
const base = 5;
const headerMessage = `
========================================
Tabla de multiplicar ${base}
========================================\n
`;

for(let i = 1; i <= 10; i++) {
  outputMessage += `${i} * ${base} = ${i * base}\n`;
}

console.log( headerMessage + outputMessage );
const ooutputPath = `outputs`;


fs.writeFileSync(`${ooutputPath}/table-multiplication-${base}.txt`, outputMessage);