import Link from "next/link";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function HomepageArticle({ article }) {
  const {
    title,
    readTime,
    slug,
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
            <Image
              src={`https:${featuredImage.fields.file.url}`}
              width={600}
              height={600}
              alt={featuredImageAltTag}
            />

            <div className="">
              <Link href={`/articles/${slug}`}>
                <h3 className="text-4xl md:text-6xl font-bold text-center mb-4 md:mt-0 uppercase">
                  {title}
                </h3>
              </Link>
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
