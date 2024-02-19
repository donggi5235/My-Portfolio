import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center w-1/2 mx-auto">
      <h2 className="text-4xl color-black font-bold pb-20">CONTACT</h2>
      <div className="">
        <ul className="flex gap-10">
          <li className="">
            <Link
              href="tel:010-3660-5228"
              className="block p-10 border borde-solid border-black rounded-md hover:bg-black hover:text-white duration-200"
            >
              전화
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
