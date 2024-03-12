import { createClient } from "contentful";
import ArticleCard from "@/components/ArticleCard";



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
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4 my-10 px-5 2xl:items-center">
        {articles.map((article) => (
          <ArticleCard key={article.sys.id} article={article} />
        ))}
      </div>
    </div>
  );
  
}
