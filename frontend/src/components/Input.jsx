import React, { useId } from "react";

function Input({
  value,
  title,
  placeholder,
  required = false,
  type = "text",
  onChange,
  dropdownOptions,
}) {
  const inputClass =
    "w-full bg-green-dark/2 text-black-rich placeholder:text-black-rich placeholder:opacity-50 border border-green-dark/5 outline-none rounded-lg p-3 duration-300 focus:border-green-dark/20";

  const id = useId();

  return (
    <div className="w-full p-2 rounded-lg">
      <label
        className="block text-gray-700 text-sm font-medium mb-2"
        htmlFor={id}
      >
        {title}
      </label>
      {type === "dropdown" ? (
        <select required={required} className={inputClass} id={id}>
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
          id={id}
          required={required}
        ></textarea>
      ) : (
        <input
          className={inputClass}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}
          id={id}
          required={required}
        />
      )}
    </div>
  );
}

export default Input;
