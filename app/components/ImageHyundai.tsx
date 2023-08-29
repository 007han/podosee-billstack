import Image from "next/image";

export function ImageHyundai({ children }: { children: string }) {
  return (
    <>
      <Image
        src={`https://podoseebillstack.s3.ap-northeast-2.amazonaws.com/Hyundai.png`}
        alt="cheil"
        width={100}
        height={100}
      />
    </>
  );
}
