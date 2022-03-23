import { isArray, map } from "lodash";
import { useTranslation } from "react-i18next";
import { SubsectionTranslation } from "src/types/translations";
import { ContentList } from "../Common/Common";
import { Section } from "../Common/Section";
import { Subsection } from "../Common/Subsection";

interface Props {
  i18nNS: string;
}

const TranslatedSection = ({ i18nNS }: Props) => {
  const { t } = useTranslation(i18nNS);
  const sections = t("sections") as SubsectionTranslation[];

  return (
    <Section title={t("title")}>
      {map(sections, ({ title, subtitle, content }) => (
        <Subsection title={title} subtitle={subtitle} key={title}>
          {isArray(content) ? <ContentList list={content} /> : content}
        </Subsection>
      ))}
    </Section>
  );
};

export default TranslatedSection;
