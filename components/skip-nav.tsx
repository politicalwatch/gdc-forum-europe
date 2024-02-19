import React from 'react';

function SkipNavLink({ toId, children }) {
  return (
    <a href={`#${toId}`} skip-to={toId}>
      {children}
    </a>
  );
}

function SkipNavContent({ id, children }) {
  return (
    <main id={id} skip-content={id}>
      {children}
    </main>
  );
}

export { SkipNavLink, SkipNavContent };
