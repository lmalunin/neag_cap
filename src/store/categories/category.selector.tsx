export const selectCategoriesMap = (state: any) => state?.categories.categories
    .reduce((acc: any, category) => {
        const { title, items } = category;
        if (title) {
            acc[title?.toLowerCase()] = items;
        }
        return acc;
    }, {});

