import { ComponentProps } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

import { baz } from "@test/foo";

baz();

import { Grommet } from "../components/Grommet";

type WidgetProps = ComponentProps<typeof import("../components/Widget").Widget>;

const DynamicWidget = dynamic<WidgetProps>(async () => {
  return (await import("../components/Widget")).Widget;
});

const Home: NextPage = () => {
  return (
    <>
      <div>
        Hello <DynamicWidget name="Robo" />
      </div>
      <div>
        Hello <Grommet name="Pop" />
      </div>
    </>
  );
};

export default Home;
