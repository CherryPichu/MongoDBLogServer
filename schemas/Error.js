const mongoose = require('mongoose')
const { Schema } = mongoose;


const { Types: { ObjectId } } = Schema;
const ErrorSchema = new Schema({
    serverName: {
        type: ObjectId,
        required: true,
        ref: "Room",
    },
    port: {
        type: String,
        required: true,
    },
    url : {
        type: String,
        required: true,
    },
    serviceName : {
        type: String,
        required: false,
    },
    detail : {
        type: String,
        required: false,
    },
    summary : {
        type: String,
        required: true,
    },
    content : {
        type: String,
        required: true,
    },
    code : {
        type: int,
        required: true,
    }
})

//https://medium.com/@iamlittlerock/auto-generated-createdat-and-updatedat-fields-in-mongodb-86bb5980be2
// createAt과 updateAt 만들기
ErrorSchema.set('timestemps' ,true) // 자동으로 createAt과 updateAt 필드 생성


/**
 * @swagger
 *    $ref : "#/componets/schemas/Error"
 *   
 */  


module.exports = mongoose.model('Error', ErrorSchema)