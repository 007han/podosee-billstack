"use client";

import { useRecoilState } from "recoil";
import { itemState } from "../recoil/itemState";
import { Menu } from "../type/Menu";

export function useItemList() {
  const [itemListState, setItemListState] = useRecoilState(itemState);
  const addItem = (menu: Menu) => {
    const findMenu = itemListState.find((x) => x.itemName === menu.itemName);

    if (findMenu) {
      // 이미 한번 선택되었던 메뉴임 추가할것임.
      setItemListState((prevItemList) =>
        prevItemList.map((item) =>
          item.itemName === menu.itemName
            ? {
                ...item,
                itemAmount: (item.itemAmount || 0) + 1,
                totalPrice: menu.price + item.totalPrice,
              }
            : item
        )
      );
    } else {
      setItemListState((prevItemList) => [
        //처음 선택되는 아이템 일때 추가하면서 아이템1개로 설정
        ...prevItemList,
        {
          itemName: menu.itemName,
          itemAmount: 1,
          totalPrice: menu.price,
        },
      ]);
    }
  };

  return {
    itemList: itemListState,
    add: addItem,
  };
}
