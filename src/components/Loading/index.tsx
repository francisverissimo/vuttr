import { Circle, CircleDashed, CircleNotch } from "phosphor-react";
import { ContentLoading } from "./styles";

export function Loading() {
  return (
    <ContentLoading>
      <CircleNotch className="circle-notch" />

      <div className="div-middle">
        <Circle className="circle" />
      </div>

      <CircleDashed className="circle-dashed" />
    </ContentLoading>
  );
}
