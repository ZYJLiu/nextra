import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Image src="/logo.png" alt="Logo" width={25} height={25} />
      <span className="ml-[0.4em] font-bold">Anchor</span>
    </>
  ),
  project: {
    link: "https://github.com/ZYJLiu/nextra",
  },
  chat: {
    link: "https://discord.gg/NHHGSXAnXk",
  },
  docsRepositoryBase: "https://github.com/ZYJLiu/nextra/tree/main",
  footer: {
    text: "",
  },
  editLink: {
    text: "Help improve this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    defaultMenuCollapseLevel: 3,
    toggleButton: true,
  },
  darkMode: true,
  toc: {
    backToTop: true,
  },
};

export default config;
