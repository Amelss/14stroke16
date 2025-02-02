export default function handler(req, res) {
  const { secret, slug } = req.query;
  console.log("slug:", slug);
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return res.status(401).json({ message: "Invalid token" });
  }
  res.setPreviewData({});
  res.redirect(`/articles/${slug}`)
  res.redirect(`/community/${slug}`)
  res.redirect(`/events/${slug}`);
  res.redirect(`/gallery/${slug}`);
}
