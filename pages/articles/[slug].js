import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Skeleton from "@/components/Skeleton";

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
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "article",
    "fields.slug": params.slug,
  });

  return {
    props: { article: items[0] || null },
    revalidate: 10
  };
}

export default function Slug({ article }) {
  if (!article) 
  
    return <Skeleton/>
  

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
    <div className="px-5 md:px-0 md:max-w-[1200px] mx-auto my-10">
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
              <h3 className="text-4xl md:text-6xl font-bold text-center mb-4 md:mt-0 uppercase">
                {title}
              </h3>

              <div className="rich-text text-justify">
                {documentToReactComponents(section1Text)}
              </div>

              <div className="flex justify-between align-bottom mt-10">
                <div>
                  <p className="font-bold">{author}</p>
                </div>
                <div>
                  <p className="font-bold">{articlePublishedDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

       
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
            <div className="text-justify">
              {documentToReactComponents(section2Text)}
            </div>
          </div>
        )}

        {section3Image && (
          <div className="grid-layout">
            <div className="text-justify">
              {documentToReactComponents(section3Text)}
            </div>
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
            <div className="text-justify">
              {documentToReactComponents(section4Text)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
