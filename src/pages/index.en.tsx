// import { graphql, useStaticQuery } from "gatsby";
// import { map } from "lodash";
import React from "react";
// import {
//   Section,
//   SectionHeader,
//   SectionTitle,
//   SectionContent,
// } from "src/components/Common/Section";
// import {
//   Subsection,
//   SubsectionHeader,
//   SubsectionTitle,
//   SubsectionDate,
//   SubsectionContent,
// } from "src/components/Common/Subsection";
// import { BulletList, BulletListItem, List } from "../components/Common/Common";
// import { Layout } from "../components/Layout/Layout";

// const personalData: Record<"title" | "content", string | JSX.Element>[] = [
//   {
//     title: "Adres email",
//     content: <a href="mailto:rileczko@gmail.com">rileczko@gmail.com</a>,
//   },
//   {
//     title: "Strona internetowa",
//     content: <a href="https://rileczko.com">rileczko.com</a>,
//   },
//   {
//     title: "Linki",
//     content: (
//       <div>
//         <a
//           href="https://www.linkedin.com/in/rafa%C5%82-ileczko-1a7727114/"
//           data-short-url="bit.ly/3JiTv61"
//         >
//           LinkedIn
//         </a>
//         <br />
//         <a href="https://github.com/rilek" data-short-url="bit.ly/3q7b2Xd">
//           Github
//         </a>
//       </div>
//     ),
//   },
//   {
//     title: "Języki",
//     content: (
//       <div>
//         Polski <br />
//         Angielski - C1 <br />
//         Francuski - A1
//       </div>
//     ),
//   },
// ];

// type SubsectionType = {
//   title: string;
//   company?: string;
//   date?: string;
//   content?: string | JSX.Element;
// };

// type SectionType = {
//   title: string;
//   subsections: SubsectionType[];
// };

// const sections: SectionType[] = [
//   {
//     title: "Doświadczenie",
//     subsections: [
//       {
//         title: "CTO / Co-Founder",
//         company: "RWS Sp. z o.o",
//         date: "VII 2021 - teraz",
//       },
//       {
//         title: "Lead developer",
//         company: "Retailic Sp. z o.o.o",
//         date: "2020 - teraz",
//         content: (
//           <BulletList>
//             <BulletListItem>
//               Substantive support from the perspective of technology during
//               planning business strategies;
//             </BulletListItem>
//             <BulletListItem>Making key technological decisions;</BulletListItem>
//             <BulletListItem>Managing IT project</BulletListItem>
//           </BulletList>
//         ),
//       },
//       {
//         title: "Senior Software Developer | Data Engineer",
//         company: "Retailic Sp. z o.o.o",
//         date: "2018 - 2020",
//         content: (
//           <BulletList>
//             <BulletListItem>
//               Developing applications using Clojure, Javascript, Pyton
//               languages;
//             </BulletListItem>
//             <BulletListItem>
//               Supporting creating of hybrid applications (both cloud and
//               on-premise);
//             </BulletListItem>
//             <BulletListItem>
//               Supporting development of Data sciene and Computer Vision platform
//               from frontend perspective;
//             </BulletListItem>
//             <BulletListItem>
//               Leading a team of frontend developers.
//             </BulletListItem>
//             <BulletListItem>Couching younger developers;</BulletListItem>
//           </BulletList>
//         ),
//       },
//       {
//         title: "Frontend Developer",
//         company: "Retailic Sp. z o.o.o",
//         date: "VII 2016 - 2018",
//         content: (
//           <BulletList>
//             <BulletListItem>
//               Developing leading e-commerce platforms based on ReactJS and
//               AngularJS frameworks;
//             </BulletListItem>
//             <BulletListItem>
//               Creating web applications based on programming languages:
//               Clojure(script), Javascript and Python;
//             </BulletListItem>
//             <BulletListItem>
//               Consulting requirements with project management team;
//             </BulletListItem>
//             <BulletListItem>
//               Creating pricing for coding projects.
//             </BulletListItem>
//           </BulletList>
//         ),
//       },
//       {
//         title: "Web developer",
//         company: "Social Karma Sp. z o.o.",
//         date: "X 2015 - VII 2016",
//         content: (
//           <BulletList>
//             <BulletListItem>
//               Creating websites; managing existing ones, mostly based od
//               Wordpress; SEO optimizations; Speed optimizations
//             </BulletListItem>
//             <BulletListItem>
//               Designing websites and other form of digital designs
//             </BulletListItem>
//           </BulletList>
//         ),
//       },
//     ],
//   },
//   {
//     title: "Education",
//     subsections: [
//       {
//         title: "Information Technology - Masters Degree",
//         company: "Rzeszów University of Technology",
//         date: "2018 - 2019",
//       },
//       {
//         title: "Automatics and Robotics - Bachelors",
//         date: "2014 - 2018",
//         company: "Rzeszów University of Technology",
//       },
//       {
//         title: "Electronics Technician - Specialization: Industrial Automation",
//         company: "Electronic School Complex in Rzeszów",
//         date: "2010 - 2014",
//       },
//     ],
//   },
//   {
//     title: "Skills",
//     subsections: [
//       {
//         title: "Managing IT project",
//         content:
//           "Leading team of developers, choosing technology and tools, preparing pricing of IT projects, leading tech strategy, risk analysis, optimizations",
//       },
//       {
//         title: "Programming languages",
//         content:
//           "JavaScript (TypeScript), Clojure (ClojureScript), C#/F#, Python, SQL, C, HTML, CSS",
//       },
//       {
//         title: "Machine Learning and Data Science (fundamentals)",
//         content: "Numpy, Pandas, Scikit-learn, PyTorch; OpenCV",
//       },
//       {
//         title: "Developing Business Applications",
//         content:
//           "ReactJS, Rum, React Native, Node.JS, .Net Core, MSSQL, PostgreSQL, Storybook, Gatsby, Azure",
//       },
//     ],
//   },
// ];

// const title = "Rafał Ileczko";

// const subtitle = <>Lider zespołu | Programista</>;

// const sidebar = (
//   <List>
//     <ul>
//       {map(personalData, ({ title, content }, i) => (
//         <li key={i}>
//           <h3>{title}</h3>
//           <span>{content}</span>
//         </li>
//       ))}
//     </ul>
//   </List>
// );

// // markup
// const IndexPage = (props: any) => {
//   return (
//     <Layout title={title} subtitle={subtitle} sidebar={sidebar}>
//       {map(sections, ({ title, subsections }, i) => (
//         <Section key={i}>
//           <SectionHeader>
//             <SectionTitle id={title}>{title}</SectionTitle>
//           </SectionHeader>
//           <SectionContent>
//             {map(subsections, ({ title, company, content, date }, i) => (
//               <Subsection key={i}>
//                 <SubsectionHeader>
//                   <SubsectionTitle>{title}</SubsectionTitle>
//                   {(date || company) && (
//                     <SubsectionDate>
//                       {company ? `${company + (date ? " · " : "")}` : ""}
//                       {date}
//                     </SubsectionDate>
//                   )}
//                 </SubsectionHeader>
//                 {content && <SubsectionContent>{content}</SubsectionContent>}
//               </Subsection>
//             ))}
//           </SectionContent>
//         </Section>
//       ))}
//     </Layout>
//   );
// };

// export default IndexPage;
