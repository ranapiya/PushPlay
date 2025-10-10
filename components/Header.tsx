'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ConnectButton from './ConnectButton';

interface HeaderProps {
  onHomeClick: () => void;
  onPlaygroundClick?: () => void;
}

export default function Header({ onHomeClick, onPlaygroundClick }: HeaderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/40 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={onHomeClick}
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <Image
              src="/logo.png"
              alt="PushPlay"
              height={30}
              width={30}
              className="object-cover rounded-full"
            />
            <span className="font-semibold text-lg hidden sm:inline-block">
              PushPlay
            </span>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground smooth-transition"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-foreground smooth-transition"
            >
              How to Play
            </Link>
            <button
              onClick={onPlaygroundClick}
              className="text-sm font-medium text-muted-foreground hover:text-foreground smooth-transition"
            >
              Playground
            </button>
          </nav>

          {/* Wallet Connect */}
          <div className="flex items-center space-x-4">
            <ConnectButton />
          </div>
        </div>
      </div>
    </header>
  );
}
