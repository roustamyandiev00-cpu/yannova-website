import type { LocalSeoService } from "@/lib/data/local-seo";

export interface LocalProofProject {
  id: string;
  citySlug: string;
  cityName: string;
  title: string;
  description: string;
  imageUrl: string;
  result: string;
  serviceSlugs: LocalSeoService["slug"][];
}

export const localProofProjects: LocalProofProject[] = [
  {
    id: "proof-zoersel-gevel",
    citySlug: "zoersel",
    cityName: "Zoersel",
    title: "Gevel en buitenschil opgefrist bij open bebouwing",
    description: "Project rond gevelrenovatie en afwerking met focus op een rustig werfverloop en een strakke buitenzijde.",
    imageUrl: "/images/projects/crepi-1.jpg",
    result: "Nieuwe uitstraling en betere buitenschil voor een woning in Zoersel.",
    serviceSlugs: ["gevelrenovatie", "crepi-gevel", "renovatie"],
  },
  {
    id: "proof-schilde-ramen",
    citySlug: "schilde",
    cityName: "Schilde",
    title: "Ramen en voordeur afgestemd op karakterwoning",
    description: "Vervanging van buitenschrijnwerk met aandacht voor uitstraling, detaillering en isolatiewinst.",
    imageUrl: "/images/projects/replacing_windows_no_people.png",
    result: "Meer comfort en een strakkere gevelaanblik in Schilde.",
    serviceSlugs: ["ramen-deuren", "renovatie"],
  },
  {
    id: "proof-brasschaat-totaal",
    citySlug: "brasschaat",
    cityName: "Brasschaat",
    title: "Buitenschilrenovatie bij residentiële woning",
    description: "Combinatie van ramen, gevel en afwerkingskeuzes met nadruk op duurzame materialen.",
    imageUrl: "/images/projects/Gemini_Generated_Image_bf8tm8bf8tm8bf8t.jpg",
    result: "Coherente renovatiestijl en betere energetische basis.",
    serviceSlugs: ["totaalrenovatie", "renovatie", "ramen-deuren", "gevelrenovatie"],
  },
  {
    id: "proof-malle-renovatie",
    citySlug: "malle",
    cityName: "Malle",
    title: "Gefaseerde renovatie met focus op comfort",
    description: "Praktische renovatiefase waarbij buitenschilwerken en verdere woningverbetering slim op elkaar zijn afgestemd.",
    imageUrl: "/images/projects/renovation_works_example.png",
    result: "Sterkere planning en beter comfort voor een gezinswoning in Malle.",
    serviceSlugs: ["renovatie", "totaalrenovatie"],
  },
  {
    id: "proof-wijnegem-gevel",
    citySlug: "wijnegem",
    cityName: "Wijnegem",
    title: "Gevelrenovatie met moderne afwerking",
    description: "Aanpak gericht op uitstraling, isolatie en een verzorgde aansluiting rond ramen en dorpels.",
    imageUrl: "/images/projects/crepi-patterns.jpg",
    result: "Frissere gevel en duidelijk betere energieprestatie.",
    serviceSlugs: ["gevelrenovatie", "crepi-gevel"],
  },
  {
    id: "proof-antwerpen-ramen",
    citySlug: "antwerpen",
    cityName: "Antwerpen",
    title: "Buitenschrijnwerk vernieuwd in stedelijke context",
    description: "Ramenproject waarbij bereikbaarheid, plaatsing en nette afwerking in een stadspand centraal stonden.",
    imageUrl: "/images/projects/interior_renovation_sliding_doors.png",
    result: "Betere isolatie en geluidsdemping voor een woning in Antwerpen.",
    serviceSlugs: ["ramen-deuren", "renovatie"],
  },
  {
    id: "proof-deurne-ramen",
    citySlug: "deurne",
    cityName: "Deurne",
    title: "PVC ramen vervangen in rijwoning",
    description: "Vernieuwing van buitenschrijnwerk met aandacht voor snelheid, afwerking en dagelijks comfort.",
    imageUrl: "/images/projects/003a3c82-53d0-4c81-8d96-4ae5ad333f15.png",
    result: "Merkbaar minder tocht en een rustigere binnenruimte.",
    serviceSlugs: ["ramen-deuren", "renovatie"],
  },
  {
    id: "proof-merksem-totaal",
    citySlug: "merksem",
    cityName: "Merksem",
    title: "Renovatiewerken slim gefaseerd voor gezinswoning",
    description: "Project waarbij ramen, gevel en algemene renovatiewerken in een haalbare volgorde zijn gepland.",
    imageUrl: "/images/projects/modern_extension_construction.png",
    result: "Meer controle op budget en uitvoering in Merksem.",
    serviceSlugs: ["renovatie", "totaalrenovatie", "gevelrenovatie"],
  },
  {
    id: "proof-kapellen-crepi",
    citySlug: "kapellen",
    cityName: "Kapellen",
    title: "Crepi-gevel met focus op detailafwerking",
    description: "Gevelafwerking afgestemd op een residentiële woning waar esthetiek en duurzaamheid samenkomen.",
    imageUrl: "/images/projects/c67c2ffe-a42b-477f-a67d-10100999c4f0.jpg",
    result: "Strakke buitenzijde en onderhoudsvriendelijk resultaat in Kapellen.",
    serviceSlugs: ["crepi-gevel", "gevelrenovatie"],
  },
  {
    id: "proof-schoten-renovatie",
    citySlug: "schoten",
    cityName: "Schoten",
    title: "Ramen en gevelwerken in één renovatietraject",
    description: "Combinatieproject voor eigenaars die hun woning tegelijk comfortabeler en visueel sterker wilden maken.",
    imageUrl: "/images/projects/Gemini_Generated_Image_4xh3am4xh3am4xh3.jpg",
    result: "Beter geheel tussen ramen, gevel en renovatieplanning.",
    serviceSlugs: ["renovatie", "ramen-deuren", "gevelrenovatie", "totaalrenovatie"],
  },
];

export function getLocalProofProjects(citySlug: string, serviceSlug: LocalSeoService["slug"], limit = 2) {
  const scored = localProofProjects
    .map((project) => {
      let score = 0;

      if (project.citySlug === citySlug) {
        score += 3;
      }

      if (project.serviceSlugs.includes(serviceSlug)) {
        score += 2;
      }

      return { project, score };
    })
    .sort((left, right) => right.score - left.score);

  return scored.slice(0, limit).map((entry) => entry.project);
}
