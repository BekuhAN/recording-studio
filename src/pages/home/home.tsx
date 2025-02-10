import { ReactElement } from "react";
import Preview from "../../components/preview/preview";
import Services from "../../components/services/services";

export default function Home(): ReactElement {
  return (
    <main>
      <Preview />
      <Services />
    </main>
  );
}
