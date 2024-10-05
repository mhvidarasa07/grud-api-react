import canalController from './Controller/canalController.js'
import canalprogramaController from './Controller/canalprogramaController.js'
import usuarioController from './Controller/usuarioController.js'
import favoritoController from './Controller/favoritoController.js'

export default function adicionarRotas(servidor){
    servidor.use(canalController)
    servidor.use(canalprogramaController)
    servidor.use(usuarioController)
    servidor.use(favoritoController)
}