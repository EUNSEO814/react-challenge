import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

const Chart = () => {
  const isDark = useRecoilValue(isDarkAtom);

  return <h1>{isDark ? "dark" : "light"}</h1>;
};

export default Chart;
