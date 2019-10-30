const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const router = express.Router();

router.get('/test', (req, res)=> {
    return res.send(
        {
            "id": "1234",
            "name": "my computer"
        }
    )
})

router.get('/param/{id}', (req, res) => {

    return res.send ({
        "param": req.params.id
    })
})

module.exports = router;