import { CircleNotch } from "phosphor-react";
import { ContentLoading } from "./styles";

export function Loading() {
  return (
    <ContentLoading>
      <CircleNotch className="circle-notch" />
    </ContentLoading>
  );
}
