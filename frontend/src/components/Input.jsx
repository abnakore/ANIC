import React from "react";

function Input({
  value,
  title,
  placeholder,
  type = "text",
  onChange,
  dropdownOptions,
}) {
  const inputClass =
    "w-full bg-green-dark/2 text-black-rich placeholder:text-black-rich placeholder:opacity-50 border border-green-dark/5 outline-none rounded-lg p-3 duration-300 focus:border-green-dark/20";

  return (
    <div className="w-full p-2 rounded-lg">
      <label
        className="block text-gray-700 text-sm font-medium mb-2"
        for="unique-input"
      >
        {title}
      </label>
      {type === "dropdown" ? (
        <select className={inputClass} id="unique-input">
          {dropdownOptions?.map((option, i) => (
            <option key={i}>{option}</option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          className={`${inputClass} resize-none`}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          rows={7}
          id="unique-input"
        ></textarea>
      ) : (
        <input
          className={inputClass}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}
          id="unique-input"
        />
      )}
    </div>
  );
}

export default Input;
