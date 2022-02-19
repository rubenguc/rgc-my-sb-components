import "./mylabel.css";

export interface MyLabelProps {
  /**
   * The size of the label.
   */
  label: string;
  /**
   * This is the description for the size prop.
   */
  size: "h1" | "h2" | "h3" | "normal";

  /**
   * This is the caps propety.
   */
  allCaps?: boolean;

  /**
   * This is the color propety.
   */

  color?: "primary" | "secondary" | "tertiary";

  /**
   * This is the font color.
   */
  fontColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  color = "primary",
  label = "no label",
  size = "normal",
  fontColor = "black",
}: MyLabelProps) => {
  return (
    <span
      className={[size, `text-${color}`, label].join(" ")}
      style={{
        textTransform: allCaps ? "uppercase" : "none",
        color: fontColor,
      }}
    >
      {label}
    </span>
  );
};
