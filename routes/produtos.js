const express = require('express');
const router = express();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando  o GET dentro da rota de produtos'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando POST dentro da rota de produtos'
    });
})

// retornando 1 produto por id, ":" na URL serve para dizer que é uma variavel(como parametro)
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;

    if (id === 'especial') {

        res.status(200).send({
            mensagem: 'Voce descobriu o id especial',
            id: id
        });
    }

    res.status(200).send({
        mensagem: 'Usando  o GET dentro da rota de produtos'
    });
});

module.exports = router;
