import image404 from "../../assets/404.svg";
import { NoResult } from "./styles";

type SearchNoResultType = {
  keyWords: string;
};

export function SearchNoResult({ keyWords }: SearchNoResultType) {
  return (
    <NoResult>
      <p>
        Nenhum resultado para <span>{keyWords}</span>
      </p>
      <img src={image404} alt="Search not found" />
    </NoResult>
  );
}
