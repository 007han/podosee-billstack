"use client";

import "../styles/globals.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function Companies() {
  const names = ["Cheil", "Hyundai", "Dongguk"];
  const router = useRouter();

  return (
    <>
      {names.map((x) => {
        const companyLink = `chooseItem/${x}`;
        const imgsrc = `https://podoseebillstack.s3.ap-northeast-2.amazonaws.com/${x}.png`;

        return (
          <>
            <button
              className="menubtn"
              onClick={() => router.push(companyLink)}
            >
              <Image src={imgsrc} width={200} height={200} alt="companypic" />
            </button>
          </>
        );
      })}
    </>
  );
}
