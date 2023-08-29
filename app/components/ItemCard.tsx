"use client";
import "../styles/globals.css";
import { Menu } from "../type/Menu";

/**
 * 1. 메뉴 데이터를 적절히 렌더링한다
 * 2. onClick을 적절히 전달한다
 */
export function MenuCard({
  onClick,
  ...menu
}: Menu & { onClick: (menu: Menu) => void }) {
  return (
    <div className="itemcardcontainer">
      <button className="itemcard" onClick={() => onClick(menu)}>
        <h2>{menu.itemName}</h2>
        <h2>{menu.price}원</h2>
      </button>
    </div>
  );
}
