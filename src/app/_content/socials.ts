import { CV_FILE } from "@/app/_content/site";

export type Social = {
  name: string;
  handle: string;
  url: string;
  download?: string;
};

export const socials: Social[] = [
  {
    name: "GitHub",
    handle: "@guisilva10",
    url: "https://github.com/guisilva10",
  },
  {
    name: "LinkedIn",
    handle: "Guilherme Willem",
    url: "https://www.linkedin.com/in/guilhermesilvawww/",
  },
  {
    name: "Instagram",
    handle: "@owillemwww",
    url: "https://instagram.com/owillemwww",
  },
  {
    name: "Currículo",
    handle: "Baixar PDF",
    url: CV_FILE,
    download: "Curriculo-Guilherme-Willem.pdf",
  },
];
