import { createClient } from "next-sanity";

const projectId = "btrykpef";
const dataset = "production";
const apiVersion = "2023-11-27";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
