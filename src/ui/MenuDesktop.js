import React from 'react';
import MenuList from "./MenuList";

const MenuDesktop = () => {
  return (
    <div className="menu-desktop">
      <div className="menu-desktop__title-block">
        <h3 className="menu-desktop__title-text" title="Присоединяйся!">Работа мечты</h3>
      </div>
      <MenuList/>
    </div>
  );
};

export default MenuDesktop;
