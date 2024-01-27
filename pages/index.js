import { createClient } from "contentful";
import HomepageArticle from "@/components/HomepageArticle";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });


    const res = await client.getEntries({
        content_type: "article"
      });

   return {
    props: {
      articles: res.items
    }
  }
  
}
  
export default function Home({articles}) {
  console.log("fetched articles:", articles);
  return (
    <div>
      <h1 className="text-pink-500">Hello</h1>
      <div>
        {articles.map((article) => (
          <HomepageArticle key={article.sys.id} article={article} />
        ))}
      </div>
    </div>
  );
}
