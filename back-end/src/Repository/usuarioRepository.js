import con from "./connection.js";

export async function inserirUsuario(usuario) {
    const comando = `
    insert into tb_usuario (nm_usuario)
            values(?)
    `
    let resposta = await con.query(comando, [usuario.nome])
    let info = resposta[0];

    return info.insertID;
}

export async function consultarUsuario() {
    const comando = `
    select id_usuario      id,
    nm_usuario             nome
    from tb_usuario
    `;
    
    let resposta = await con.query(comando);
    let registros = resposta[0]

    return registros;
}

export async function alterarUsuario (id, usuario) {
    const comando = `
    uptade tb_usuario
        set nm_usuario = ?,
    where id_usuario = ?;        
`

let resposta = await con.query(comando, [usuario, id])
let info = resposta[0];

return info.affectedRows;
}

export async function removerUsuario(id){
    const comando = `
    delete from tb_usuario
    where id_usuario = ?
`

let resposta = await con.query(comando, [id]);
let info = resposta[0];

return info.affectedRows;

}