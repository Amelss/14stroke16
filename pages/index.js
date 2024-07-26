import { createClient } from "contentful";
import HomepageArticle from "@/components/HomepageArticle";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });


    const res = await client.getEntries({
      content_type: "article",
      order: "-sys.createdAt",
    });

   return {
     props: {
       articles: res.items,
     },
     revalidate: 10,
   };
  
}
  
export default function Home({articles}) {

  return (
    <div>
      <div>
        {articles.slice(0,1).map((article) => (
          <HomepageArticle key={article.sys.id} article={article} />
        ))}
      </div>
    </div>
  );
}
