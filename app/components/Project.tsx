"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const Project = () => {
  const [items, setItems] = useState(["01", "02", "03", "04"]);

  const handleUpload = () => {
    // 인자에는 3가지 이름이 들어가야한다.
    setItems((items) => {
      return [...items];
    });
  };

  return (
    <div className="ProjectList">
      <ul className="flex w-full flex-wrap">
        {items.map((item, idx) => (
          <li key={idx} className="w-1/2 relative">
            <Link href="#void" className="group">
              <div className="img">
                <img
                  src={`/project-${item}.jpg`}
                  alt={item}
                  className="w-full h-full object-cover"
                />
                {/* <Image
                  className="w-full h-full object-cover"
                  src={`/${item}.jpg`}
                  alt={item}
                  width={100}
                  priority
                /> */}
              </div>
              <div className="txt absolute left-10 top-10 right-10 bottom-10 flex items-center justify-center bg-white opacity-0 group-hover:opacity-90 duration-300">
                <div className="">프로젝트{item}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
