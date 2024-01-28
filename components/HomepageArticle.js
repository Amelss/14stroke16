import Link from "next/link";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function HomepageArticle({ article }) {
  const {
    title,
    readTime,
    thumbnail,
    thumbnailAltTag,
    author,
    articlePublishedDate,
    section1Text,
    section1Image,
    section2Text,
    section2Image,
    section3Text,
    section3Image,
    section4Text,
    section4Image,
    excerpt,
  } = article.fields;

  // Check if thumbnail and thumbnail.fields are defined
    const thumbnailSrc = thumbnail?.fields?.file?.url;
    const section1ImageSrc = section1Image?.fields.file?.url;
    const section2ImageSrc = section2Image?.fields.file?.url;

  return (
    <div>
      <div className="bg-green-400">
        <div>
          {thumbnailSrc ? (
            <Image
              src={`https:${thumbnailSrc}`}
              width={300}
              height={300}
              alt={thumbnailAltTag}
            />
          ) : (
            <p>No thumbnail available</p>
          )}
        </div>
        <div>{thumbnailAltTag}</div>
        <div className="bg-pink-300">
          <h3>{title}</h3>
          {/* content  */}
        </div>
        <div className="bg-fuchsia-600">
          <div>
            <p>{author}</p>
          </div>
          <div>
            <p>{articlePublishedDate}</p>
          </div>
        </div>

        <div>
          <div>
            {section1ImageSrc ? (
              <Image
                src={`https:${section1ImageSrc}`}
                width={300}
                height={300}
                alt={thumbnailAltTag}
              />
            ) : (
              <p>No thumbnail available</p>
            )}
          </div>
        </div>
        <div>{documentToReactComponents(section1Text)}</div>
        <div>
          {section2ImageSrc ? (
            <Image
              src={`https:${section2ImageSrc}`}
              width={300}
              height={300}
              alt={thumbnailAltTag}
            />
          ) : (
            <p>No thumbnail available</p>
          )}
        </div>
        <div>{documentToReactComponents(section2Text)}</div>
      </div>
    </div>
  );
}
