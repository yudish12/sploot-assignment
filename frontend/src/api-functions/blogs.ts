import { ApiResponse } from "@/types/globals";

export const getCategories = async (): Promise<ApiResponse> => {
  const resp = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "blogs/categories",
    {
      next: { revalidate: 60 * 60 },
    }
  );
  const response = await resp.json();
  return response;
};

export const getBlogs = async (categoryid: string): Promise<ApiResponse> => {
  const resp = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `blogs/fetch?categoryid=${categoryid}`,
    {
      next: { revalidate: 60 * 60 },
    }
  );
  const response = await resp.json();
  return response;
};

export const getSingleBlog = async (id: string): Promise<ApiResponse> => {
  const resp = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `blogs/fetch/${id}`,
    {
      next: { revalidate: 60 * 60 },
    }
  );
  const response = await resp.json();

  return response;
};

export const addBlog = async (
  title: string,
  description: string,
  link: string,
  category: string,
  image: File | null,
  token?: string
): Promise<ApiResponse> => {
  const formdata = new FormData();
  formdata.append("title", title);
  formdata.append("description", description);
  formdata.append("link", link);
  formdata.append("category", category);
  formdata.append("image", image ?? "");

  const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + `blogs/add`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formdata,
  });

  const response = await resp.json();
  return response;
};
