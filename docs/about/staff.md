---
lastUpdated: false
---

<script setup>
  import { VPTeamMembers } from 'vitepress/theme'

  const members = [
    {
      avatar: 'https://avatars.githubusercontent.com/u/74470787?v=4',
      name: 'Dave Mount',
      title: 'Founder',
      links: [
        { icon: 'x', link: 'https://x.com/WeAreZenZen'},
        { icon: 'linkedin', link: 'https://www.linkedin.com/in/davemount/'},
        { icon: 'github', link: 'https://github.com/blueisgreen'},
      ]
    },
    {
      avatar: 'https://avatars.githubusercontent.com/u/157925230?v=4',
      name: 'Zanzibar',
      title: 'Nuclear Hero',
      links: [
        { icon: 'x', link: 'https://x.com/ZanzibarNuclear'},
        { icon: 'github', link: 'https://github.com/ZanzibarNuclear'},
      ]
    },
    ]
</script>
<style>
.libutton {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 7px;
    text-align: center;
    outline: none;
    text-decoration: none !important;
    color: #ffffff !important;
    width: 200px;
    height: 32px;
    border-radius: 16px;
    background-color: #0A66C2;
    font-family: "SF Pro Text", Helvetica, sans-serif;
  }
</style>

# Our Mindhive

<VPTeamMembers size="small" :members="members" />
