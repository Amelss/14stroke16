import { createClient } from "contentful";
import MasonryGrid from "@/components/MasonryGrid";
import CommunityCard from "@/components/CommunityCard"


export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "community",
  });

  return {
    props: {
      communities: res.items,
    },
    revalidate: 10,
  };
}



export default function CommunityHome({communities}) {
    return (
      <div>
        <div className="container mx-auto mt-10 px-3">
          <h1 className="text-2xl font-bold py-6">COMMUNITY</h1>
          <MasonryGrid>
            {communities.map((communityArticle) => (
              <div key={communityArticle.sys.id} className="masonry-item">
                <CommunityCard communityArticle={communityArticle} />
              </div>
            ))}
          </MasonryGrid>
        </div>
      </div>
    );
}
