import Link from "next/link";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function HomepageArticle({ article }) {
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
    section4Image,
    section4ImageAltTag,
    additionalText,
    additionalImages,
  } = article.fields;

  return (
    <div className="px-3 md:px-0 md:max-w-[1200px] mx-auto my-10">
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
              <h3 className="text-4xl md:text-6xl font-bold text-center my-4 md:mt-0">
                {title}
              </h3>
              <div className="rich-text">{documentToReactComponents(section1Text)}</div>

              <div className="flex justify-between mt-10 ">
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

        <div className="grid-layout">
          <div>
            <Image
              src={`https:${section4Image.fields.file.url}`}
              width={600}
              height={600}
              alt={section4ImageAltTag}
            />
          </div>
          <div>{documentToReactComponents(section4Text)}</div>
        </div>
      </div>
    </div>
  );
}
