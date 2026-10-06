export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://devtoria-confesso.vercel.app/sitemap.xml",
  };
}