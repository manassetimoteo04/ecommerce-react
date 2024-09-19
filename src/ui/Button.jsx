function Button({ type, children }) {
  const base =
    'rounded-md  font-normal transition-all duration-300 flex items-center gap-2 ';
  const btns = {
    primary:
      base +
      ' bg-blue-600 px-6 py-2.5 text-white  hover:bg-blue-700 active:shadow-xl',
    secondary:
      base +
      ' bg-gray-950 px-6 py-2.5 text-gray-50 hover:bg-gray-900 active:shadow-xl',
    tertiary: base + ' px-3 py-1.5 text-blue-700  hover:text-blue-800 ',
    small: base + ' px-3 py-1.5 bg-blue-600 text-white  hover:bg-blue-700 ',
  };
  return <button className={btns[type]}>{children}</button>;
}

export default Button;
