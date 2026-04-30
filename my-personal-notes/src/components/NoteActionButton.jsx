import React from 'react';

function NoteActionButton({ variant, onClick, children, dataTestId }) {
  // Use className dynamically based on variant
  const className = `note-item__${variant}-button`;
  return (
    <button
      className={className}
      type="button"
      onClick={onClick}
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
}

export default NoteActionButton;
