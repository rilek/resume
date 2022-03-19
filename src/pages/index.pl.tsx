import { graphql, useStaticQuery } from "gatsby";
import { map } from "lodash";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  BulletList,
  BulletListItem,
  List,
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
  Separator,
  Subsection,
  SubsectionContent,
  SubsectionDate,
  SubsectionHeader,
  SubsectionTitle,
} from "../components/Common";
import { Layout } from "../components/Layout";

const personalData: Record<"title" | "content", string | JSX.Element>[] = [
  {
    title: "Email address",
    content: <a href="mailto:rileczko@gmail.com">rileczko@gmail.com</a>,
  },
  {
    title: "Webpage",
    content: <a href="https://rileczko.com">rileczko.com</a>,
  },
  {
    title: "Links",
    content: (
      <div>
        <a
          href="https://www.linkedin.com/in/rafa%C5%82-ileczko-1a7727114/"
          data-short-url="bit.ly/3JiTv61"
        >
          LinkedIn
        </a>
        <br />
        <a href="https://github.com/rilek" data-short-url="bit.ly/3q7b2Xd">
          Github
        </a>
      </div>
    ),
  },
  {
    title: "Languages",
    content: (
      <div>
        Polish <br />
        English - C1 <br />
        French - A1
      </div>
    ),
  },
];

type SubsectionType = {
  title: string;
  company?: string;
  date?: string;
  content?: string | JSX.Element;
};

type SectionType = {
  title: string;
  subsections: SubsectionType[];
};

const sections: SectionType[] = [
  {
    title: "Experience",
    subsections: [
      {
        title: "CTO / Co-Founder",
        company: "RWS Sp. z o.o",
        date: "VII 2021 - III 2022",
      },
      {
        title: "Lead Developer",
        company: "Retailic Sp. z o.o.o",
        date: "2020 - now",
        content: (
          <BulletList>
            <BulletListItem>
              Designing architecture for cloud based applications
            </BulletListItem>
            <BulletListItem>
              Wsparcie merytoryczne z perspektywy technologii podczas planowania
              strategii biznesowych;
            </BulletListItem>
            <BulletListItem>
              Podejmowanie kluczowych decyzji technologicznych;
            </BulletListItem>
            <BulletListItem>Zarządzanie projektem IT.</BulletListItem>
          </BulletList>
        ),
      },
      {
        title: "Senior Software Developer",
        company: "Retailic Sp. z o.o.o",
        date: "2018 - 2020",
        content: (
          <BulletList>
            <BulletListItem>
              Programowanie biznesowych aplikacji w językach Clojure,
              Javascript, Pyton;
            </BulletListItem>
            <BulletListItem>
              Wsparcie w budowaniu infrastruktry hybrydowej (chmurowej i
              on-premise);
            </BulletListItem>
            <BulletListItem>
              Wsparcie w budowaniu modeli algorytmów głębokiego uczenia
              maszynowego i wizji komputerowej;
            </BulletListItem>
            <BulletListItem>Zarządzanie zespołem programistów.</BulletListItem>
            <BulletListItem>
              Mentoring młodszych stażem programistów;
            </BulletListItem>
          </BulletList>
        ),
      },
      {
        title: "Frontend Developer",
        company: "Retailic Sp. z o.o.o",
        date: "VII 2016 - 2018",
        content: (
          <BulletList>
            <BulletListItem>
              Rozwijanie i wsparcie w tworzeniu aplikacji e-commerce opartych o
              frameworki ReactJS oraz AngularJS;
            </BulletListItem>
            <BulletListItem>
              Realizacja innych aplikacji biznesowych opartych o języki
              programowania Clojure, JavaScript i Python;
            </BulletListItem>
            <BulletListItem>
              Konsultacje wymagań biznoesowych z menedżerami projektu;
            </BulletListItem>
            <BulletListItem>Wyceny prac technologicznych.</BulletListItem>
          </BulletList>
        ),
      },
      {
        title: "Web developer",
        company: "Social Karma Sp. z o.o.",
        date: "X 2015 - VII 2016",
        content: (
          <BulletList>
            <BulletListItem>
              Tworzenie stron internetowych, zarządzanie istniejącymi
              projektami, najczęściej wykorzystującymi CMS Wordpress,
              przyspieszanie działania, optymalizacja pod kątem wyszukiwarek
              internetowych;
            </BulletListItem>
            <BulletListItem>
              Tworzenie projektów graficznych stron internetowych, prezentacji
            </BulletListItem>
          </BulletList>
        ),
      },
    ],
  },
  {
    title: "Edukacja",
    subsections: [
      {
        title: "Informatyka - studia magisterskie",
        company: "Politechnika Rzeszowska",
        date: "2018 - 2019",
      },
      {
        title: "Automatyka i Robotyka - studia inżynierskie",
        date: "2014 - 2018",
        company: "Politechnika Rzeszowska",
      },
      {
        title: "Technik elektronik - specjalizacja Automatyka przemysłowa",
        company: "Zespół Szkół Elektronicznych w Rzeszowie",
        date: "2010 - 2014",
      },
    ],
  },
  {
    title: "Umiejętności",
    subsections: [
      {
        title: "Prowadzenie projektu IT",
        content:
          "Zarządzanie zespołem programistów, wybór technologii i narzędzi, przeprowadzanie wycen, kierowanie strategią technologiczną, analiza ryzyka, optymalizacja",
      },
      {
        title: "Języki programowania",
        content:
          "JavaScript (TypeScript), Clojure (ClojureScript), C#/F#, Python, SQL, C, HTML, CSS",
      },
      {
        title: "Uczenie maszynowe i wizja komputerowa",
        content: "Numpy, Pandas, Scikit-learn, PyTorch; OpenCV",
      },
      {
        title: "Tworzenie aplikacji biznesowych",
        content:
          "ReactJS, Rum, React Native, Node.JS, .Net Core, MSSQL, PostgreSQL, Storybook, Gatsby",
      },
    ],
  },
];

const Sidebar = () => {
  const { t } = useTranslation("sidebar");
  const sections = t("sections");

  console.log(sections)

  return (
    <List>
      <ul>
        {map(personalData, ({ title, content }, i) => (
          <li key={i}>
            <h3>{title}</h3>
            <span>{content}</span>
          </li>
        ))}
      </ul>
    </List>
  );
};

// markup
const IndexPage = (props: any) => {
  const { t } = useTranslation();

  return (
    <Layout title={t("title")} subtitle={t("subtitle")} sidebar={<Sidebar />}>
      {map(sections, ({ title, subsections }, i) => (
        <Section key={i}>
          <SectionHeader>
            <SectionTitle id={title}>{title}</SectionTitle>
          </SectionHeader>
          <SectionContent>
            {map(subsections, ({ title, company, content, date }, i) => (
              <Subsection key={i}>
                <SubsectionHeader>
                  <SubsectionTitle>{title}</SubsectionTitle>
                  {(date || company) && (
                    <SubsectionDate>
                      {company ? `${company + (date ? " · " : "")}` : ""}
                      {date}
                    </SubsectionDate>
                  )}
                </SubsectionHeader>
                {content && <SubsectionContent>{content}</SubsectionContent>}
              </Subsection>
            ))}
          </SectionContent>
        </Section>
      ))}
    </Layout>
  );
};

export default IndexPage;
