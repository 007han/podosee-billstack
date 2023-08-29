"use client";
import { itemState } from "../recoil/itemState";
import { useSetRecoilState } from "recoil";
import { ItemList } from "../type/Interface";
export function PlusItemAmountButton({
  itemName,
  itemAmount,
  totalPrice,
}: ItemList) {
  const setOrderedMenu = useSetRecoilState(itemState);

  const plusItemAmount = () => {
    setOrderedMenu((prev) =>
      prev.map((payment) =>
        payment.itemName === itemName
          ? {
              ...payment,
              itemAmount: (itemAmount || 0) + 1,
              totalPrice: totalPrice * (itemAmount ? itemAmount + 1 : 0),
            }
          : payment
      )
    );
  };

  return (
    <button className="plusbutton" onClick={plusItemAmount}>
      +
    </button>
  );
}
