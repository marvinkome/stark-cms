import { authenticated } from '@libs/auth';
import Category from '@models/categories';

export const typeDef = `
    addCategory(name: String!, slug: String!, isDefault: Boolean): Category
    updateCategory(id: ID!, name: String, slug: String, isDefault: Boolean): Category
    deleteCategory(id: ID!): Boolean
`;

export const resolvers = {
    addCategory: authenticated(async function(_: any, data: any) {
        const category = new Category(data);
        return await category.save();
    }),

    updateCategory: authenticated(async function(_: any, data: any) {
        const { id, ...updateData } = data;
        const category = await Category.findByIdAndUpdate(id, updateData, {
            new: true
        });

        return category;
    }),

    deleteCategory: authenticated(async function(_: any, data: any) {
        const category = await Category.findById(data.id);

        if (!category) {
            throw Error('Category not found');
        }

        if (category.isDefault) {
            throw Error('Cannot remove default category');
        }

        // TODO:: move all posts to default category
        try {
            await category.remove();
            return true;
        } catch (e) {
            return false;
        }
    })
};
