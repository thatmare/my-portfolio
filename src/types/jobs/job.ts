import { DetailJob } from "./detail-job";

export type Job = {
  title: string;
  place: string;
  period: string;
  skills: string[];
  description: string;
  detail?: DetailJob;
};
