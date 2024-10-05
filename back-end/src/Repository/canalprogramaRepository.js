import con from "./connection.js";

export async function inserirPrograma(programa) {
    const comando = `
    insert into tb_canal_programa (id_canal,nm_programa, ds_genero, hr_programa)
            values(?, ?, ?, ?)
    `
    let resposta = await con.query(comando, [programa.id,programa.nome,programa.genero,programa.hora])
    let info = resposta[0];

    return info.insertID;
}


export async function consultarPrograma() {
    const comando = `
    select id_canal_programa      id,
    id_canal                      idc,
    nm_programa                   nome,
    ds_genero                     genero,
    hr_programa                   hora
    from tb_canal_programa 
    `;
    
    let resposta = await con.query(comando);
    let registros = resposta[0]

    return registros;
}

    export async function alterarPrograma (canal, id) {
        const comando = `
        update tb_canal_programa
            set id_canal = ?,
            nm_programa = ?,
            ds_genero = ?,
            hr_programa = ?
        where id_canal_programa = ?;        
    `

    let resposta = await con.query(comando, [canal.nome, canal.genero, canal.hora, id])
    let info = resposta[0];

    return info.affectedRows;
    }

export async function removerPrograma(id){
    const comando = `
    delete from tb_canal_programa
    where id_canal_programa = ?
`

let resposta = await con.query(comando, [id]);
let info = resposta[0];

return info.affectedRows;

}