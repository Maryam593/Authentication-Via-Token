import StudentModel from "../../model/student/index.js"

const studentController = {

    getAll : async (req,res)=> {
        try {
            const FindAll = await StudentModel.findAll();
            res.status(200).json({message: "FindAll", data: FindAll})
        } catch (error) {
            res.status(500).json({message: "Internal server error"})
        }
        
    },
    getOne: async (req,res) => {
        try {
            //destructring 
            const {id} = req.params;
            const findOne = await StudentModel.findByPk(id);
            if(!findOne){
                return res.status(404).json({message : "NotFound"});
            }
            res.status(200).json({message : "Find One", data: findOne})
        } catch (error) {
            res.status(500).json({message: "Internal server error"})  
        }
    },
    Create : async (req,res)=> {
        try {
            const payload = req.body; 
            const createData = new StudentModel();
            createData.firstName = payload.firstName;
            createData.lastName = payload.lastName;
            createData.subject = payload.subject;
            createData.Age = payload.Age;
            await createData.save();
            if(!payload){
                return res.status(404).json({message : "NotFound"});
            }
            res.status(200).json({message : "Created Data", data : createData})
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Internal server error"})  
        }
    },
    Update : async (req,res) => {
       try {
        const payload = req.body;
        const id = req.params.id;
        const updateData = await StudentModel.findByPk(id);
        if(updateData == -1){
            return res.status(404).json({message:"Not Found"})
        }
        //for first name
        if(payload.firstName){
            updateData.firstName = payload.firstName;
        }
        //for last name 
        if(payload.lastName){
            updateData.lastName = payload.lastName;
        }
        //for subject
        if(payload.subject){
            updateData.subject = payload.subject
        }
        //for age 
        if(payload.age){
            updateData.age = payload.age
        }
        res.status(200).json({message : "Updated", data: findAll});

    }
       catch (error) {
        res.status(500).json({message:"Internal server error"})
       }
    
},
Delete : async (req,res)=> {
  try {
    const payload = req.body;
    const id = req.params.id;
    const deleteData = await StudentModel.destroy({
        where: {
            id: id
        }
    })
    if(!deleteData == -1) {
        return res.status(404).json({message:
            "Not found"
        })
    }
  } catch (error) {
    res.status(500).json({message:"Internal server error"})
  }
}
}

export default studentController;