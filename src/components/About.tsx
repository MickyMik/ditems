import { useRef, useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Cloud, BarChart3, Cpu, Code, Zap, Laptop } from "lucide-react";
import { useTranslation } from "react-i18next";
import useIntersection from "@/hooks/use-intersection";
import SectionTitle from "@/components/SectionTitle";

const SPRING = "cubic-bezier(0.16, 1, 0.3, 1)";

const About = () => {
  const { t } = useTranslation();
  const [skillsRef, skillsVisible] = useIntersection();
  const [strengthsRef, strengthsVisible] = useIntersection();

  /* Scrollytelling intro paragraph */
  const introRef = useRef<HTMLParagraphElement>(null);
  const [introProgress, setIntroProgress] = useState(0);

  const onScroll = useCallback(() => {
    if (!introRef.current) return;
    const { top, height } = introRef.current.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = (vh * 0.75 - top) / (height + vh * 0.25);
    setIntroProgress(Math.max(0, Math.min(1, progress)));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const introText = t("about.intro");
  const introWords = introText.split(" ");
  const litCount = Math.floor(introProgress * introWords.length * 1.1);

  const skills = [
    { name: "Azure", level: 90, icon: Cloud },
    { name: "Data Visualization", level: 80, icon: BarChart3 },
    { name: "DataOps", level: 90, icon: Cpu },
    { name: "Docker", level: 90, icon: Laptop },
    { name: "MS Fabric", level: 70, icon: Zap },
    { name: "Python", level: 75, icon: Code },
    { name: "SQL", level: 95, icon: Database },
  ];

  const strengths = [
    { icon: Database, titleKey: "about.strengthArchitectureTitle", textKey: "about.strengthArchitectureText" },
    { icon: Zap, titleKey: "about.strengthRealtimeTitle", textKey: "about.strengthRealtimeText" },
    { icon: BarChart3, titleKey: "about.strengthBiTitle", textKey: "about.strengthBiText" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle text={t("about.title")} />

          {/* Scrollytelling paragraph — words light up as you read */}
          <p
            ref={introRef}
            className="leading-relaxed max-w-3xl mx-auto text-center mb-12 text-base md:text-lg"
          >
            {introWords.map((word, i) => (
              <span
                key={i}
                style={{
                  color: i < litCount
                    ? "hsl(var(--foreground))"
                    : "hsl(var(--muted-foreground))",
                  transition: "color 0.25s ease",
                }}
              >
                {word}{" "}
              </span>
            ))}
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-5">
              <h3 className="text-2xl font-bold text-foreground">{t("about.journeyTitle")}</h3>
              <p className="text-muted-foreground leading-relaxed">{t("about.journey1")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("about.journey2")}</p>
            </div>

            <div
              ref={skillsRef}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
              style={{
                opacity: skillsVisible ? 1 : 0,
                transform: skillsVisible ? "translateY(0) scale(1)" : "translateY(32px) scale(0.97)",
                transition: `opacity 0.7s ease, transform 0.8s ${SPRING}`,
              }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6">{t("about.skillsTitle")}</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <skill.icon className="w-4 h-4 text-primary" />
                        <span className="font-medium text-foreground text-sm">{skill.name}</span>
                      </div>
                      <span
                        className={`text-sm font-semibold text-primary transition-all duration-700 ${
                          skillsVisible ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ transitionDelay: `${index * 100 + 200}ms` }}
                      >
                        {skillsVisible ? `${skill.level}%` : "0%"}
                      </span>
                    </div>
                    <div className="w-full bg-blue-light/50 h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary rounded-full"
                        style={{
                          width: skillsVisible ? `${skill.level}%` : "0%",
                          transition: `width 1.2s ${SPRING} ${index * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div ref={strengthsRef} className="grid md:grid-cols-3 gap-8">
            {strengths.map(({ icon: Icon, titleKey, textKey }, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-hover transition-all duration-300 border-border/50 group hover:-translate-y-1"
                style={{
                  opacity: strengthsVisible ? 1 : 0,
                  transform: strengthsVisible ? "translateY(0) scale(1)" : "translateY(32px) scale(0.96)",
                  transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.7s ${SPRING} ${index * 0.15}s`,
                }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{t(titleKey)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(textKey)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
