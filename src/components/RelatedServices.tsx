import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getRelatedServices, ServiceType } from "@/lib/local-seo-helper";

interface RelatedServicesProps {
  currentService: ServiceType;
  city: string;
  citySlug: string;
}

export function RelatedServices({ currentService, city, citySlug }: RelatedServicesProps) {
  const relatedServices = getRelatedServices(currentService, city);

  return (
    <section className="py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-8">
          Bekijk ook onze andere diensten in {city}
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {relatedServices.map((service) => (
            <Link
              key={service.url}
              href={service.url}
              className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-secondary transition-colors">
                {service.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-secondary transition-colors">
                Meer info
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
