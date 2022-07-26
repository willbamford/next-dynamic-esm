import { ComponentProps } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

import { Bar } from "@test/foo/bar";

import { Grommet } from "../components/Grommet";

type WidgetProps = ComponentProps<typeof import("../components/Widget").Widget>;
const DynamicWidget = dynamic<WidgetProps>(async () => {
  return (await import("../components/Widget.jsx")).Widget;
});

const Home: NextPage = () => {
  return (
    <>
      <Bar />
      <Grommet name="Pop" />
      <DynamicWidget name="Robo" />
    </>
  );
};

export default Home;
