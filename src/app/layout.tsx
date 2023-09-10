'use client'

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { Heart } from "@/components/icons/heart";
import { Folder } from "@/components/icons/folder";
import { Images } from "@/components/icons/images";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Image Loom",
  description: "Generated by create next app",
};

function SideMenu() {
  return (
    <div className="pb-12 w-1/5">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            MENU
          </h2>
          <div className="space-y-1">
            <Button
              asChild
              variant="secondary"
              className="w-full justify-start gap-2"
            >
              <Link href="/gallery">
                <Images />
                Images
              </Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start gap-2">
              <Link href="/albums">
              <Folder />
              Albums
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start gap-2"
            >
              <Link href="/favorites">
                <Heart />
                Favorites
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="border-b">
          <div className="flex h-16 items-center px-4 container mx-auto">
            IMAGE LOOM
            <div className="ml-auto flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className="flex">
          <SideMenu />
          <div className="w-full px-4 pt-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
