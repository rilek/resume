import React from "react";
import "twin.macro";
import { useTranslation } from "react-i18next";
import { map } from "lodash";
import LinkedinIcon from "../assets/linkedin.svg";
import GithubIcon from "../assets/github.svg";

const Sidebar = () => {
  const { t } = useTranslation("sidebar");

  return (
    <ul>
      <li>
        <h3>{t("email")}</h3>
        <a href="mailto:rileczko@gmail.com">rileczko@gmail.com</a>
      </li>
      <li>
        <h3>{t("webpage")}</h3>
        <a href="https://rileczko.com">rileczko.com</a>
      </li>
      <li>
        <h3>{t("links")}</h3>
        <a
          href="https://www.linkedin.com/in/rafa%C5%82-ileczko-1a7727114/"
          data-short-url="bit.ly/3JiTv61"
        >
          <LinkedinIcon width="16" height="18" />
          <span tw="print:hidden">LinkedIn</span>
        </a>
        <a href="https://github.com/rilek" data-short-url="bit.ly/3q7b2Xd">
          <GithubIcon width="16" height="18" />
          <span tw="print:hidden">Github</span>
        </a>
      </li>
      <li>
        <h3>{t("languages")}</h3>
        <p>
          {map(t("languages-list"), (str) => (
            <>
              {str}
              <br />
            </>
          ))}
        </p>
      </li>
    </ul>
  );
};

export default Sidebar;
