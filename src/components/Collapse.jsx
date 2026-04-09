import { useState } from "react";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="collapse">
      <button className="collapse__header" onClick={toggle}>
        <span className="collapse__title">{title}</span>
        <span
          className={`collapse__icon ${isOpen ? "collapse__icon--open" : ""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-up-icon lucide-chevron-up"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </span>
      </button>

      <div
        className={`collapse__content ${
          isOpen ? "collapse__content--open" : ""
        }`}
      >
        <div className="collapse__inner">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;
