import Navigation from "../Navigation /navigation";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
