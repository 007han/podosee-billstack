"use client";
import { useRecoilState } from "recoil";
import { useMenus } from "../hooks/useMenus";
import { Menu } from "../type/Menu";
import { MenuCard } from "./ItemCard";
import { itemState } from "../recoil/itemState";

/**
 * 2. 데이터에서 커피, 논커피 메뉴를 구분한다.
 * 3. 구분된 목록을 각각 순회한다
 * 4. 메뉴카드를 클릭 시 해당 품목 담기 로직을 적절히 수행한다
 */
export function Items() {
  const menus = useMenus();

  const coffeMenu = menus.filter((menu) => menu.isCoffee);
  const nonCoffeeMenu = menus.filter((menu) => !menu.isCoffee);

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

  return (
    <div>
      <h2>Coffee</h2>
      <div className="itemcardcontainer">
        {coffeMenu.map((menu) => (
          <MenuCard key={menu.itemId} {...menu} onClick={addItem} />
        ))}
      </div>
      <h2>non-coffee</h2>
      <div className="itemcardcontainer">
        {nonCoffeeMenu.map((menu) => (
          <MenuCard key={menu.itemId} {...menu} onClick={addItem} />
        ))}
      </div>
    </div>
  );
}
