/**
 * -----------------------------------------------------------------------------
 * Header component to use accross the app.
 *
 * @param text parameter to show the title for header
 * @returns JSX.Element
 */

export function Header({ text }: { text: string }) {
  return <h1>{text}</h1>;
}
