import { PhoneCall, Mail, Instagram, Github } from "lucide-react";
import ContactCard from "../components/ContactCard";

export default function Home() {
  return (
    <div className="text-center mx-auto">
      <h2 className="text-4xl color-black font-bold pb-20">CONTACT</h2>
      <div className="flex gap-10 flex-wrap justify-center">
        <ContactCard
          link="tel:010-3660-5228"
          tit="Phone-Number"
          txt="010-3660-5228"
          target="_self"
        >
          <PhoneCall size={24} color="#000" />
        </ContactCard>
        <ContactCard
          link="mailto:donggi5235@naver.com"
          tit="E-Mail"
          txt="donggi5235@naver.com"
          target="_self"
        >
          <Mail size={24} color="#000" />
        </ContactCard>
        <ContactCard
          link="https://www.instagram.com/riddong2/"
          tit="instagram"
          txt="riddong2"
          target="_blank"
        >
          <Instagram size={24} color="#000" />
        </ContactCard>
        <ContactCard
          link="https://github.com/donggi5235"
          tit="Github"
          txt="https://github.com/donggi5235"
          target="_blank"
        >
          <Github size={24} color="#000" />
        </ContactCard>
      </div>
    </div>
  );
}
