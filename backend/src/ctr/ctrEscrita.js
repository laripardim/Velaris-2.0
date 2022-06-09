const Escrita = require('../model/Escrita')

const create = async(req, res) => {
    const data = req.body;

    let ret = [];

    try{
        console.log(data);

        ret = await Escrita.create(data);
        
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

    let filtro = {};

    if(id != undefined) filtro = { where: { id:id } }
    const ret = await Escrita.findAll(filtro);

    res.json(ret);

}

const update = async(req, res) => {
    const id = req.params.id;

    const data = req.body;

    let ret = await Escrita.update(data, {
        where : { id:id }
    })

    ret = await Escrita.findAll({
        attributes: {
            exclude: ['senha']
        },
        where : { id:id }
    })


    res.json(ret);
}

const del = async(req, res) => {
    const id = req.params.id;

    const ret = await Escrita.destroy({
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