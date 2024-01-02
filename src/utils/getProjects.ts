import type { CollectionEntry } from "astro:content";

const getProjects = (projects: CollectionEntry<"project">[]) => {
  return projects
    .filter(({ data }) => !data.draft && typeof data.number === "number")
    .sort((a, b) => a.data.number - b.data.number);
};

export default getProjects;
