import React from "react";

function Button({ theme = "primary", title, handleClick, otherClasses }) {
  return theme === "secondary" ? (
    <button
      onClick={handleClick}
      className={`border-2 border-cream hover:bg-cream hover:text-green-islamic font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ${otherClasses}`}
    >
      {title}
    </button>
  ) : theme === "other" ? (
    <button
      onClick={handleClick}
      className={`border-2 border-gold text-gold hover:bg-gold hover:text-green-islamic font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ${otherClasses}`}
    >
      {title}
    </button>
  ) : theme === "tertiary" ? (
    <button
      onClick={handleClick}
      className={`border-2 border-green-islamic text-green-islamic hover:bg-green-islamic hover:text-cream font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ${otherClasses}`}
    >
      {title}
    </button>
  ) : (
    <button
      onClick={handleClick}
      className={`bg-gold hover:bg-gold-light text-green-islamic font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105  ${otherClasses}`}
    >
      {title}
    </button>
  );
}

export default Button;
