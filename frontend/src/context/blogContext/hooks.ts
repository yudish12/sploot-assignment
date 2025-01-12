import { useContext } from "react";
import { BlogsContext } from ".";

export const useBlogs = () => {
  const context = useContext(BlogsContext);

  if (!context) {
    throw new Error("useBlog must be used within an BlogProvider");
  }

  return context.state;
};

export const useBlogDispatch = () => {
  const context = useContext(BlogsContext);

  if (!context) {
    throw new Error("useBlogDispatch must be used within an BlogProvider");
  }

  return context.dispatch;
};
