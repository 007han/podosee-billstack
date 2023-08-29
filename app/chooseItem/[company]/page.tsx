"use client";
import { Menus } from "@/app/components/Menus";
import { OrderedItem } from "@/app/components/OrderedItem";
import { RecoilRoot, useRecoilState } from "recoil";
import "../../styles/globals.css";
import { Menu } from "@/app/type/Menu";
import { itemState } from "@/app/recoil/itemState";
import { useItemList } from "@/app/hooks/useItemList";

export default function Page({ params }: { params: { company: string } }) {
  const { itemList, add } = useItemList();

  return (
    <>
      <RecoilRoot>
        <div className="itemcardcontainer">
          <Menus onSelect={add} />
          <OrderedItem />
        </div>
      </RecoilRoot>
    </>
  );
}
