"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export const Nav = () => {
  // const ref = useRef<HTMLElement>(null);
  // const [isIntersecting, setIntersecting] = useState(true);

  // useEffect(() => {
  //   if (!ref.current) return;
  //   const observer = new IntersectionObserver(([entry]) =>
  //     setIntersecting(entry.isIntersecting)
  //   );

  //   observer.observe(ref.current);
  //   return () => observer.disconnect();
  // }, []);
  const menuOepn = () => {
    alert("메뉴오픈");
  };
  return (
    <header
      // ref={ref}
      className="w-full h-[60px] absolute left-0 top-0 z-50  border-b border-solid border-black bg-white
      lg:h-dvh lg:w-1/5 lg:border-r lg:fixed lg:flex lg:items-center lg:justify-center"
    >
      <button
        className="absolute right-0 top-0 w-[60px] h-full border-l border-solid border-[#e5e5e5] lg:hidden"
        onClick={menuOepn}
      >
        <Menu className="mx-auto" />
      </button>
      <div className="w-full gap-10 flex flex-col pb-52">
        <h1 className="logo text-center h-[60px] lg:h-auto">
          <Link
            href="/"
            className="hidden lg:block mx-auto w-[140px] h-[140px] rounded-full overflow-hidden"
          >
            <Image
              className="w-full h-full object-cover"
              src="/profile.jpg"
              alt="My Profile"
              width={200}
              height={200}
              priority
            />
          </Link>
          <span className="block font-bold text-[18px] leading-[60px] h-full lg:leading-none lg:h-auto lg:pt-[14px] lg:text-[30px] md:text-[24px]">
            Lee D.G
          </span>
        </h1>
        <div className="hidden lg:block flex flex-col items-center justify-center p-6 mx-auto text-center duration-200">
          <div className="flex flex-col justify-between gap-8">
            <Link
              href="/projects"
              className="text-[18px] duration-200 text-zinc-400 hover:text-black"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-[18px] duration-200 text-zinc-400 hover:text-black hover:font-bold"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-[18px] duration-200 text-zinc-400 hover:text-black"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
