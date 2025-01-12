import { getBlogs, getCategories } from "@/api-functions/blogs";
import { BlogType, CategoryType } from "@/types/globals";
import React from "react";
import BlogsPage from "./page-rendered";

export const revalidate = 3600;

export const dynamicParams = true;

export async function generateStaticParams() {
  const blogsResp = await getBlogs("");

  const blogs: BlogType[] = blogsResp.data as BlogType[];

  return blogs.map((blog) => ({
    id: blog._id,
  }));
}

const Page = async ({
  params,
  searchParams,
}: {
  params: Promise<any>;
  searchParams: Promise<any>;
}) => {
  const res = await getCategories();
  const categories = res.data as CategoryType[];

  const currentCategory =
    (await searchParams)?.categoryId ?? categories[0]?._id;

  const blogsResp = await getBlogs(currentCategory);
  const blogs = blogsResp.data as BlogType[];

  return (
    <div className="border-t border-gray-200">
      <BlogsPage
        categories={categories}
        blogs={blogs}
        currentCategory={currentCategory}
      />
    </div>
  );
};

export default Page;
