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
          ▲
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
