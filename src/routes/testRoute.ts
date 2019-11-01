
import express = require('express');

const router = express.Router();

router.get('/', (req, res)=> {
    return res.send(
        {
            "id": "1234",
            "name": "my computer"
        }
    )
})

router.get('/param/:id', (req, res) => {

    return res.send ({
        "param": req.params.id
    })
})

export default router