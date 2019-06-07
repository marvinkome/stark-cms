import passport from 'passport';
import { Strategy } from 'passport-local';
import { Document } from 'mongoose';
import { Request } from 'express';
import jwt from 'express-jwt';
import User from '../models/users';

export function setup_auth() {
    passport.use(
        new Strategy(
            {
                usernameField: 'identifier'
            },
            async (identifier, password, done) => {
                // check if it's an email or username
                const isEmail = /\S+@\S+\.\S+/.test(identifier);
                let user: Document | null = null;

                if (isEmail) {
                    user = await User.findOne({ email: identifier });
                } else {
                    user = await User.findOne({ username: identifier });
                }

                // @ts-ignore
                if (!user || !(await user.verify_password(password))) {
                    return done(null, false, {
                        message: 'email or password is invalid'
                    });
                }

                return done(null, user);
            }
        )
    );
}

function getTokenFromHeaders(req: Request) {
    const auth = req.headers.authorization;

    if (auth && auth.split(' ')[0] === 'Bearer') {
        return auth.split(' ')[1];
    }

    return null;
}

export default {
    required: jwt({
        secret: process.env.SECRET_KEY || '',
        userProperty: 'payload',
        getToken: getTokenFromHeaders
    }),
    optional: jwt({
        secret: 'secret',
        userProperty: 'payload',
        getToken: getTokenFromHeaders,
        credentialsRequired: false
    })
};
