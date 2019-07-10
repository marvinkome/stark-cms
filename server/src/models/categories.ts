import { Schema, model, Document } from 'mongoose';

export interface ICategories extends Document {
    name: string;
    slug: string;
    isDefault?: boolean;
}

const categoriesSchema = new Schema({
    name: {
        type: String,
        minlength: 3,
        required: true
    },
    slug: {
        type: String,
        minlength: 3,
        required: true
    },
    isDefault: {
        type: Boolean,
        default: false
    }
});

export default model<ICategories>('Category', categoriesSchema);
