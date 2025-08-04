const Button = ({ id, title, leftIcon, rightIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit overflow-hidden cursor-pointer rounded-full bg-violet-50 px-7 py-3 text-black hover:bg-yellow-300 transition-all duration-800 ease-in-out ${containerClass}`}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
