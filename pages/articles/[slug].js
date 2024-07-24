import { createClient } from "contentful";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Skeleton from "@/components/Skeleton";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import PreviewBanner from "@/components/PreviewBanner";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

const previewClient = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_KEY,
  host: "preview.contentful.com",
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "article",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ context }) {

  const client = context.preview
    ? contentful.previewClient
    : contentful.client;

  const { items } = await client.getEntries({
    content_type: "article",
    "fields.slug": context.params.slug,
  });


  return {
    props: {
      preview: context.preview || false,
      article: items[0] || null,
    },
    revalidate: 10,
  };
}

export default function Slug({ article, preview }) {
  if (!article) return <Skeleton />;

  const {
    title,
    readTime,
    author,
    plugSocket,
    articlePublishedDate,
    featuredImage,
    featuredImageAltTag,
    credits,
    introductionText,
    blogSections,
  } = article.fields;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`Read about ${title}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {preview && <PreviewBanner />}
      <div className="px-5 md:px-0 md:max-w-[1200px] mx-auto my-10">
        <div className="grid-layout">
          {featuredImage && (
            <Image
              src={`https:${featuredImage.fields.file.url}`}
              width={600}
              height={600}
              alt={featuredImageAltTag}
            />
          )}
          <div className="">
            <h3 className="text-4xl xl:text-6xl font-bold text-center mb-4 md:mt-0 uppercase">
              {title}
            </h3>

            <div className="leading-relaxed whitespace-pre-wrap text-sm xl:text-base text-body mt-10">
              {introductionText}
            </div>
            <div className="flex justify-between align-bottom mt-10">
              <div>
                {plugSocket ? (
                  <p className="font-bold text-xs text-gray-300 cursor-pointer">
                    {plugSocket && (
                      <Link href={`${plugSocket}`} target="blank">
                        {author}
                      </Link>
                    )}
                  </p>
                ) : (
                  <p className="font-bold text-xs text-gray-300">{author}</p>
                )}
              </div>
              <div>
                <p className="font-bold text-xs text-gray-300">
                  {articlePublishedDate}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rich-text text-justify grid grid-cols-1 md:grid-cols-2 md:px-6 md:gap-5 lg:gap-10 mt-10 overflow-x-hidden">
          {blogSections.map((section, index) => (
            <div key={index}>
              {section.sys.contentType.sys.id === "textBlock" && (
                <div className="leading-relaxed whitespace-pre-wrap text-sm xl:text-base text-body mt-10">
                  {section.fields.textBlockText}
                </div>
              )}
              {section.sys.contentType.sys.id === "image" &&
                section.fields.image.fields.file && (
                  <div className="py-8">
                    <Image
                      src={`https:${section.fields.image.fields.file.url}`}
                      alt={section.fields.altText}
                      width={
                        section.fields.image.fields.file.details.image.width
                      }
                      height={
                        section.fields.image.fields.file.details.image.height
                      }
                      className="mx-auto"
                    />
                  </div>
                )}
              {section.sys.contentType.sys.id === "quoteBlock" && (
                <div className="text-center text-3xl font-bold  my-10 py-6 px-3 md:py-10">
                  {section.fields.quoteBlockText}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10 pt-5 text-sm text-gray-300">
          {documentToReactComponents(credits)}
        </div>
      </div>
    </div>
  );
}
