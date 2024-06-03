import { DataTypes } from 'sequelize';
import sequelize from '../../db/config.js';

const StudentModel = sequelize.define(
  'Student',
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        //letters from A to Z only 
        isAlpha: true,
     
    }
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
      validate: {
        //letters from A to Z only 
        isAlpha: true,
      
    }
    },
    subject : {
        type: DataTypes.STRING,
       /* validate: {
            //letters from A to Z only 
            // args: '/^[A-Za-z\s]+$/',
            // isAlpha: true,
            
        }*/
    },
    Age: {
        type :DataTypes.STRING,
        validate: {
            isNumeric: true,  
          
        }
    }
  },
  {
    // Other model options go here
    timestamps : false
  },
);

// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // true
export default StudentModel;
