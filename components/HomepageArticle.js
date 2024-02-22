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
  } = article.fields;


  return (
    <div>
      <div className="bg-white">
        <div>
          <Image
            src={`https:${thumbnail.fields.file.url}`}
            width={300}
            height={300}
            alt={thumbnailAltTag}
          />
        </div>
        <div>{thumbnailAltTag}</div>
        <div className="">
          <h3>{title}</h3>
          {/* content  */}
        </div>
        <div className="">
          <div>
            <p>{author}</p>
          </div>
          <div>
            <p>{articlePublishedDate}</p>
          </div>
        </div>

        <div>
          <div>
            <Image
              src={`https:${section1Image.fields.file.url}`}
              width={300}
              height={300}
              alt={thumbnailAltTag}
            />
          </div>
        </div>
        <div>{documentToReactComponents(section1Text)}</div>
        <div>
          <Image
            src={`https:${section2Image.fields.file.url}`}
            width={300}
            height={300}
            alt={thumbnailAltTag}
          />
        </div>
        <div>{documentToReactComponents(section2Text)}</div>
      </div>
    </div>
  );
}
