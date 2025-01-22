"use client";
import { useSearchParams, useRouter } from "next/navigation";

import StickyBar from "@/app/components/layouts/sticky-bar";
import data from "@/app/data/jobs.json";

export default function JobDetail() {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (!searchParams) {
    throw new Error("Unable to load search parameters.");
  }

  const title = searchParams.get("title");
  const index = searchParams.get("index");

  if (!title || !index) {
    router.push("/relevant_experience");
    return null; 
  }

  const jobIndex = parseInt(index, 10);

  if (isNaN(jobIndex) || jobIndex < 0 || jobIndex >= data.jobs.length) {
    router.push("/relevant_experience");
    return null; 
  }

  return (
    <StickyBar
      title={title}
      subtitle={data.jobs[jobIndex].place}
      paragraph={data.jobs[jobIndex].period}
    >
      <div></div>
    </StickyBar>
  );
}

