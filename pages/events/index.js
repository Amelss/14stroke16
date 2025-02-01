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
    order: "sys.createdAt",
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
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto mt-10 px-3 flex-grow flex items-center justify-center">
        {/* Centered "No upcoming events" message */}
        {event.length === 0 ? (
          <div className="text-center py-6">
            <h1 className="text-2xl font-bold text-gray-400">
              THERE ARE NO UPCOMING EVENTS
            </h1>
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
