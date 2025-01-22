import { ReactNode } from "react";

export interface StickyBarProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  paragraph?: string;
}
