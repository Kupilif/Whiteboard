import React, { useState } from 'react';
import styled from 'styled-components';

import { DEFAULT_PEN_COLOR, DEFAULT_PEN_SIZE } from 'constants/drawing';
import { Color, DrawingSettings, FocusTarget, Size, WorkspaceState } from 'stores';

import { Sidebar } from './Sidebar';
import { Whiteboard } from './Whiteboard';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

type Props = {
  backgroundColor: Color;
};

const Workspace: React.FC<Props> = ({ backgroundColor }) => {
  const [settings] = useState<DrawingSettings>(
    new DrawingSettings(new Size(DEFAULT_PEN_SIZE), new Color(DEFAULT_PEN_COLOR), backgroundColor)
  );
  const [state] = useState<WorkspaceState>(new WorkspaceState(FocusTarget.Whiteboard, null));

  return (
    <Container>
      <Sidebar drawingSettings={settings} workspaceState={state} />
      <Whiteboard drawingSettings={settings} workspaceState={state} />
    </Container>
  );
};

export { Workspace };
