require('dotenv').config(); // Assurez-vous que dotenv est configuré avant toute utilisation de process.env
const http = require('http');
const app = require('./App');
const port = 3001;

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

console.log('EMAIL_FROM:', process.env.EMAIL_FROM);
console.log('APP_PASSWORD:', process.env.APP_PASSWORD);
