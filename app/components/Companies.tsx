"use client";

import "../styles/globals.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCompanies } from "../hooks/useCompanies";
import { Company } from "../type/Company";

/** 이 녀석의 역할
 * 3. 회사 목록 데이터를 순회하며 CompanyCard를 렌더링한다
 */
export function Companies() {
  const companies = useCompanies();

  return (
    <>
      {companies.map((company) => (
        <CompanyCard key={company.name} {...company} />
      ))}
    </>
  );
}

/**
 * - CompanyCard를 적절히 보여준다
 * - 클릭 시 회사 페이지로 이동한다
 */
function CompanyCard({ link, imageUrl }: Company) {
  const router = useRouter();

  return (
    <button className="menubtn" onClick={() => router.push(link)}>
      <Image src={imageUrl} width={200} height={200} alt="companypic" />
    </button>
  );
}
