export default async function handler(req, res) {
  const { secret, entryId, slug } = req.query;

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !entryId || !slug) {
    return res
      .status(401)
      .json({ message: "Invalid token or missing parameters" });
  }

  try {
    
    const response = await fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries/${entryId}?access_token=${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`
    );

    if (!response.ok) throw new Error("Failed to fetch entry");

    const entry = await response.json();
    const contentType = entry.sys.contentType.sys.id; 

    console.log("Content Type:", contentType);

    res.setPreviewData({});

   
    let previewPath;
    switch (contentType) {
      case "article":
        previewPath = `/articles/${slug}`;
        break;
      case "community":
        previewPath = `/community/${slug}`;
        break;
      case "event":
        previewPath = `/events/${slug}`;
        break;
      case "gallery":
        previewPath = `/gallery/${slug}`;
        break;
      default:
        return res.status(400).json({ message: "Invalid content type" });
    }

    res.redirect(previewPath);
  } catch (error) {
    console.error("Preview Error:", error);
    res.status(500).json({ message: "Error fetching entry" });
  }
}
