"use client";

import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import ConnectButton from "./ConnectButton";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

interface HeaderProps {
  onHomeClick: () => void;
}

export default function Header({ onHomeClick }: HeaderProps) {
   const [mounted, setMounted] = useState(false);
   useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
          onClick={onHomeClick}
          href="/" className="flex items-center space-x-2 group">
            <Image
             src={"/logo.png"}
             alt={"PlayPush"}
             height={30}
             width={30}
             className="object-cover rounded-full"
                     />
            <span className="font-semibold text-lg hidden sm:inline-block">PushPlay</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground smooth-transition">
              Features
            </Link>
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground smooth-transition">
              How to play
            </Link>
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground smooth-transition">
              Playground
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            
              <ConnectButton/>
            
          </div>
        </div>
      </div>
    </header>
  );
}
