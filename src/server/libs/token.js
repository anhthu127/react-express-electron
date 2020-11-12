// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken'
import secretJWT from '../config/setting.js';
export const generateToken = async(data, secretKey = secretJWT.secretJWT, expiresIn = '30d') => {
    return jwt.sign(data, secretKey, { expiresIn });
}

export const generateTokenReset = async(data, secretKey = secretJWT.secretJWT, expiresIn = '7h') => {
    return jwt.sign(data, secretKey, { expiresIn });
}

export const checkToken = async(token, secretKey = secretJWT.secretJWT) => {
    return jwt.verify(token, secretKey);
}