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
      <div className="bg-green-400">
        {/* <div>{thumbnail}</div>
      <div>{ thumbnailAltTag}</div> */}
        <div className="bg-pink-300">
          <h3>{title}</h3>
          {/* content  */}
        </div>
        <div className="bg-fuchsia-600">
          <div>
            <p>{author}</p>
          </div>
          <div>{articlePublishedDate}</div>
        </div>
      </div>

      {/* <div>
        <div>{section1Text}</div>
        <div>{section1Image}</div>

        <div>{section2Image}</div>
        <div>{section2Text}</div>

        <div>{section3Text}</div>
        <div>{section3Image}</div>
        
        <div>{section4Image}</div>
        <div>{section4Text}</div>
      </div> */}
    </div>
  );
}
