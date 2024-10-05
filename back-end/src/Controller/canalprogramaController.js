import * as db from '../Repository/canalprogramaRepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/canalP', async (req,resp) => {
    try {
        let registros = await db.consultarPrograma()
        resp.send(registros)
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/canalP/' , async (req,resp) => {
    try {
        let canal = req.body;

        let id = await db.inserirPrograma(canal);

        resp.send({
            novoId: id
        })

    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })      
    }
})

endpoints.put('/canalP/:id' , async (req,resp) =>{
    try {
        let id = req.params.id;
        let canal = req.body;

        let linhasAfetadas = await db.alterarPrograma(canal, id)

        if(linhasAfetadas >=1 ){
            resp.send()
        } 
        else {
            resp.status(404).send({
                erro: 'nenhum registro encontrado!'
            })
        }
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.massage
        })
    }
})

endpoints.delete('/canalP/:id', async (req,resp) => {
    try {
        let id = req.params.id;
        let linhasAfetadas = await db.removerPrograma(id);

        if(linhasAfetadas >= 1 ){
            resp.send()
        } 
        else {
            resp.status(404).send({
                erro: 'nenhum registro encontrado!'
            })
        }

    } 
    catch (err) {
        resp.status(400).send({
            erro: err.massage
        })        
    }
})


export default endpoints;