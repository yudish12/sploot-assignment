import Categories from "../../models/categories";

export const categoryValidator = async (categoryid?: string) => {
  if (!categoryid) {
    return {
      valid: false,
      code: "CATEGORY_ID_MISSING",
      status: 400,
      field: "toast",
    };
  }

  const category = await Categories.findOne({ _id: categoryid });

  if (!category) {
    return {
      valid: false,
      code: "CATEGORY_NOT_FOUND",
      status: 400,
      field: "toast",
    };
  }

  return { valid: true, code: "SUCCESS", status: 200 };
};
