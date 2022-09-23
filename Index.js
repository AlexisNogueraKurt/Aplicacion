const express = require('express')
const path = require('path')

//crea la aplicacion 
const Index = express()

//lee el body en formato json
Index.use(express.json())

//define un puerto en que va a escuchar pedidos
const port = 3000

Index.get('/', (req, res) => {
    res.render('Index')
})

Index.set('views','./views')
Index.set('view engine','ejs')
Index.use('/public', express.static(path.join(__dirname,'public')))
Index.listen(port)