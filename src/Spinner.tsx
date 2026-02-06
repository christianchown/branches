export function Spinner({
  size = 40,
  thickness = 4,
  color = "#ec0000",
  speed = 1,
  ariaLabel = "Loading",
  className = "",
  style: userStyle = {},
}) {
  const sizeValue = typeof size === "number" ? `${size}px` : size;
  const thicknessValue =
    typeof thickness === "number" ? `${thickness}px` : thickness;
  const duration = 1 / Math.max(Number(speed) || 1, 0.01);

  return (
    <span
      role="status"
      aria-label={ariaLabel}
      className={className}
      style={{
        width: sizeValue,
        height: sizeValue,
        display: "inline-block",
        boxSizing: "border-box",
        borderRadius: "50%",
        border: `${thicknessValue} solid rgba(0,0,0,0.08)`,
        borderTopColor: color,
        animation: `spin ${duration}s linear infinite`,
        ...userStyle,
      }}
    >
      <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
    </span>
  );
}
