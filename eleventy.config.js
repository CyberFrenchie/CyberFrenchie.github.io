export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

  eleventyConfig.addFilter("readableDate", (value) => {
    const date = value instanceof Date ? value : new Date(value);
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Europe/London"
    }).format(date);
  });

  eleventyConfig.addFilter("isoDate", (value) => {
    const date = value instanceof Date ? value : new Date(value);
    return date.toISOString();
  });

  eleventyConfig.addFilter("limit", (items, count) => (items || []).slice(0, count));

  eleventyConfig.addCollection("writing", (api) =>
    api.getFilteredByTag("writing").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("reports", (api) =>
    api.getFilteredByTag("report").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("cveResearch", (api) =>
    api.getFilteredByTag("cve-research").sort((a, b) => b.date - a.date)
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
