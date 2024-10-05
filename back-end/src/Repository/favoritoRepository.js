import con from "./connection.js";

export async function inserirFavorito(favorito){
    const comando = `
    insert into tb_programa_favorito (id_usuario, id_canal_programa, vl_avaliacao)
            values(?,?,?)
    `
    let resposta = await con.query(comando, [favorito.usuario, favorito.canal,favorito.avaliacao])
    let info = resposta[0]; 

    return info.insertId;
}


export async function consultarFavorito(){
    const comando = `
    select id_programa_favorito      id,
    id_usuario                      usuario,
    id_canal_programa               canal,
    vl_avaliacao                    avaliacao
    from tb_programa_favorito
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0]

    return registros;

}

export async function alterarFavorito (id, favorito){
    const comando = `
    uptade tb_programa_favorito
        set id_usuario = ?,
        id_canal_programa = ?,
        vl_avaliacao = ?,
        where id_programa_favorito = ?;
    `

    let resposta = await con.query(comando,[id_usuario,id_canal_programa,vl_avaliacao])
    let info = resposta[0];
    
    return info.affectedRows;

    }

    export async function removerFavorito(id){
        const comando = `
        delete from tb_programa_favorito
        where id_programa_favorito = ?
        `

        let resposta = await con.query(comando, [id]);
        let info = resposta[0];

        return info.affectedRows;
        
    }
