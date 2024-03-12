import { createClient } from "contentful";
import ArticleCard from "@/components/ArticleCard";
import MasonryGrid from "@/components/MasonryGrid";



export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "article",
  });

  return {
    props: {
      articles: res.items,
    },
  };
}

export default function viewAll({articles}) {
    return (
      <div className="container mx-auto mt-10 px-3">
        <MasonryGrid>
          {articles.map((article) => (
            <div key={article.sys.id} className="masonry-item">
              <ArticleCard article={article} />
            </div>
          ))}
        </MasonryGrid>
      </div>
    );
  
}
