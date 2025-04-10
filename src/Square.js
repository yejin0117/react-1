import { useState } from 'react';

export default function Square({value, onSquareClikc}) {
  return (
    <button
      className="square" onClick={onSquareClikc}
    >
      {value}
    </button>
  );
}