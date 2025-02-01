import { createClient } from "contentful";
import MasonryGrid from "@/components/MasonryGrid";
import EventsCard from "@/components/EventsCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "events",
    order: "sys.createdAt"
  });

  return {
    props: {
      event: res.items,
    },
    revalidate: 10,
  };
}

export default function EventsHome({ event }) {
  return (
    <div>
      <div className="container mx-auto mt-10 px-3">
        <h1 className="text-2xl font-bold py-6">UPCOMING EVENTS</h1>
        {event.length === 0 ? (
          <div className="text-center py-6">
            <h1 className="text-2xl font-bold py-6">NO UPCOMING EVENTS</h1>
          </div>
        ) : (
          <MasonryGrid>
            {event.map((newEvent) => (
              <div key={newEvent.sys.id} className="masonry-item">
                <EventsCard newEvent={newEvent} />
              </div>
            ))}
          </MasonryGrid>
        )}
      </div>
    </div>
  );
}
