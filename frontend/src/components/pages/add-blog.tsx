"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { addBlogValidator } from "@/utils/validators";
import { toast } from "sonner";
import { useBlogs } from "@/context/blogContext/hooks";
import { Loader } from "lucide-react";
import { addBlog } from "@/api-functions/blogs";
import { useAuth } from "@/context/authContext/hooks";
import { useRouter } from "next/navigation";

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    category: "",
    image: null as File | null,
  });

  const [errors] = useState({
    title: "",
    description: "",
    link: "",
    category: "",
  });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const { categories } = useBlogs();
  const categoryOptions = categories.map((category) => ({
    value: category._id,
    label: category.name,
  }));

  const { token } = useAuth();

  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const validate = addBlogValidator(
      formData.title,
      formData.description,
      formData.link,
      formData.category
    );

    if (!validate.valid) {
      toast.error(validate.message);
      return;
    }

    try {
      if (!token) {
        toast.error("Please login to create a blog");
        router.push("/");
      }

      const resp = await addBlog(
        formData.title,
        formData.description,
        formData.link,
        formData.category,
        formData.image,
        token ?? ""
      );
      console.log(resp);
      if (resp.success) {
        toast.success("Blog created successfully");
        setOpen(false);
        return;
      }

      toast.error(resp.message);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    } finally {
      setLoading(false);
    }

    console.log("Form submitted:", formData);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-full" variant="outline">
          <span className="text-gray-600 text-lg">Add Blog</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Add New Blog</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              disabled={loading}
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter blog title"
            />
            {errors.title && (
              <p className="text-sm text-red-500 mt-1">{errors.title}</p>
            )}
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              disabled={loading}
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter blog description"
              className="resize-none"
            />
            {errors.description && (
              <p className="text-sm text-red-500 mt-1">{errors.description}</p>
            )}
          </div>

          <div>
            <Label htmlFor="link">Blog Link</Label>
            <Input
              id="link"
              name="link"
              disabled={loading}
              value={formData.link}
              onChange={handleInputChange}
              placeholder="https://example.com"
            />
            {errors.link && (
              <p className="text-sm text-red-500 mt-1">{errors.link}</p>
            )}
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <Select
              disabled={loading}
              onValueChange={handleCategoryChange}
              value={formData.category}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categoryOptions.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.category && (
              <p className="text-sm text-red-500 mt-1">{errors.category}</p>
            )}
          </div>

          <div>
            <Label htmlFor="image">Image</Label>
            <Input
              id="image"
              name="image"
              disabled={loading}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            <p className="text-sm text-muted-foreground mt-1">
              Optional: If not provided, a default image will be used
            </p>
          </div>

          <Button disabled={loading} type="submit" className="w-full">
            {loading ? (
              <>
                <div className="ml-2 animate-spin">
                  <Loader />
                </div>
                Loading...
              </>
            ) : (
              "Create Blog"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddBlog;
