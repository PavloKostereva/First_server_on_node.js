const express = require('express');  
const app = express();

// Оголошення маршруту  
app.get('/', (req, res) => {  
 res.send('Hello, World!');  
});

// Запуск сервера  
const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {  
 console.log(`Server is running on http://localhost:${PORT}`);  
});