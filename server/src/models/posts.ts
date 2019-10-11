import { Schema, Document, model } from 'mongoose';

export interface IPost extends Document {
    title: string;
    content: string;
    status: 'published' | 'draft';
    user: any;
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
    },
    status: {
        type: String,
        required: true,
        enum: ['published', 'draft']
    },

    // relationship
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

export default model<IPost>('Post', postSchema);
