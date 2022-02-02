import styled from "@emotion/styled";
import { map } from "lodash";
import * as React from "react";
import tw from "twin.macro";

const Wrapper = styled.main`
  ${tw`max-w-6xl mx-24 py-12`}

  a {
    ${tw`text-blue-700`}
    transition: color 0.15s;
    &:hover {
      ${tw`text-blue-500`}
    }
  }

  @media print {
    margin: 0;
    padding: 0;
  }
`;

const Grid = styled.div`
  ${tw`grid grid-cols-2 grid-rows-2 gap-x-12`}
  grid-template-columns: 250px auto;
  grid-template-rows: auto;

  @media print {
    grid-template-columns: 200px auto;
  }
`;

const GridItem = styled.div<{ top?: boolean }>`
  ${({ top }) => top && tw`border-b-8 py-4 align-self[flex-end]`}
`;

const Header = styled.header``;
const Title = styled.h1`
  ${tw`text-4xl font-black text-gray-900`}
`;
const Subtitle = styled.h2`
  ${tw`text-xl text-gray-500 `}
`;

const List = styled.ul`
  ${tw`py-3`}
`;
const ListItem = styled.li`
  ${tw`py-3`}
`;
const ListItemTitle = styled.h3`
  ${tw`mb-1`}
`;
const ListItemContent = styled.span`
  ${tw`text-sm`}
`;

const BulletList = styled.ul`
  ${tw`list-disc`}
`;
const BulletListItem = styled.li`
  ${tw`ml-4`}
`;

const Separator = styled.span`
  ${tw`text-gray-300`}
  ::before {
    content: "|";
  }
`;

const Section = styled.section`
  :not(:first-of-type) {
    ${tw`border-t-8`}
  }

  page-break-inside: avoid;
`;
const SectionHeader = styled.header`
  ${tw`py-4`}

  page-break-inside: avoid;
`;
const SectionTitle = styled.h3`
  ${tw`font-light text-3xl`}
`;
const SectionContent = styled.div``;

const Subsection = styled.section`
  ${tw`border-t-2`}

  page-break-inside: avoid;
`;
const SubsectionHeader = styled.header`
  ${tw`py-2`}
`;
const SubsectionTitle = styled.h3`
  ${tw`text-lg font-medium`}
`;
const SubsectionDate = styled.h4`
  ${tw`text-gray-500`}
`;
const SubsectionContent = styled.p`
  ${tw`pb-4`}
`;

const featuresList: Record<"title" | "content", string | JSX.Element>[] = [
  {
    title: "Adres email",
    content: <a href="mailto:rileczko@gmail.com">rileczko@gmail.com</a>,
  },
  {
    title: "Strona internetowa",
    content: <a href="https://rileczko.com">rileczko.com</a>,
  },
  {
    title: "Linki",
    content: (
      <div>
        <a href="https://www.linkedin.com/in/rafa%C5%82-ileczko-1a7727114/">
          LinkedIn
        </a>
        <br />
        <a href="https://github.com/rilek">Github</a>
      </div>
    ),
  },
  {
    title: "Języki",
    content: (
      <div>
        Polski <br />
        Angielski - C1 <br />
        Francuski - A1
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
    title: "Doświadczenie",
    subsections: [
      {
        title: "CTO / Co-Founder",
        company: "RWS Sp. z o.o",
        date: "VII 2021 - teraz",
      },
      {
        title: "Lead developer",
        company: "Retailic Sp. z o.o.o",
        date: "2020 - teraz",
        content: (
          <BulletList>
            <BulletListItem>
              Projektowanie architektury rozwiązań chmurowych;
            </BulletListItem>
            <BulletListItem>
              Wsparcie merytoryczne z perspektywy technologii podczas planowania strategii biznesowych;
            </BulletListItem>
            <BulletListItem>
              Podejmowanie kluczowych decyzji technologicznych;
            </BulletListItem>
            <BulletListItem>
              Mentoring młodszych stażem programistów;
            </BulletListItem>
            <BulletListItem>
              Zarządzanie projektem IT.
            </BulletListItem>
          </BulletList>
        ),
      },
      {
        title: "Senior Software Developer | Data Engineer",
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
        // "Rozwijanie i wsparcie w tworzeniu aplikacji e-commerce opartych o frameworki ReactJS oraz AngularJS. Wsparcie merytoryczne podczas planowania strategii biznesowych. Realizacja innych aplikacji opartych o języki programowania Clojure, JavaScript i Python.",
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
          "ReactJS, Rum, React Native, Node.JS, Electron, .Net Core, MSSQL, PostgreSQL, ElasticSearch, Apache Kafka, Storybook",
      },
    ],
  },
];

// markup
const IndexPage = () => {
  return (
    <Wrapper>
      <Grid>
        <GridItem tw="grid-column[1/2] grid-row[1]" top>
          <Header>
            <Title>Rafał Ileczko</Title>
          </Header>
        </GridItem>
        <GridItem tw="grid-row[1] grid-column[2]" top>
          <Subtitle>
            Architekt systemów IT <Separator /> Programista <Separator />{" "}
            Inżynier danych
          </Subtitle>
        </GridItem>
        <GridItem tw="grid-row[2] grid-column[1]">
          <List>
            {map(featuresList, ({ title, content }, i) => (
              <ListItem key={i}>
                <ListItemTitle>{title}</ListItemTitle>
                <ListItemContent>{content}</ListItemContent>
              </ListItem>
            ))}
          </List>
        </GridItem>
        <GridItem tw="grid-row[2] grid-column[2]">
          {map(sections, ({ title, subsections }) => (
            <Section>
              <SectionHeader>
                <SectionTitle>{title}</SectionTitle>
              </SectionHeader>
              <SectionContent>
                {map(subsections, ({ title, company, content, date }, i) => (
                  <Subsection>
                    <SubsectionHeader>
                      <SubsectionTitle>{title}</SubsectionTitle>
                      {(date || company) && (
                        <SubsectionDate>
                          {company ? `${company + (date ? " · " : "")}` : ""}
                          {date}
                        </SubsectionDate>
                      )}
                    </SubsectionHeader>
                    {content && (
                      <SubsectionContent>{content}</SubsectionContent>
                    )}
                  </Subsection>
                ))}
              </SectionContent>
            </Section>
          ))}
        </GridItem>
      </Grid>
    </Wrapper>
  );
};

export default IndexPage;
