import React from "react";
import { 
  FaFire, 
  FaBitcoin, 
  FaDice, 
  FaClipboard, 
  FaFish, 
  FaVideo, 
  FaFutbol, 
  FaClock, 
  FaHeart 
} from "react-icons/fa";

// Categories with icons
const categories = [
  { name: "Hot", icon: <FaFire /> },
  { name: "Blockchain", icon: <FaBitcoin /> },
  { name: "Slot", icon: <FaDice /> },
  { name: "Card", icon: <FaClipboard /> },
  { name: "Fishing", icon: <FaFish /> },
  { name: "Live", icon: <FaVideo /> },
  { name: "Sports", icon: <FaFutbol /> },
  { name: "Recent", icon: <FaClock /> },
  { name: "Favourite", icon: <FaHeart /> },
];

export default function CategoryBar({ selectedCategory, setSelectedCategory }) {
  const handleClick = (name) => {
    setSelectedCategory(name);
    const element = document.getElementById(name);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="category-bar flex overflow-x-auto gap-2 py-2 px-2 bg-gray-900">
      {categories.map((cat, idx) => (
        <button
          key={idx}
          onClick={() => handleClick(cat.name)}
          className={`flex items-center gap-1 px-3 py-1 rounded-full font-semibold text-sm flex-shrink-0 transition-colors ${
            selectedCategory === cat.name
              ? "bg-yellow-500 text-black"
              : "bg-gray-700 text-white hover:bg-yellow-400 hover:text-black"
          }`}
        >
          {cat.icon}
          <span>{cat.name}</span>
        </button>
      ))}
    </div>
  );
}
