"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const Nav: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={ref}
      className="w-1/5 fixed left-0 top-0 z-50 h-dvh flex items-center justify-center border-r border-solid border-black"
    >
      <div className="w-full flex flex-col pb-52">
        <h1 className="logo w-full h-36 text-center">
          <Link href="/" className="block p-5">
            <Image
              className="mx-auto"
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </Link>
        </h1>
        <div
          className={`flex flex-col items-center justify-center p-6 mx-auto text-center duration-200 border-r  ${
            isIntersecting
              ? "bg-zinc-900/0 border-transparent"
              : "bg-zinc-900/500  border-zinc-800 "
          }`}
        >
          <div className="flex flex-col justify-between gap-8">
            <Link
              href="/projects"
              className="duration-200 text-zinc-400 hover:text-black"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="duration-200 text-zinc-400 hover:text-black"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="duration-200 text-zinc-400 hover:text-black"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
