import React from 'react';

import { Container } from 'components/common';
import { CardWrapper } from './styles';

export const Projects = () => {
  const panels = document.querySelectorAll('.panel');

  function removeActiveClasses() {
    panels.forEach(panel => {
      panel.classList.remove('active');
    });
  }
  panels.forEach(panel => {
    panel.addEventListener('click', () => {
      removeActiveClasses();
      panel.classList.add('active');
    });
  });

  return (
    <Container>
      <h1>Recent Projects</h1>
      <CardWrapper>
        <div className="panel ">
          <h3>Explore the World</h3>
        </div>
        <div className="panel ">
          <h3>Explore the World</h3>
        </div>
        <div className="panel ">
          <h3>Explore the World</h3>
        </div>
      </CardWrapper>
    </Container>
  );
};
