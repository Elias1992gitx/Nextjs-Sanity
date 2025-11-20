import { client, urlFor } from "@/app/lib/sanity";
import { FullBlog } from "@/app/lib/interface";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

async function getData(slug: string) {
  const query = `*[_type == "blog" && slug.current == '${slug}']{
  "currentSlug": slug.current,
    title,
    content,
    titleImage
}[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const data: FullBlog = await getData(slug);

  return (
    <div className="mt-6">
      <h1 className="space-y-4">
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          John Norgard - Blog
        </span>

        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        alt="title image"
        width={800}
        height={800}
        priority
        className="rounded-lg mt-8 border"
      />

      <div className="mt-16 prose prose-blue prose-xl dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
