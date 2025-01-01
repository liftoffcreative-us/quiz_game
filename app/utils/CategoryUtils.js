import { CATEGORY_COLORS } from '../constants';

export const assignCategoryColors = (categories) => {
  console.log(categories);
  categories.forEach((category, index) => {
    const catColor = CATEGORY_COLORS[index % CATEGORY_COLORS.length];
    category.color = catColor.colorHex;
  });
  return categories;
};
