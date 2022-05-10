const Perfil = require('../model/Perfil')
const Atendente = require('../model/Atendente')
const Livro = require('../model/Livro')
const Usuario = require('../model/Usuario')

const create = async(req, res) => {
    const data = req.body;

    let ret = [];

    try{
        ret = await Perfil.create(data);

        delete ret.dataValues.senha;
    }catch(err){
        console.log(err)
        if(err.parent.code == 'ER_DUP_ENTRY'){
            ret = {
                msg: 'Email já cadastrado'
            }
            res.status(400);
        }
    }
    res.json(ret)
    
}

const read = async(req, res) => {
    let filtro = {}
    const id = req.params.id;

    let id_usuario = req.query.id_usuario;
    console.log( req.query.id_usuario)
    if(id != undefined) {
        filtro = {where : { id:id }}
        filtro.include = [
            { model: Usuario, attributes: {exclude: [ 'senha' ] } },
            { model: Atendente, attributes: {exclude: [ 'senha' ] } },
            { model: Livro }
        ];
    }else{
        filtro.include = [
            { model: Usuario, attributes: {exclude: [ 'nome', 'senha', 'foto', 'id_seguidores' ] } },
            { model: Atendente, attributes: {exclude: [ 'nome_atendente', 'senha', 'id_usuario' ] } },
            { model: Livro, attributes: {exclude: [ 'nome_livro', 'capa', 'capitulo', "escrita", "id_leitura" ] } }
        ];
    }

    filtro.attributes = {
        exclude: ['id_usuario', "id_atendente", "id_livro"]
    }


    
    if(id_usuario !== undefined){
        filtro.include[0].where = {id: id_usuario}
    }

    const ret =  await Perfil.findAll(filtro);
    res.json(ret);
    // console.log(res.Usuario)

}

const update = async(req, res) => {
    const id = req.params.id;

    const data = req.body;

    let ret = await Perfil.update(data, {
        where : { id:id }
    })

    ret = await Perfil.findAll({
        attributes: {
            exclude: ['senha']
        },
        where : { id:id }
    })


    res.json(ret);
}

const del = async(req, res) => {
    const id = req.params.id;

    const ret = await Perfil.destroy({
        where : { id:id }
    })

    if(ret == 1){
        res.json('Id '+id+' removido com sucesso')
    }else{
        res.status(400)
    }

}

module.exports = {
    create,
    read,
    update,
    del,

}