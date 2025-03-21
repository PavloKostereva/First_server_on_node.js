// Читання та запис файлів
// Напишіть скрипт, який читає файл input.txt, додає до його вмісту текст
// "Hello from Node.js" і записує результат у файл output.txt.

const fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, data) => {

    if (err) throw err;
    const newData = data + '\n Hello from Node.js';
    fs.writeFile('out_put.txt', newData, (err) => { 
        if (err) throw err;
        console.log('File written succesfully'+ newData)
    })
});