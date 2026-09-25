/*
  EDITE SOMENTE ESTE ARQUIVO para personalizar o conteúdo do portfólio.
  Substitua links com "#" e confirme certificações, cursos, datas e projetos antes de publicar.
*/
const portfolioData = {
  personal: {
    name: "Matheus Belo",
    role: "Custom Software Engineering Analyst",
    location: "Recife, PE, Brasil",
    email: "belo.matheus@outlook.com",
    github: "https://github.com/MatheusBelo",
    linkedin: "https://www.linkedin.com/in/matheus-belo-17b306251/",
    description: "Analista de Engenharia de Software com interesse em aplicações cloud, desenvolvimento backend, automação e soluções escaláveis. Transformo necessidades de negócio em software confiável, com aprendizado contínuo e atenção à qualidade.",
    aboutLead: "Construo soluções de software com foco em clareza, escalabilidade e impacto real.",
    about: [
      "Atuo como Custom Software Engineering Analyst, participando da construção e evolução de soluções de tecnologia em contexto corporativo.",
      "Minha jornada combina engenharia de software, estudos em cloud e desenvolvimento contínuo. Gosto de aprender novas ferramentas, documentar decisões e transformar desafios complexos em entregas simples e sustentáveis."
    ]
  },
  stats: [
    { value: "Cloud", label: "Foco técnico" },
    { value: "Backend", label: "Desenvolvimento" },
    { value: "Recife", label: "Localização" }
  ],
  terminal: [
    ["cargo", "Custom Software Engineering Analyst"],
    ["empresa", "Accenture"],
    ["local", "Recife, Brasil"],
    ["foco", "Cloud + Software Engineering"],
    ["status", "Evolução contínua"]
  ],
  experience: [
    {
      period: "Atual",
      role: "Custom Software Engineering Analyst",
      company: "Accenture",
      description: "Atuação em engenharia de software e soluções corporativas. Personalize este texto com suas responsabilidades, resultados mensuráveis, domínio de negócio e principais contribuições.",
      technologies: ["Software Engineering", "Cloud", "Git", "Agile"]
    }
  ],
  skills: [
    { icon: "☁", category: "Cloud & AWS", items: ["AWS", "Lambda", "API Gateway", "S3", "DynamoDB", "CloudFormation"] },
    { icon: "☁", category: "Cloud & Microsoft", items: ["Microsoft", "Resources Groups", "Azure VM", "CosmosDB", "Azure Resource Manager"] },
    { icon: "⌘", category: "Backend", items: ["Python", "Java", "Spring Boot", "Node.js", "APIs REST", "Microsserviços"] },
    { icon: "◫", category: "Frontend", items: ["JavaScript", "TypeScript", "React", "HTML", "CSS"] },
    { icon: "⚙", category: "DevOps", items: ["Docker","Kubernetes", "GitHub Actions", "CI/CD", "Terraform", "Jenkins"] },
    { icon: "▱", category: "Dados", items: ["PostgreSQL", "MySQL", "DynamoDB"] },
    { icon: "◇", category: "Práticas", items: ["Clean Code", "Git", "Scrum", "Testes", "Documentação"] }
  ],
  certifications: [
    /* Exemplo. Altere o título, emissor, data e link conforme suas credenciais reais. */
    { title: "AWS Cloud Practitioner", issuer: "AWS", credential: "#", icon: "AWS" },
    { title: "AZ 900 - Azure Fundamentals", issuer: "Microsoft", credential: "#", icon: "MCS" },
    { title: "SC 900 - Security, Compliance, and Identity Fundamentals", issuer: "Microsoft", credential: "#", icon: "MCS" }
  ],
  courses: [
    { title: "Adicione o nome do curso", provider: "Plataforma · carga horária", icon: "▹" },
    { title: "Adicione o nome da formação", provider: "Plataforma · ano", icon: "▹" },
    { title: "Adicione uma especialização", provider: "Instituição · ano", icon: "▹" },
    { title: "Adicione outro curso relevante", provider: "Plataforma · ano", icon: "▹" }
  ],
  projects: [
    {
      title: "Sistema Serverless",
      description: "Projeto pessoal de referência para uma API orientada a eventos. Substitua a descrição pelos objetivos, sua contribuição e os resultados reais.",
      technologies: ["AWS Lambda", "API Gateway", "DynamoDB"],
      github: "#", demo: "#"
    },
    {
      title: "API de Gestão",
      description: "API backend organizada em camadas, com persistência de dados e execução em contêiner. Personalize com as funcionalidades reais do projeto.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
      github: "#", demo: "#"
    },
    {
      title: "Aplicação Cloud",
      description: "Aplicação criada para praticar integração entre frontend, serviços de backend e infraestrutura cloud.",
      technologies: ["React", "Node.js", "AWS"],
      github: "#", demo: "#"
    }
  ]
};