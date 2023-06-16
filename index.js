import express from "express";
import cors from "cors";
import { pool } from "./db.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get('/proyecto', async (req, res) => {
    const [resultado] = await pool.query('SELECT * FROM proyecto');
    res.send(resultado);
});

//para obtener un valor en la base de datos
app.get('/proyecto/:id_proyecto', async (req, res) => {
    const [resultado] = await pool.query('SELECT * FROM proyecto WHERE id_proyecto = ?', [req.params.id_proyecto]);
    res.send(resultado);
});

//para modificar un valor en la base de datos
app.post('/proyecto', async (req, res) => {
    const {id_proyecto, nombre} = req.body;
    const [resultado] = await pool.query('INSERT INTO proyecto (id_proyecto, nombre) VALUES (?, ?)', [id_proyecto, nombre]);
    res.send(resultado);
});

//para eliminar un valor en la base de datos
app.delete('/proyecto/:id_proyecto', async (req, res) => {
    const [resultado] = await pool.query('DELETE FROM proyecto WHERE id_proyecto = ?', [req.params.id_proyecto]);
    res.sendStatus(204);
});

app.put('/proyecto/:id_proyecto', async (req, res) => {
    const {nombre} = req.body;
    const [resultado] = await pool.query('UPDATE proyecto SET nombre = ? WHERE id_proyecto = ?', [nombre, req.params.id_proyecto]);
    
    pool.query('SELECT * FROM proyecto WHERE id_proyecto = ?', [req.params.id_proyecto])

    res.json('actualizado');

});






app.listen(3000);
console.log("Server on port", 3000);

