import { defineConfig } from "vitepress"

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
            text: "Who We Are",
            link: "/about/staff",
          },
          {
            text: "World of Nuclear (WoN)",
            items: [
              {
                text: "WoN Platform",
                link: "/about/world-of-nuclear",
              },
              {
                text: "Demo (video)",
                link: "/about/demo",
              },
              {
                text: "System Design",
                link: "/won-design/",
              },
              {
                text: "Expansion Plans",
                link: "/won-design/expansion-ideas",
              },
            ]
          },
          { text: "Terms of Use", link: "/legal/terms-of-use" },
          { text: "Privacy Policy", link: "/legal/privacy-policy" },
        ],
      },
    ],
    socialLinks: [
      { icon: "x", link: "https://x.com/ZanzibarNuclear" },
      { icon: 'substack', link: 'https://zanzisnuclearstack.substack.com/' },
      { icon: "github", link: "https://github.com/ZanzibarNuclear" },
    ],
  },
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
})
