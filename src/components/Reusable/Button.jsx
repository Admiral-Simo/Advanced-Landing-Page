function Button({icon, text, className}) {
  return (
    <a href="#" className={`button flex flex-row focus-state items-center py-2 gap-3 bg-amber-400 mx-auto my-12 text-neutral-900 hover:bg-amber-300 ${className}`}>
      {icon}

      <span className="font-medium">{text}</span>
    </a>
  );
}

export default Button;
