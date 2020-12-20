import React, { useContext } from 'react';

import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <div>
        <h1>Hello this is projects</h1>
      </div>
    </Container>
  );
};
