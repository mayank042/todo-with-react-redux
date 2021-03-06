import React from 'react';

interface LinkProps {
  active: boolean;
  children: string;
  onClick: () => void;
}

const Link: React.FC<LinkProps> = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

export default Link;
