import type { EducationCategory } from "@/data/patient-education";

export type CareTone = "surgery" | "recovery" | "disease" | "alert";

/** Utility classes for each semantic care colour (see --care-* tokens in styles.css). */
export const careClasses: Record<
  CareTone,
  { text: string; surface: string; solid: string; border: string; dot: string }
> = {
  surgery: {
    text: "text-care-surgery",
    surface: "bg-care-surgery-surface",
    solid: "bg-care-surgery text-primary-foreground hover:bg-care-surgery/90",
    border: "border-care-surgery",
    dot: "bg-care-surgery",
  },
  recovery: {
    text: "text-care-recovery",
    surface: "bg-care-recovery-surface",
    solid: "bg-care-recovery text-primary-foreground hover:bg-care-recovery/90",
    border: "border-care-recovery",
    dot: "bg-care-recovery",
  },
  disease: {
    text: "text-care-disease",
    surface: "bg-care-disease-surface",
    solid: "bg-care-disease text-primary-foreground hover:bg-care-disease/90",
    border: "border-care-disease",
    dot: "bg-care-disease",
  },
  alert: {
    text: "text-care-alert",
    surface: "bg-care-alert-surface",
    solid: "bg-care-alert text-primary-foreground hover:bg-care-alert/90",
    border: "border-care-alert",
    dot: "bg-care-alert",
  },
};

/** Breast and endocrine (thyroid/adrenal) are complex care; the rest are surgical disease guides. */
export function educationCare(category: EducationCategory): CareTone {
  return category === "Breast" || category === "Endocrine" ? "surgery" : "disease";
}

/** Arabic article archive categories mapped to care colours. */
export function articleCare(category: string): CareTone {
  if (category === "التغذية والوزن") return "recovery";
  if (category === "التكميم والمتابعة") return "surgery";
  return "disease";
}
