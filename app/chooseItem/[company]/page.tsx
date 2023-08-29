"use client";
import { Items } from "@/app/components/Items";
import { OrderedItem } from "@/app/components/OrderedItem";
import { RecoilRoot } from "recoil";
import "../../styles/globals.css";
export default function page({ params }: { params: { company: string } }) {
  return (
    <>
      <RecoilRoot>
        <div className="itemcardcontainer">
          <Items />
          <OrderedItem />
        </div>
      </RecoilRoot>
    </>
  );
}
