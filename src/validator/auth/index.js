import Joi from "joi";

const AuthValidator = 
    {
      LogIn : (req,res,next)=> {
        //scehma building
        const schema = Joi.object({
            email : Joi.string().email().required(),
            password : Joi.string().required()
        }); 
        
        //schema validation
        const {value, error} = schema.validate(req.body);
        if(error){
            return res.status(400).json({
                message: "Invalid Data",
                error,
            })
        }
       // next();
      },
    
      SignUp : (req,res,next) => {
       //schema building 
       const schema = Joi.object({
        userName : Joi.string()
        .alphanum()
        .min(0)
        .max(25)
        .required(),

        password : Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .min(4)
        .max(16)
        .required(),

        email :  Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    
       })


       const {value, error} = schema.validate(req.body,{
        email: 'user@example.com',
       });
       if(error)
        return res.status(400).json({
            message: "Invalid Data",
            error,
        })
      }
    }

    
export default AuthValidator;