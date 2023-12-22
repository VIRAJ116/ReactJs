import { useState } from "react";

export default function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  expanded = false,
  className,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  return (
    <div className={className}>
      <p style={{ display: "inline" }}>{displayText}</p>
      <button
        style={{
          color: `${buttonColor}`,
          background: "none",
          outline: "none",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
          marginLeft: "6px",
        }}
        onClick={() => setIsExpanded((exp) => !exp)}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
