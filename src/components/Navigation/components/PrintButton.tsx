import { useTranslation } from "react-i18next";
import { Box, Button } from "../../../components/Common/Common";
import { PrintIcon } from "./Icons";

export const PrintButton = () => {
  const { t } = useTranslation("navigation");
  const onClick = () => window.print();

  return (
    <Box>
      <Button title={t("print.title")} onClick={onClick}>
        <PrintIcon />
      </Button>
    </Box>
  );
};
