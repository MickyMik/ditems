import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Lock } from "lucide-react";
import { useTranslation } from "react-i18next";
import useIntersection from "@/hooks/use-intersection";
import SectionTitle from "@/components/SectionTitle";
import TiltCard from "@/components/TiltCard";

const Work = () => {
  const { t } = useTranslation();
  const [gridRef, gridVisible] = useIntersection();

  const projects = [
    {
      title: "Ditems Portfolio",
      description: "Personal portfolio and CV website built with React, TypeScript, Vite and shadcn/ui. Features scroll animations, bilingual support (FR/EN), CV download, and contact form via EmailJS.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "EmailJS", "i18next"],
      features: [
        "Bilingual UI (FR/EN) with automatic browser language detection",
        "Scroll-triggered animations via IntersectionObserver",
        "Contact form with Zod validation and rate limiting",
        "Automated CI/CD deployment to GitHub Pages"
      ],
      demoUrl: "https://ditems.fr",
      githubUrl: "https://github.com/MickyMik/ditems-data-craft",
      isPublic: true
    },
    {
      title: "360° Customer Intelligence Platform",
      description: "End-to-end data platform providing a unified 360° customer view by integrating data from Dataverse, Eloqua, Dynamics 365, and Synapse Analytics through medallion architecture pipelines.",
      technologies: ["Azure Data Factory", "Azure Synapse", "Azure AI Search", "Power BI", "Azure DevOps", "Python"],
      features: [
        "Medallion architecture (Bronze / Silver / Gold layers)",
        "Multi-source integration: Dataverse, Eloqua, Dynamics 365",
        "Semantic search layer via Azure AI Search",
        "Automated CI/CD release pipelines with Azure DevOps"
      ],
      demoUrl: null,
      githubUrl: null,
      isPublic: false
    },
    {
      title: "NYC Analytics",
      description: "Mini end-to-end analytics project built on Microsoft Fabric, analyzing New York City data through a full pipeline from data modeling to interactive dashboarding.",
      technologies: ["Microsoft Fabric", "Power BI", "Data Modeling", "Dataflow Gen2", "DAX"],
      features: [
        "End-to-end Microsoft Fabric pipeline (ingestion to reporting)",
        "Data modeling with a structured semantic model",
        "Interactive Power BI dashboards for NYC data insights",
        "DAX measures for key analytics metrics"
      ],
      demoUrl: null,
      githubUrl: "https://github.com/MickyMik/NYC-Analytics",
      isPublic: true
    }
  ];

  return (
    <section id="work" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle text={t("work.title")} subtitle={t("work.subtitle")} />

          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <TiltCard
                key={index}
                intensity={6}
                style={{
                  opacity: gridVisible ? 1 : 0,
                  transform: gridVisible ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.5s ease-out ${index * 0.15}s, transform 0.5s ease-out ${index * 0.15}s`,
                }}
              >
              <Card
                className="shimmer-card overflow-hidden hover:shadow-hover transition-shadow duration-300 h-full">
                <div className="aspect-video bg-gradient-primary relative overflow-hidden">
                  <div className="absolute inset-0 bg-navy/20 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        {project.isPublic ? <ExternalLink className="w-8 h-8" /> : <Lock className="w-8 h-8" />}
                      </div>
                      <h3 className="text-xl font-bold px-4">{project.title}</h3>
                      {!project.isPublic && (
                        <span className="mt-2 inline-block text-xs bg-white/20 rounded-full px-3 py-1">
                          {t("work.professional")}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">{t("work.keyFeatures")}</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">{t("work.technologies")}</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-blue-light text-foreground dark:bg-primary/20 dark:text-primary text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    {project.demoUrl && (
                      <Button variant="default" size="sm" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                          <ExternalLink className="w-4 h-4" />
                          <span>{t("work.liveDemo")}</span>
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                          <Github className="w-4 h-4" />
                          <span>{t("work.code")}</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
              </TiltCard>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Work;
