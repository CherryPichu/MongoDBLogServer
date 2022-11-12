const express = require("express")
const router = express.Router()


/**
 * @swagger 
 *  /request :
 *      get :
 *          tags :
 *          - CURD MODEL
 *          description : 제품 조회
 *          produces :
 *          - application/json
 *          parameters :
 *              - in : qurey
 *                name : category
 *                required : true
 *                schema :
 *                  type : integer
 *                  description : 카테고리
 *          responses :
 *              200 :
 *                  description : 조회 성공
 *          
 */
router.get("/", (req, res, next) => {
    res.send("성공")
})

router.post("/", (req, res, next) =>{


})


module.exports =router
