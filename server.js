const http = require('http');//завантаження вбудованого модуля. Це для створення веб-сервера
const hostname = '127.0.0.1'// сервер буде працювати на локальному комп'ютері
const port = 3000;//сервер буде лслухати http- запити на порту 3000

const server = http.createServer((req, res) => {//створюємо запит  і (req, res)- колбек функція,
    //яка викликається кожного разу коли отримує http-запит

    res.statusCode = 200;//статус відповіді 
    res.setHeader('Content-Type', 'text/plain');//content-type повідомляє веб-браузеру, що відповідь містить текст
    res.end("Hello, Node.js");

});

server.listen(port, hostname, () => {//запуск сервера, щоб він слухав підключення на hostname:port
    console.log(`The server is running on http://${hostname}:${port}/`);// виведе після запуску The server is running on http://127.0.0.1:3000/

});