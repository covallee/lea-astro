import { useSanityClient } from "astro-sanity";
import { createImageBuilder } from "astro-sanity";

export const imageBuiler = createImageBuilder(useSanityClient())

export function urlForImage(source) {
    return imageBuiler.image(source);
}