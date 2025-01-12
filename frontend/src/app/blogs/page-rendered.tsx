"use client";

import BlogsList from "@/components/pages/blogs-list";
import Categories from "@/components/pages/categories";
import { useBlogDispatch } from "@/context/blogContext/hooks";
import { BlogType, CategoryType } from "@/types/globals";
import React, { useEffect } from "react";

const BlogsPage = ({
  categories,
  currentCategory,
  blogs,
}: {
  categories: CategoryType[];
  currentCategory: string;
  blogs: BlogType[];
}) => {
  const dispatch = useBlogDispatch();
  console.log(currentCategory, blogs);

  useEffect(() => {
    dispatch({
      type: "SET_CATEGORIES",
      payload: { categories },
    });
    dispatch({
      type: "SET_CURRENT_CATEGORY",
      payload: { category: currentCategory },
    });
    dispatch({
      type: "SET_BLOGS",
      payload: { blogs },
    });
  }, []);

  return (
    <div>
      <Categories />
      <BlogsList />
    </div>
  );
};

export default BlogsPage;
