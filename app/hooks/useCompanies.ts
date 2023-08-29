"use client";

import { Company } from "../type/Company";

const names = ["Cheil", "Hyundai", "Dongguk"];

export function useCompanies(): Company[] {
  return names.map((name) => ({
    name,
    link: `chooseItem/${name}`,
    imageUrl: `https://podoseebillstack.s3.ap-northeast-2.amazonaws.com/${name}.png`,
  }));
}
