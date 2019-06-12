import { Schema, Document, model } from 'mongoose';

export interface IPost extends Document {
    title: string;
    content: string;
}

const postSchema: Schema<IPost> = new Schema({
    title: {
        type: String,
        minlength: 3,
        required: true
    },
    content: {
        type: String,
        minlength: 3
    }
});

export default model<IPost>('Post', postSchema);
