import React, { useState } from 'react';
import styled from 'styled-components';

import { DEFAULT_PEN_COLOR } from 'constants/drawing';
import { Color, DrawingSettings } from 'stores';

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
    new DrawingSettings(new Color(DEFAULT_PEN_COLOR), backgroundColor)
  );

  return (
    <Container>
      <Sidebar drawingSettings={settings} />
      <Whiteboard drawingSettings={settings} />
    </Container>
  );
};

export { Workspace };
