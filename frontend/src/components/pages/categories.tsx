"use client";

import { useBlogDispatch, useBlogs } from "@/context/blogContext/hooks";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { getBlogs } from "@/api-functions/blogs";

const Categories = () => {
  const state = useBlogs();
  const dispatch = useBlogDispatch();
  const router = useRouter();

  const changeCategory = async (categoryId: string) => {
    router.push(`/blogs?categoryId=${categoryId}`);

    try {
      const blogsResp = await getBlogs(categoryId);
      const blogs = blogsResp.data;

      dispatch({
        type: "SET_BLOGS",
        payload: { blogs },
      });

      dispatch({
        type: "SET_CURRENT_CATEGORY",
        payload: { category: categoryId },
      });
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 items-center md:-ml-4">
          {state.categories.map((category, index) => (
            <CarouselItem
              key={index}
              className="pl-2  md:pl-4 max-h-[85px] basis-1/4 md:basis-1/5 lg:basis-[11.11%]"
            >
              <div
                onClick={() => changeCategory(category._id)}
                className="text-center cursor-pointer space-y-4 p-4"
              >
                <div
                  className={cn(
                    "relative flex flex-col hover:border-b justify-center items-center mx-auto",
                    state.current_category === category._id &&
                      "border-b-[1.5px] border-black"
                  )}
                >
                  <Image
                    src={category.icon}
                    alt={category.name}
                    width={25}
                    height={25}
                    className="object-contain "
                  />
                  <p className="text-[12px] mb-2 text-ellipsis overflow-hidden whitespace-nowrap mt-2 font-semibold text-[#6A6A6A]">
                    {category.name}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Categories;
