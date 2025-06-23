import express from "express";
import path from "path"
import { fileURLToPath } from "url"
const port = process.env.PORT || 3000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
// Путь до директории сборки
app.use(express.static(path.join(__dirname, 'dist')))

// Раздаём статику


// Для всех остальных маршрутов — index.html (SPA маршруты)
app.get('/{*any}', (req,res)=>{
res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})

app.listen(port, () => {
  console.log(`Frontend is running at http://localhost:${port}`);
});
