
import express = require('express');

const router = express.Router();

router.get('/', (req, res)=> {
    return res.send(
        {
            "id": "my-1234",
            "name": "my my my my"
        }
    )
})

router.get('/myid/:id', (req, res) => {

    return res.send ({
        "param": "my id: " + req.params.id
    })
})

export default router