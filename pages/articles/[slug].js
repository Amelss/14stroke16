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


  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

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
    section5Image,
    section5altTag,
    section5Text,
    section6Image,
    section6AltTag,
    section6Text,
    section7Image,
    section7ImageAltTag,
    section7Text,
    section8Image,
    section8ImageAltTag,
    section8Text,
    section9Image,
    section9ImageAltTag,
    section9Text,
    section10Image,
    section10ImageAltTag,
    section10Text,
    quote,
    secondQuote,
    thirdQuote,
    fourthQuote,
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
              <h3 className="text-4xl xl:text-6xl font-bold text-center mb-4 md:mt-0 uppercase">
                {title}
              </h3>

              <div className="rich-text text-justify">
                {documentToReactComponents(section1Text)}
              </div>

              <div className="flex justify-between align-bottom mt-10">
                <div>
                  <p className="font-bold text-xs text-gray-300">{author}</p>
                </div>
                <div>
                  <p className="font-bold text-xs text-gray-300">{articlePublishedDate}</p>
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

        <div className="text-center text-3xl font-bold my-10 py-6 px-3 md:py-10">
          {documentToReactComponents(quote)}
        </div>

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

        <div className="text-center text-3xl font-bold my-10 py-6 px-3 md:py-10">
          {documentToReactComponents(secondQuote)}
        </div>

        {section5Image && (
          <div className="grid-layout">
            <div className="text-justify">
              {documentToReactComponents(section5Text)}
            </div>
            <div>
              <Image
                src={`https:${section5Image.fields.file.url}`}
                width={600}
                height={600}
                alt={section5altTag}
              />
            </div>
          </div>
        )}

        {section6Image && (
          <div className="grid-layout">
            <div>
              <Image
                src={`https:${section6Image.fields.file.url}`}
                width={600}
                height={600}
                alt={section6AltTag}
              />
            </div>
            <div className="text-justify">
              {documentToReactComponents(section6Text)}
            </div>
          </div>
        )}

        <div className="text-center text-3xl font-bold my-10 py-6 px-3 md:py-10">
          {documentToReactComponents(thirdQuote)}
        </div>

        {section7Image && (
          <div className="grid-layout">
            <div className="text-justify">
              {documentToReactComponents(section7Text)}
            </div>
            <div>
              <Image
                src={`https:${section7Image.fields.file.url}`}
                width={600}
                height={600}
                alt={section7ImageAltTag}
              />
            </div>
          </div>
        )}

        {section8Image && (
          <div className="grid-layout">
            <div>
              <Image
                src={`https:${section8Image.fields.file.url}`}
                width={600}
                height={600}
                alt={section8ImageAltTag}
              />
            </div>
            <div className="text-justify">
              {documentToReactComponents(section8Text)}
            </div>
          </div>
        )}

        <div className="text-center text-3xl font-bold my-10 py-6 px-3 md:py-10">
          {documentToReactComponents(fourthQuote)}
        </div>

        {section9Image && (
          <div className="grid-layout">
            <div className="text-justify">
              {documentToReactComponents(section9Text)}
            </div>
            <div>
              <Image
                src={`https:${section9Image.fields.file.url}`}
                width={600}
                height={600}
                alt={section9ImageAltTag}
              />
            </div>
          </div>
        )}

        {section10Image && (
          <div className="grid-layout">
            <div>
              <Image
                src={`https:${section10Image.fields.file.url}`}
                width={600}
                height={600}
                alt={section10ImageAltTag}
              />
            </div>
            <div className="text-justify">
              {documentToReactComponents(section10Text)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
