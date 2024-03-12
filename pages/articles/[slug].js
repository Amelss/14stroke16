import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
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
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "article",
    "fields.slug": params.slug,
  });

  return {
    props: { article: items[0] || null },
  };
}

export default function Slug({ article }) {
  if (!article) {
    // Handle the case where the article is not found
    return <div>Article not found</div>;
  }

  const {
    title,
    readTime,
    author,
    articlePublishedDate,
    featuredImage,
    featuredImageAltTag,
    section1Text,
    section2Text,
    section2Image,
    section2ImageAltTag,
    section3Text,
    section3Image,
    section3ImageAltTag,
    section4Text,
    section4aImage,
    section4ImageAltTag,
    additionalText,
    additionalImages,
  } = article.fields;

  return (
    <div className="px-3 md:px-0 md:max-w-[1200px] mx-auto my-10">
      <div>
        <div className="">
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
              <h3 className="text-4xl md:text-6xl font-bold text-center mb-4 md:mt-0">
                {title}
              </h3>

              <div className="rich-text">
                {documentToReactComponents(section1Text)}
              </div>

              <div className="flex justify-between align-bottom mt-10">
                <div>
                  <p>{author}</p>
                </div>
                <div>
                  <p>{articlePublishedDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Check if section2Image is present before rendering */}
        {section2Image && (
          <div className="grid-layout">
            <div>
              <Image
                src={`https:${section2Image.fields.file.url}`}
                width={600}
                height={600}
                alt={section2ImageAltTag}
              />
            </div>
            <div>{documentToReactComponents(section2Text)}</div>
          </div>
        )}

        {/* Check if section3Image is present before rendering */}
        {section3Image && (
          <div className="grid-layout">
            <div>{documentToReactComponents(section3Text)}</div>
            <div>
              <Image
                src={`https:${section3Image.fields.file.url}`}
                width={600}
                height={600}
                alt={section3ImageAltTag}
              />
            </div>
          </div>
        )}

        {/* Check if section4aImage is present before rendering */}
        {section4aImage && (
          <div className="grid-layout">
            <div>
              <Image
                src={`https:${section4aImage.fields.file.url}`}
                width={600}
                height={600}
                alt={section4ImageAltTag}
              />
            </div>
            <div>{documentToReactComponents(section4Text)}</div>
          </div>
        )}
      </div>
    </div>
  );
}
