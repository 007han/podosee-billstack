"use client";
import { useRecoilState } from "recoil";
import { useMenus } from "../hooks/useMenus";
import { Menu } from "../type/Menu";
import { MenuCard } from "./ItemCard";
import { itemState } from "../recoil/itemState";

/**
 * 2. 데이터에서 커피, 논커피 메뉴를 구분한다.
 * 3. 구분된 목록을 각각 순회한다
 */
export function Items({ onSelect }: { onSelect: (item: Menu) => void }) {
  const menus = useMenus();

  const coffeMenu = menus.filter((menu) => menu.isCoffee);
  const nonCoffeeMenu = menus.filter((menu) => !menu.isCoffee);

  return (
    <div>
      <h2>Coffee</h2>
      <div className="itemcardcontainer">
        {coffeMenu.map((menu) => (
          <MenuCard key={menu.itemId} {...menu} onClick={onSelect} />
        ))}
      </div>
      <h2>non-coffee</h2>
      <div className="itemcardcontainer">
        {nonCoffeeMenu.map((menu) => (
          <MenuCard key={menu.itemId} {...menu} onClick={onSelect} />
        ))}
      </div>
    </div>
  );
}
