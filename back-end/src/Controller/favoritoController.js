import * as db from '../Repository/favoritoRepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/favorito', async (req,resp) => {
    try {
        let registros = await db.consultarFavorito()
        resp.send(registros)
    } catch (err) {
        resp.status (400).send({
            erro: err.menssage
        })
    }
})

endpoints.post('/favorito', async (req,resp) => {
    try {
        let favorito = req.body
        let id = await db.inserirFavorito(favorito)

        resp.send({
            novoId : id
        })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/favorito/:id' , async (req,body) => {
    try {
        let id = req.params.id;
        let registros = req.body;
        let linhasAfetadas = await db.alterarFavorito(id, registros)

        if(linhasAfetadas >=1 ) {
            resp.send()
        }
        else{
            resp.status(404).send({
                erro:'nenhum registro encontrado!'
            })
        }

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/favorito/:id', async (req,resp) => {
    try {
        let id = req.params.id
        let linhasAfetadas = await db.removerFavorito(id)

        if(linhasAfetadas >= 1){
            resp.send()
        }
        else{
            resp.status(404).send({
                erro: 'nenhum registro encontrado!'
            })
        }
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;