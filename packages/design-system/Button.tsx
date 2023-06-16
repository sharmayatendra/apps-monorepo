'use client';

type BtnProps = {
  cb: () => void;
};

/**
 * -----------------------------------------------------------------------------
 * a generic button component which can be used anywhere inside the project.
 *
 * @returns JSX.Element
 */

export function Button({ cb }: BtnProps) {
  return (
    <button type="button" onClick={cb}>
      Boop
    </button>
  );
}
