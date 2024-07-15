import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Nuclear Ambitions",
  description:
    "Highlighting the amazing potential of nuclear energy to empower humanity to thrive.",
  themeConfig: {
    logo: "/images/na-logo-full-tm.png",
    siteTitle: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
    ],
    sidebar: [
      {
        text: "Learn More",
        items: [
          { text: "About Nuclear Ambitions", link: "/about/" },
          {
            text: "World of Nuclear",
            link: "/about/world-of-nuclear",
          },
          { text: "Terms of Use", link: "/legal/terms-of-use" },
          { text: "Privacy Policy", link: "/legal/privacy-policy" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/ZanzibarNuclear" },
      { icon: "x", link: "https://x.com/ZanzibarNuclear" },
    ],
  },
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
});
