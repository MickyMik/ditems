import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";
import useIntersection from "@/hooks/use-intersection";
import SectionTitle from "@/components/SectionTitle";

const Experience = () => {
  const { t } = useTranslation();
  const [timelineRef, timelineVisible] = useIntersection({ threshold: 0.05 });

  const experiences = [
    {
      title: "AZURE DATA ENGINEER",
      company: "CAMRMIGNAC — ASSET MANAGEMENT",
      location: "Paris, France",
      period: "10/2025 - Present",
      description: "Migration of several ssis packages to Azure Data Factory. Building solution to answer business projects and needs.",
      achievements: [
        "Project management – Gathering, analysis, and translation of business requirements into suitable data solutions",
        "Python development of data retrieval pipelines from APIs",
        "Setup of Test SQL flows based on business rules",
        "Design and implementation of data models",
        "SSIS to ADF migration & optimization",
        "ADF pipeline for data collection via APIs (Azure APIM) & Azure Function",
        "Evolutionary maintenance of SSIS solutions & optimization",
        "Control-M for job orchestration",
      ],
      technologies: ["PYTHON", "ADF", "AZ DEVOPS", "AZ SQL DB", "POSTMAN", "AZURE APIM", "AZURE FUNCTION", "CONTROL-M"],
    },
    {
      title: "JUNIOR CLOUD DATA ARCHITECT – AZURE DATA ENGINEER",
      company: "HAGER GROUP — ELECTRICAL EQUIPEMENT MANUFACTURER",
      location: "Paris, France",
      period: "03/2025 - 10/2025",
      description: "Collaborated with Cloud Data Architect to build a 360° customer view through ADF pipelines, Power BI reports, and Azure AI Search.",
      achievements: [
        "Designed and implemented data models using the medallion architecture",
        "Developed Fabric pipelines (Dataverse & Eloqua & Dynamics)",
        "Built Power BI / Fabric reports - Dax / M - Direct Lake",
        "Performed data reconciliation to achieve a 360° customer view ( Azure Ia Search & Azure Foundry )",
        "Optimized processes for better efficiency",
        "Wrote technical specifications",
        "Created release pipelines using Azure DevOps",
        "Using of LLM for profil reconciliation (all-MiniLM-L6-v2)",
      ],
      technologies: ["PYTHON", "MS FABRICS", "ADF", "SYNAPSE", "AZ DEVOPS", "AZ IA SEARCH", "AZ FOUNDRY", "AZ SQL DB", "POSTMAN"],
    },
    {
      title: "TECH LEAD DATA MSBI – AZURE DATA ENGINEER – AZURE DATAOPS",
      company: "VIDAL GROUP — MEDICAL PUBLISHER & HEALTHCARE DATA",
      location: "Issy-les-moulineaux, France",
      period: "06/2019 - 03/2025",
      description: "Led technical team and managed end-to-end data solutions, including ADF pipeline development, SSIS automation, Power BI reporting, hybrid integration runtime configuration, database migrations, and SQL Server upgrades.",
      achievements: [
        "Technical team management, fostering collaboration and increasing overall productivity by 20%.",
        "Facilitation of Scrum ceremonies to ensure team coordination and smooth progress of deliverables.",
        "Supervision of the production cycle, guaranteeing 100% on-time deliveries within the allotted deadlines.",
        "Development & release planning across the different environments (CI/CD), improving traceability.",
        "Development of optimized ADF pipelines, reducing data integration times by 20%.",
        "Configuration of IRs (Integration Runtimes) for processing in a hybrid architecture, reducing operating costs.",
        "Migration of on-premise databases to Azure SQL Database (ADMA).",
        "Migration from SQL Server 2005 to SQL Server 2019 Cluster Always On Failover with routing list, ensuring high availability.",
        "Data warehouse modeling in Star schema or Medallion architecture.",
        "Migration from SQL Server 2008 R2 to SQL Server 2016, improving system stability and reducing incidents.",
        "Development of interactive Power BI reports, in PBIR format with versioning on Azure DevOps.",
        "Installation and configuration of all SQL / MySQL / SQLite servers for the data department.",
        "Standardization of SQL Server installations, ensuring uniform SQL server configurations.",
        "Integration of unit tests (tSQLt) across all production environments, ensuring consistency of business rules.",
        "Design, automation, optimization, and scheduling of SSIS and SSRS flows.",
        "Design and maintenance of tabular cubes on SSAS and Azure Analysis Services.",
        "Optimization of DAX measures, reducing calculation times by 20% for complex analyses.",
        "Implementation of RLS/OLS/CLS on tabular cubes.",
        "Configuration and monitoring of jobs / deadlocks.",
        "Development of Databricks pipelines (DLT).",
        "Development of notebooks and SQL scripts in Azure Synapse.",
        "Optimization of SQL processes and servers, increasing overall database performance by 35%.",
        "Standardization of containerized database delivery (Docker) on Nexus, increasing deployment reliability.",
      ],
      technologies: ["PYTHON", "SSIS", "SSRS", "ADF", "DOCKER", "DEVOPS", "SSAS", "POWER BI", "TSQLT", "DATABRICKS", "SQL SERVER", "AZ SQL DB"],
    },
    {
      title: "SENIOR MSBI DEVELOPPER - AZURE DATA ENGINEER",
      company: "COVAGE - TELECOM OPERATOR",
      location: "Sèvre, France",
      period: "10/2018 – 06/2019",
      description: "Built data pipelines, created reports, managed ETL workflows, and optimized servers.",
      achievements: [
        "Development of optimized ADF pipelines, reducing data processing times by 20%.",
        "Development of cloud Power BI reports in DAX / M, supporting strategic decision-making.",
        "Design, automation, optimization, and scheduling of SSIS and SSAS flows.",
        "Optimization of SQL Server configurations, reducing complex query times by 40%.",
        "Writing of technical specifications.",
      ],
      technologies: ["ADF", "SSIS", "SQL SERVER", "POWER BI", "AZ SQL DB", "MYSQL"],
    },
    {
      title: "CONFIRMED MSBI DEVELOPPER",
      company: "PHILIP MORRIS FRANCE - TOBACCO INDUSTRY",
      location: "La Defense, France",
      period: "06/2018 – 10/2018",
      description: "Migration of 100 SSIS packages from SSIS 2008 R2 to SSIS 2016 and schedule using Control-M.",
      achievements: [
        "Migrated 100 SSIS packages from SSIS 2008 R2 to SSIS 2016 using Attunity",
        "Implemented package deployment strategy across multiple environments",
        "Optimized SQL Server processes for improved performance",
        "Scheduled jobs using Control-M",
      ],
      technologies: ["SSIS", "SQL SERVER", "ATTUNITY", "ORACLE", "CTRL-M"],
    },
    {
      title: "CONFIRMED MSBI DEVELOPPER",
      company: "LA MUTUELLE FAMILIALE  - INSURANCE",
      location: "Paris, France",
      period: "09/2016 – 06/2018",
      description: "Maintaining existing systems, optimizing data flows, and designing BI models for the accounting and actuarial departments.",
      achievements: [
        "Developed and automated ETL workflows and strategic reports (SSIS, SSRS, Excel)",
        "Migrated data warehouse from SQL Server 2008 R2 to SQL Server 2016",
        "Optimized SQL query performance in the CRM user interface",
        "Created data feed pipelines for a mobile application",
        "Trained users on Power Pivot and tabular cube utilization",
      ],
      technologies: ["SSIS", "SQL SERVER", "SSAS", "SSRS", "POWER PIVOT"],
    },
    {
      title: "JUNIOR MSBI DEVELOPPER",
      company: "LIEBHERR-MINING EQUIPMENT - HEAVY MACHINERY MANUFACTURER",
      location: "Colmar, France",
      period: "01/2016 – 09/2016",
      description: "Developed and maintained Business Intelligence solutions using MSBI stack to deliver reliable, data-driven insights.",
      achievements: [
        "Coding and deployment of efficient ETL processes using SSIS 2008 R2",
        "Development of strategic SSRS reports for the production department",
        "Implementation of OLAP cubes and tabular models using SSAS 2014",
        "Optimized database queries improving application performance by 3x",
      ],
      technologies: ["SSIS", "SQL SERVER", "SSAS", "SSRS"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle text={t("experience.title")} subtitle={t("experience.subtitle")} />

          {/* Timeline */}
          <div ref={timelineRef} className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-border/50 overflow-hidden">
              <div
                className="w-full bg-gradient-primary origin-top"
                style={{
                  height: timelineVisible ? "100%" : "0%",
                  transition: "height 2s ease-out 0.2s",
                }}
              />
            </div>

            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-12 md:pl-16"
                  style={{
                    opacity: timelineVisible ? 1 : 0,
                    transform: timelineVisible ? "translateX(0)" : "translateX(-20px)",
                    transition: `opacity 0.5s ease-out ${index * 0.12}s, transform 0.5s ease-out ${index * 0.12}s`,
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-1 md:left-3 top-7 w-6 h-6 rounded-full bg-white border-2 border-primary shadow-glow flex items-center justify-center"
                    style={{
                      transform: timelineVisible ? "scale(1)" : "scale(0)",
                      transition: `transform 0.3s ease-out ${index * 0.12 + 0.1}s`,
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  <Card className="hover:shadow-hover transition-all duration-300 border-border/50 group">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-navy mb-1 group-hover:text-primary transition-colors duration-200">
                            {exp.title}
                          </h3>
                          <h4 className="text-base text-primary font-semibold mb-2">{exp.company}</h4>
                          <div className="flex flex-wrap gap-3 text-muted-foreground text-sm">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-3.5 h-3.5" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{exp.description}</p>

                      <div className="mb-5">
                        <h5 className="font-semibold text-navy text-sm mb-3">{t("experience.achievements")}</h5>
                        <ul className="space-y-1.5">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold text-navy text-sm mb-3">{t("experience.technologies")}</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="bg-primary/10 text-primary border border-primary/20 text-xs hover:bg-primary hover:text-white transition-colors duration-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
