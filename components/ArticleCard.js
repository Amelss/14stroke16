import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ article }) {
  const {
    title,
    readTime,
    slug,
    author,
    articlePublishedDate,
    thumbnail,
    thumbnailAltTag,
    excerpt,
  } = article.fields;
    return (
        <div className="">
            <div>
                <Link href={`articles/${slug}`}>
                <Image
          src={`https:${thumbnail.fields.file.url}`}
          width={500}
          height={600}
          alt={thumbnailAltTag}
        />
       
          <h3 className="text-sm md:text-md font-bold my-4 ">{title}</h3>
                </Link>
                
                <p className="text-sm md:text-md">{excerpt }</p>
            </div>
        
      </div>
    );
}
