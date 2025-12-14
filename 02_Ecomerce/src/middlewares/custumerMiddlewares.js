
const userservice = require('../services/userService');
 const {ClientErrorsCodes} = require('../utlis/Errors/https_codes')
 

 class CustumerMiddlwares {
    async  verifyToken  (req, res, next)  {

      
        const token = req?.headers['x-access-token'];

        // console.log('token => ', token)  
        if (!token ) {
            
            return res.status(ClientErrorsCodes.BAD_REQUEST).json({
            data: {},
            message: "token is missing   ",
            success: false,
            });
        }

        
        try {
            const response = await userservice.verifyToken(token)
            if(!response) throw new error
            next();
            
            
            } catch (error) {
            return res.status(ClientErrorsCodes.UNAUTHORISED).json({
                data: {},
                message: "Invalid acess token or Token expired",
                success: false,
            });
            }
    };

 }

    

   

const custumerMiddlewares = new CustumerMiddlwares();


module.exports = custumerMiddlewares ; 
