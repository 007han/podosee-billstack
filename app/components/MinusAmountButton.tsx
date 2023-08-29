"use client";
import { itemState } from "../recoil/itemState";
import { useSetRecoilState } from "recoil";
import { ItemList } from "../type/Interface";
export function MinusItemAmountButton({
  itemName,
  itemAmount,
  totalPrice,
}: ItemList) {
  const setItemListState = useSetRecoilState(itemState);
  const MinusItemAmount = () => {
    if (itemAmount) {
      if (itemAmount > 1) {
        setItemListState((prevState) =>
          prevState.map((x) =>
            x.itemName === itemName
              ? {
                  ...x,
                  itemAmount: itemAmount - 1,
                  totalPrice: totalPrice * (itemAmount - 1),
                }
              : x
          )
        );
      } else {
        setItemListState((prev) =>
          prev.filter((item) => item.itemName != itemName)
        );
      }
    }
  };
  return (
    <>
      <button className="minusbutton" onClick={MinusItemAmount}>
        -
      </button>
    </>
  );
}
