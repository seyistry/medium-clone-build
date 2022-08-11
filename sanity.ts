import { createClient, createCurrentUserHook } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
    dataset: process.env.NEXT_SANITY_PUBLIC_DATASET || "production",
    projectId: process.env.NEXT_SANITY_PUBLIC_PROJECT_ID,
    apiVersion: "2021-03-25",
    useCon: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);
