import "twin.macro";
import SunIcon from "../../../assets/sun.svg";
import PrinterIcon from "../../../assets/printer.svg";
import MoonIcon from "../../../assets/moon.svg";
import MonitorIcon from "../../../assets/monitor.svg";

export const SystemThemeIcon = () => <MonitorIcon tw="w-5 h-5" />;
export const DarkThemeIcon = () => <MoonIcon tw="w-5 h-5" />;
export const LightThemeIcon = () => <SunIcon tw="w-5 h-5" />;
export const PrintIcon = () => <PrinterIcon tw="w-5 h-5" />;
