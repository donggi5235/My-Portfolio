import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header>
        <h1 className="">
          <Image
            className=""
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </h1>
      </header>

    </main>
  );
}
