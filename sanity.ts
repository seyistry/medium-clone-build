import { createClient, createCurrentUserHook } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Post } from "./typings";

export const config = {
    dataset: process.env.NEXT_SANITY_PUBLIC_DATASET || "production",
    projectId: process.env.NEXT_SANITY_PUBLIC_PROJECT_ID || "projectId",
    apiVersion: "2021-03-25",
    useCon: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlForMainImage = (source: Post["mainImage"]) =>
    imageUrlBuilder(config).image(source);

export const urlForAuthorImage = (source: string) =>
    imageUrlBuilder(config).image(source);
