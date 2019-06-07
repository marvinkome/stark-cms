import { Schema, model } from 'mongoose';
import { hash, compare } from 'bcrypt';

export const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        minlength: 3,
        required: true
    },
    email: {
        type: String,
        unique: true,
        minlength: 3,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }

    // @ts-ignore
    const passwordHash = await hash(this.password, 10);

    // @ts-ignore
    this.password = passwordHash;
    next();
});

userSchema.methods.verify_password = function(password: string) {
    return compare(password, this.password);
};

export default model('User', userSchema);
