import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrownOpen } from "@fortawesome/free-solid-svg-icons";

import { NoResult } from "../styles/searchNoResults";

type SearchNoResultType = {
  keyWords: string;
};

export function SearchNoResult(props: SearchNoResultType) {
  return (
    <NoResult>
      <FontAwesomeIcon icon={faFaceFrownOpen} />
      <p>Nenhum resultado encontrado para "{props.keyWords}"</p>
    </NoResult>
  );
}
