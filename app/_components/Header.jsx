"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Menu, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log("Session data:", session);
    console.log("Auth status:", status);
  }, [session, status]);

  const handleImageError = (e) => {
    console.error("Failed to load user image:", e);
    e.target.src = "/default-avatar.png";
  };

  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/" });
    router.push(data.url);
  };

  return (
    <div className="w-full p-2 shadow-sm flex justify-between items-center bg-[#2929FF]">
      <div className="flex items-center gap-8 ml-4">
        <Link href={"/"}>
          <Image
            className="rounded-xl cursor-pointer"
            src="/logo.jpeg"
            alt="GMINDIA"
            width={120}
            height={100}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="md:flex items-center gap-6 hidden text-white">
          <Link href={"/"} className="hover:scale-105 cursor-pointer">
            Home
          </Link>
          <h2 className="hover:scale-105 cursor-pointer">Services</h2>
          <h2 className="hover:scale-105 cursor-pointer">About Us</h2>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="text-white">
                <Menu className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Services</DropdownMenuItem>
              <DropdownMenuItem>About Us</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="mr-6">
        {status === "authenticated" && session?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {session.user.image ? (
                <Image
                  src={session.user.image}
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full"
                  onError={handleImageError}
                />
              ) : (
                <Button className="rounded-full p-0 w-10 h-10 bg-white hover:bg-white hover:scale-105">
                  <User className="h-4 w-4" />
                </Button>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={"/mybooking"}>My Booking</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSignOut}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            className="bg-white hover:bg-gray-100 hover:text-black mr-6"
            onClick={() => signIn("descope")}
          >
            Login / Sign Up
          </Button>
        )}
      </div>
    </div>
  );
}

export default Header;
