import React from 'react';

interface SkipNavLinkProps {
  toId?: string;
  children?: React.ReactNode;
}

interface SkipNavContentProps {
  id?: string;
  children?: React.ReactNode;
}

function SkipNavLink({ toId, children }: SkipNavLinkProps) {
  return (
    <a href={`#${toId}`} skip-to={toId}>
      {children}
    </a>
  );
}

function SkipNavContent({ id, children }: SkipNavContentProps) {
  return (
    <main id={id} skip-content={id}>
      {children}
    </main>
  );
}

export { SkipNavLink, SkipNavContent };
