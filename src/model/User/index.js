import { DataTypes } from 'sequelize';
import sequelize from '../../db/config.js';

const UserModel = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        len : [0,30]
      }
    },
    email: {
      type: DataTypes.STRING,
      // allowNull defaults to true
      
    },
    password : {
        type : DataTypes.STRING,
       
    }
  },
  {
    // Other model options go here
    timestamps : false
  },
);

// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // true

export default UserModel;