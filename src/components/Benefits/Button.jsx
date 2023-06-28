function Button() {
  return (
    <a href="#" className="button flex flex-row focus-state items-center py-2 gap-3 bg-amber-400 mx-auto my-12 text-neutral-900 hover:bg-amber-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>

      <span className="font-medium">Download the App</span>
    </a>
  );
}

export default Button;
