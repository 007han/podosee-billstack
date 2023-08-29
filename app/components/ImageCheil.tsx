import Image from "next/image";

export function ImageCheil() {
  return (
    <>
      <Image
        src={`https://podoseebillstack.s3.ap-northeast-2.amazonaws.com/cheil.png`}
        alt="cheil"
        width={100}
        height={100}
      />
    </>
  );
}
