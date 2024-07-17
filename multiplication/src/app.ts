

// intento para pintar en pantalla
import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(__dirname, '../outputs/tabla-1.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err){
    console.error('Error al leer el archivo:', err);
    return;
  }

    console.log('Contenido del archivo:', data);
});