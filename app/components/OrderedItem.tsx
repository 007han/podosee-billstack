"use client";
import { itemState } from "../recoil/itemState";
import { useRecoilState } from "recoil";
import { PlusItemAmountButton } from "./PlusAmountButton";
import { MinusItemAmountButton } from "./MinusAmountButton";
import "../styles/globals.css";
export function OrderedItem() {
  const [orderedItemList, setOrderedItemList] = useRecoilState(itemState);

  if (orderedItemList.length === 0) {
    return (
      <>
        <h2>아직 주문 내역이 없습니다.</h2>
      </>
    );
  }
  return (
    <div className="ordereditemitemcontainer">
      {orderedItemList.map((x) => {
        if (x.itemAmount !== undefined) {
          return (
            <div key={x.itemName}>
              <div className="ordereditem">
                <MinusItemAmountButton
                  itemName={x.itemName}
                  itemAmount={x.itemAmount}
                  totalPrice={x.totalPrice / x.itemAmount}
                />
                <h3>
                  {x.itemName}:{x.itemAmount} 잔 {x.totalPrice} 원
                </h3>
                <PlusItemAmountButton
                  itemName={x.itemName}
                  itemAmount={x.itemAmount}
                  totalPrice={x.totalPrice / x.itemAmount}
                />{" "}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
