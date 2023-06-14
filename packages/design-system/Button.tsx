'use client';

import * as React from 'react';

export function Button() {
  return (
    <button type="button" onClick={() => alert('boop')}>
      Boop
    </button>
  );
}
