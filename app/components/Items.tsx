"use client";
import { menu } from "../const/ment";
import { ItemCard } from "./ItemCard";
export function Items() {
  const NonCoffeeMenu = () => (
    <div className="itemcardcontainer">
      {menu.nonCoffee.map((item) => (
        <ItemCard
          key={item.itemId}
          itemName={item.itemName}
          itemPrice={item.price}
        />
      ))}
    </div>
  );

  const CoffeeMenu = () => (
    <div className="itemcardcontainer">
      {menu.coffee.map((item) => (
        <ItemCard
          key={item.itemId}
          itemName={item.itemName}
          itemPrice={item.price}
        />
      ))}
    </div>
  );

  return (
    <div>
      <h2>Coffee</h2>
      <CoffeeMenu />
      <h2>non-coffee</h2>
      <NonCoffeeMenu />
    </div>
  );
}
