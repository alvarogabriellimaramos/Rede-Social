const app = require('./src/app/index');

const PORT = process.env.PORT || 8081;

app.listen(PORT,() => console.log(`Server Running ${PORT}`));