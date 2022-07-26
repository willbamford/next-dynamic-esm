import type { NextPage } from "next";

import dynamic from "next/dynamic";
import { ComponentProps } from "react";

type WidgetProps = ComponentProps<typeof import("../components/Widget").Widget>;

const DynamicWidget = dynamic<WidgetProps>(async () => {
  return (await import("../components/Widget")).Widget;
});

const Home: NextPage = () => {
  return (
    <div>
      Hello <DynamicWidget name="Robo" />
    </div>
  );
};

export default Home;
