"use client";

import { BlogActions, BlogsState } from "@/types/blog-context";
import React, { createContext, useReducer, useEffect } from "react";
import { blogReducer, initialState } from "./reducer";

interface BlogContextType {
  state: BlogsState;
  dispatch: React.Dispatch<BlogActions>;
}

export const BlogsContext = createContext<BlogContextType | undefined>(
  undefined
);

export const BlogsProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  return (
    <BlogsContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogsContext.Provider>
  );
};
