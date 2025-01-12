import { getSingleBlog } from "@/api-functions/blogs";
import { BlogType } from "@/types/globals";
import Image from "next/image";
import React from "react";

const Page = async ({ params }: { params: Promise<any> }) => {
  const paramList = await params;

  console.log(paramList.id);

  const res = await getSingleBlog(paramList.id);
  const blog = res.data as BlogType;

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white shadow-lg rounded-lg">
      {/* Blog Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="md:w-1/3">
          <Image
            src={blog.image}
            alt={blog.title}
            width={400}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </div>

        {/* Blog Content Section */}
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {blog.title}
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            Created on: {new Date(blog.created_at).toLocaleDateString()}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {blog.description}
          </p>
          <a
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm"
          >
            Read more...
          </a>
        </div>
      </div>

      {/* Author Section */}
      <div className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          About the Author
        </h2>
        <div className="flex items-center gap-4">
          {/* Replace this with a real profile image if available */}
          <Image
            src="/user-circle.svg" // Replace with your author's image
            alt={blog.created_by.name}
            width={60}
            height={60}
            className="rounded-full shadow-md"
          />
          <div>
            <p className="text-lg font-medium text-gray-800">
              {blog.created_by.name}
            </p>
            <p className="text-gray-600">{blog.created_by.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
