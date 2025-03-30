import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ setDropdown, items }) => {
  const ref = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.parentNode?.contains(event.target)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName === selectedItem ? null : itemName);
  };

  return (
    <ul
      ref={ref}
      className="w-full bg-transparent border-2 text-gray-600 shadow-md rounded-md border-gray-500 p-2"
    >
      {items.map((item, index) => (
        <label
          key={index}
          className={`flex items-center w-full px-2 py-1 gap-2 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-transparent hover:text-white ${
            selectedItem === item.name ? "bg-gray-600 text-white" : ""
          }`}
          onClick={() => handleItemClick(item.name)}
        >
          <input
            type="radio"
            value={item.name}
            checked={selectedItem === item.name}
            onChange={() => {}}
          />
          {item.name}
        </label>
      ))}
    </ul>
  );
};

export default Dropdown;
