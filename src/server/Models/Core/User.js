import BaseModel from './BaseModel'
import sequelize from '../../config/config'
const { DataTypes, Sequelize, UUIDV4 } = require('sequelize')
export default class User extends BaseModel {
    static association() {

    }
}
const attributes = {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4

    },
    lastname: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    ava: {
        type: DataTypes.STRING(80),
        allowNull: true
    },

    location: {
        type: DataTypes.STRING(225),
        allowNull: true
    },
    location_code: {
        type: DataTypes.CHAR(10),
        allowNull: true
    },
    // create_at: {
    //     type: DataTypes.DATE,
    //     allowNull: false
    // },
    // update_at: {
    //     type: DataTypes.DATE,
    //     allowNull: false
    // },
    last_login: {
        type: DataTypes.DATE,
        allowNull: true
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
}

function beforeCreate() {
    User.beforeCreate((obj, _) => {
        return obj.id = UUIDV4();
    })
}

const options = {
    tableName: 'users',
    beforeCreate: beforeCreate
}

User.init(attributes, { ...options, sequelize });