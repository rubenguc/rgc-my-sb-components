/// <reference types="react" />
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
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, }: MyLabelProps) => JSX.Element;
