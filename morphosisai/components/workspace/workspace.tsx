'use client';

import { Panel, ReactFlow,  ControlButton, Background, Controls, type ColorMode, MiniMap } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useState } from 'react';
import { ModeToggle } from './canvas/theme-toggle';
import { MagicWandIcon } from "@radix-ui/react-icons";

export default function Workspace() {
  const [colorMode, setColorMode] = useState<ColorMode>("dark");

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ReactFlow colorMode={colorMode}>
        <Background />
        <Controls position="top-center" orientation="horizontal">
          <ControlButton
            onClick={() => alert("Something magical just happened. ✨")}
          >
            <MagicWandIcon />
          </ControlButton>
        </Controls>
        <MiniMap pannable zoomable />
        <Panel position="top-right">
          <ModeToggle onThemeChange={setColorMode} />
        </Panel>
      </ReactFlow>
    </div>
  );
}