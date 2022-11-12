const express = require('express')
const app = express();
const dotenv = require('dotenv')
dotenv.config();
const bodyParser = require("body-parser")

/**
 * Swagger 설정
 */
const { swaggerUi, specs } = require('./modules/swagger');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


const session = require('express-session')
app.use(session({
    resave : false,
    saveUninitialized : false,
    secret : process.env.COOKIE_SECRET,
    cookie : {
        httpOnly : true,
        secure : false,
    },
}))

// const pageRouter = require('./routers/api.js')

const requestRouter= require("./routes/request")
app.set('port', 8083)
app.use("/request", requestRouter)
// app.use('/api', pageRouter)



app.listen(app.get('port'), () => {
    console.log(app.get('port') , "번 포트에서 안드로이드서 서버 시작.")
})



