import image404 from "../../assets/404.svg";
import { NoResult } from "./styles";

export function SearchNoResult() {
  return (
    <NoResult>
      <p>Sem resultados</p>
      <img src={image404} alt="Search not found" />
    </NoResult>
  );
}
