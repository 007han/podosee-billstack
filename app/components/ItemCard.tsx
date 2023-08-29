"use client";
import "../styles/globals.css";
import { useRecoilState } from "recoil";
import { itemState } from "../recoil/itemState";

export function ItemCard({
  itemName,
  itemPrice,
}: {
  itemName: string;
  itemPrice: number;
}) {
  const [itemListState, setItemListState] = useRecoilState(itemState);
  const addItem = () => {
    const findMenu = itemListState.find((x) => x.itemName === itemName);

    if (findMenu) {
      // 이미 한번 선택되었던 메뉴임 추가할것임.
      setItemListState((prevItemList) =>
        prevItemList.map((item) =>
          item.itemName === itemName
            ? {
                ...item,
                itemAmount: (item.itemAmount || 0) + 1,
                totalPrice: itemPrice + item.totalPrice,
              }
            : item
        )
      );
    } else {
      setItemListState((prevItemList) => [
        //처음 선택되는 아이템 일때 추가하면서 아이템1개로 설정
        ...prevItemList,
        {
          itemName: itemName,
          itemAmount: 1,
          totalPrice: itemPrice,
        },
      ]);
    }
  };

  return (
    <div className="itemcardcontainer">
      <button className="itemcard" onClick={addItem}>
        <h2>{itemName}</h2>
        <h2>{itemPrice}원</h2>
      </button>
    </div>
  );
}
