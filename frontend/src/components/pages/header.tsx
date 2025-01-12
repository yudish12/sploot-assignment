"use client";
import { useAuth, useAuthDispatch } from "@/context/authContext/hooks";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import AddBlog from "./add-blog";
import { logout } from "@/actions/logout";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Header = () => {
  const state = useAuth();
  const dispatch = useAuthDispatch();

  const router = useRouter();

  const Logout = async () => {
    const resp = await logout();
    if (resp.success) {
      toast.success("Logged out successfully");
      dispatch({
        type: "LOGOUT",
      });
    } else {
      toast.error("Something went wrong while log out");
    }
  };

  return (
    <div>
      <div className="flex flex-wrap justify-between items-center py-4 pb-2 sm:py-6 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <Image src={"/next.svg"} alt="logo" width={100} height={100} />

        <div className="sm:flex hidden sm:flex-row gap-4 sm:gap-6 items-center text-lg mt-4 sm:mt-0">
          <span>Stays</span>
          <AddBlog />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="rounded-full border w-max border-gray-300 shadow-sm pr-2 pl-4 py-6 flex items-center gap-4 hover:bg-gray-100"
            >
              <Menu className="w-10 h-10 text-gray-600" />
              <Image
                src="/user-circle.svg"
                alt="user-circle"
                width={40}
                height={40}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 py-2">
            {state.isLoggedIn ? (
              <>
                <DropdownMenuItem className="px-4 py-3 text-[15px] font-medium focus:bg-gray-100">
                  {state.user?.name}
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-3 text-[15px] focus:bg-gray-100">
                  {state.user?.email}
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-2" />
                <DropdownMenuItem className="px-4 py-3 text-[15px] focus:bg-gray-100">
                  <button
                    onClick={Logout}
                    className="w-full text-left hover:bg-transparent"
                  >
                    Log out
                  </button>
                </DropdownMenuItem>
              </>
            ) : (
              <>
                <DropdownMenuItem className="px-4 py-3 text-[15px] focus:bg-gray-100">
                  <button
                    onClick={() => router.push("/")}
                    className="w-full text-left hover:bg-transparent"
                  >
                    Log in
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-3 text-[15px] focus:bg-gray-100">
                  <button
                    onClick={() => router.push("/signup")}
                    className="w-full text-left hover:bg-transparent"
                  >
                    Sign up
                  </button>
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="sm:hidden flex pb-4 justify-center gap-2 items-center text-lg ">
        <span>Stays</span>
        <AddBlog />
      </div>
    </div>
  );
};

export default Header;
