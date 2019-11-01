import express = require('express')

import testRoute from './testRoute'
import myRoute from './myRoute'

const router = express.Router();

router.use('/test', testRoute)
router.use('/mysss', myRoute)

export default router;