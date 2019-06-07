import { Document } from 'mongoose';

export interface userSchema extends Document {
    email: String;
    username: String;
}
