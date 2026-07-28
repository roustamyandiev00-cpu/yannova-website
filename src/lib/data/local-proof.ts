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
    id: "proof-geraardsbergen-gevel",
    citySlug: "geraardsbergen",
    cityName: "Geraardsbergen",
    title: "Gevel en buitenschil opgefrist bij karakterwoning",
    description: "Project rond gevelrenovatie en afwerking met focus op een rustig werfverloop en een strakke buitenzijde in Geraardsbergen.",
    imageUrl: "/images/projects/crepi-1.jpg",
    result: "Nieuwe uitstraling en betere buitenschil voor een woning in Geraardsbergen.",
    serviceSlugs: ["gevelrenovatie", "crepi-gevel", "renovatie", "crepi", "gevelisolatie"],
  },
  {
    id: "proof-ninove-ramen",
    citySlug: "ninove",
    cityName: "Ninove",
    title: "Ramen en voordeur afgestemd op gezinswoning",
    description: "Vervanging van buitenschrijnwerk met aandacht voor uitstraling, detaillering en isolatiewinst in Ninove.",
    imageUrl: "/images/projects/replacing_windows_no_people.png",
    result: "Meer comfort en een strakkere gevelaanblik in Ninove.",
    serviceSlugs: ["ramen-deuren", "renovatie", "ramen", "deuren"],
  },
  {
    id: "proof-zottegem-totaal",
    citySlug: "zottegem",
    cityName: "Zottegem",
    title: "Buitenschilrenovatie bij residentiële woning",
    description: "Combinatie van ramen, gevel en afwerkingskeuzes met nadruk op duurzame materialen in Zottegem.",
    imageUrl: "/images/projects/Gemini_Generated_Image_bf8tm8bf8tm8bf8t.jpg",
    result: "Coherente renovatiestijl en betere energetische basis.",
    serviceSlugs: ["totaalrenovatie", "renovatie", "ramen-deuren", "gevelrenovatie", "ramen", "deuren", "gevelisolatie"],
  },
  {
    id: "proof-ronse-renovatie",
    citySlug: "ronse",
    cityName: "Ronse",
    title: "Gefaseerde renovatie met focus op comfort",
    description: "Praktische renovatiefase waarbij buitenschilwerken en verdere woningverbetering slim op elkaar zijn afgestemd in Ronse.",
    imageUrl: "/images/projects/renovation_works_example.png",
    result: "Sterkere planning en beter comfort voor een stadswoning in Ronse.",
    serviceSlugs: ["renovatie", "totaalrenovatie"],
  },
  {
    id: "proof-brakel-gevel",
    citySlug: "brakel",
    cityName: "Brakel",
    title: "Gevelrenovatie met moderne crepi-afwerking",
    description: "Aanpak gericht op uitstraling, isolatie en een verzorgde aansluiting rond ramen en dorpels in Brakel.",
    imageUrl: "/images/projects/crepi-patterns.jpg",
    result: "Frissere gevel en duidelijk betere energieprestatie in Brakel.",
    serviceSlugs: ["gevelrenovatie", "crepi-gevel", "crepi", "gevelisolatie"],
  },
  {
    id: "proof-aalst-ramen",
    citySlug: "aalst",
    cityName: "Aalst",
    title: "Buitenschrijnwerk vernieuwd in Aalst",
    description: "Ramenproject waarbij isolatiewaarde, plaatsing en nette afwerking centraal stonden.",
    imageUrl: "/images/projects/interior_renovation_sliding_doors.png",
    result: "Betere isolatie en geluidsdemping voor een woning in Aalst.",
    serviceSlugs: ["ramen-deuren", "renovatie", "ramen", "deuren"],
  },
  {
    id: "proof-lierde-ramen",
    citySlug: "lierde",
    cityName: "Lierde",
    title: "PVC ramen vervangen in halfopen bebouwing",
    description: "Vernieuwing van buitenschrijnwerk met aandacht voor snelheid, afwerking en dagelijks comfort.",
    imageUrl: "/images/projects/003a3c82-53d0-4c81-8d96-4ae5ad333f15.png",
    result: "Merkbaar minder tocht en een rustigere binnenruimte in Lierde.",
    serviceSlugs: ["ramen-deuren", "renovatie", "ramen", "deuren"],
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
