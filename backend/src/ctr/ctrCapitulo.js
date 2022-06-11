const Capitulo = require('../model/Capitulo')

const create = async(req, res) => {
    const data = req.body;

    let ret = [];

    try{
        console.log(data);

        ret = await Capitulo.create(data);
        
        res.json(ret)
    }catch(err){
        // if(err.parent.code == 'ER_DUP_ENTRY'){
        //     ret = {
        //         msg: 'Email já cadastrado'
        //     }
        //     res.status(400);
        // }
        console.log(err);
        res.json(err).status(400);
    }
}

const read = async(req, res) => {
    const id = req.params.id;
    const id_livro = req.params.id_livro;


    let filtro = {};

    if(id != undefined) filtro = { where: { capitulo:id, id_livro:id_livro } }
    const ret = await Capitulo.findAll(filtro);

    res.json(ret);

}

const readCapitulo = async(req, res) => {
    const id = req.params.id

    let filtro = {};

    if(id != undefined) filtro = { where: { id_livro:id } }
    const ret = await Capitulo.findAll(filtro);

    res.json(ret);

}

const update = async(req, res) => {
    const id = req.params.id;

    const data = req.body;

    let ret = await Capitulo.update(data, {
        where : { id:id }
    })

    ret = await Capitulo.findAll({
        attributes: {
            exclude: ['senha']
        },
        where : { id:id }
    })


    res.json(ret);
}

const del = async(req, res) => {
    const id = req.params.id;

    const ret = await Capitulo.destroy({
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
    readCapitulo,
    update,
    del,

}
