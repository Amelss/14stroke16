export default async function handler(req, res) {
  const { secret, entryId, slug } = req.query;

  console.log("Received entryId:", entryId);
  console.log("Received slug:", slug);

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !entryId || !slug) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const response = await fetch(
    `https://preview.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries/${entryId}?access_token=${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`
  );
  const entry = await response.json();

  if (!response.ok || !entry.sys?.contentType?.sys?.id) {
    return res.status(400).json({ message: "Error fetching entry" });
  }

  const contentType = entry.sys.contentType.sys.id;

  res.setPreviewData({});

  if (contentType === "article") {
    return res.redirect(`/articles/${slug}`);
  }
  if (contentType === "community") {
    return res.redirect(`/community/${slug}`);
  }
  if (contentType === "event") {
    return res.redirect(`/events/${slug}`);
  }
  if (contentType === "gallery") {
    return res.redirect(`/gallery/${slug}`);
  }

  return res.status(400).json({ message: "Invalid content type" });
}
