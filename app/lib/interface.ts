import { PortableTextBlock } from "@portabletext/types";

export interface Image {
  _type?: "image";
  asset: { _ref: string; _type: "reference" };
  alt?: string;
}

export interface SimpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: Image;
}

export interface FullBlog {
  currentSlug: string;
  title: string;
  content: PortableTextBlock[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  titleImage: any;
}
