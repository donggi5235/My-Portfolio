import Link from "next/link";

type IconProps = {
  link: string | "";
  tit?: string;
  txt?: string;
  target?: string;
  children?: React.ReactNode;
};

const ContactCard = ({ link, tit, txt, target, children }: IconProps) => {
  return (
    <div className="w-4/12 min-w-[400px]">
      <Link
        href={link}
        target={target}
        rel="noreferrer noopener"
        className="flex flex-col gap-2 items-center text-center px-10 py-14 border borde-solid border-black rounded-md hover:bg-black hover:text-white duration-200 group"
      >
        <span className="p-4 rounded-full border-2 border-solid border-black bg-white">
          {children}
        </span>
        <span className="pt-7">{tit}</span>
        <span className="text-xl font-bold">{txt}</span>
      </Link>
    </div>
  );
};

export default ContactCard;
