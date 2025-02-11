import { ReactElement } from "react";
import Preview from "../../components/preview/preview";
import Services from "../../components/services/services";
import Advantages from "../../components/advantages/advantages";
import Rooms from "../../components/rooms/rooms";
import Portfolio from "../../components/portfolio/portfolio";

export default function Home(): ReactElement {
  return (
    <main>
      <Preview />
      <Services />
      <Advantages />
      <Rooms />
      <Portfolio />
    </main>
  );
}
