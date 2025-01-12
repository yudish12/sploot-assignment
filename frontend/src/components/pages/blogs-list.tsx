import { useBlogs } from "@/context/blogContext/hooks";
import { Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const BlogsList = () => {
  const { blogs } = useBlogs();
  const router = useRouter();

  if (!blogs.length)
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
            <Search className="h-8 w-8 text-gray-400" />
          </div>
          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-800">
              No Blogs Found
            </p>
            <p className="text-sm text-muted-foreground">
              Change category to view blogs
            </p>
          </div>
        </div>
      </div>
    );

  return (
    <div className="grid grid-cols-1 mt-4 gap-x-4 gap-y-8 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {blogs.map((blog, index) => (
        <div
          onClick={() => router.push(`/blogs/${blog._id}`)}
          key={index}
          className="sm:w-full cursor-pointer w-max mx-auto rounded-xl"
        >
          <Image
            src={blog.image ?? "/test-blog.avif"}
            alt="test-blog"
            className="min-h-[270px] rounded-xl"
            width={320}
            height={290}
          />
          <article className="flex flex-col gap-2 mt-2 justify-start">
            <p className="text-base font-semibold">{blog.title}</p>
            <p className="text-sm text-ellipsis overflow-hidden whitespace-nowrap text-gray-500">
              {blog.description}
            </p>
            <div className="flex gap-2 items-center">
              <span className="text-sm text-gray-500 font-semibold">
                Created By:
              </span>
              <span className="text-sm text-gray-500">
                {blog.created_by.email}
              </span>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default BlogsList;
