export const addBlogValidator = async (
  title: string,
  description: string,
  link: string,
  category: string
) => {
  if (!title)
    return { valid: false, code: "TITLE_MISSING", status: 400, field: "title" };
  if (!description)
    return {
      valid: false,
      code: "DESCRIPTION_MISSING",
      status: 400,
      field: "description",
    };
  if (!link)
    return { valid: false, code: "LINK_MISSING", status: 400, field: "link" };
  if (!category)
    return {
      valid: false,
      code: "CATEGORY_ID_MISSING",
      status: 400,
      field: "category",
    };

  const linkRegex = /^https?:\/\/.+\..+/;

  if (!linkRegex.test(link))
    return {
      valid: false,
      code: "LINK_INVALID",
      status: 400,
      field: "link",
    };

  return { valid: true, code: "SUCCESS", status: 200 };
};
