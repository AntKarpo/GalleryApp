import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";


test("render three links", () => {
  render(<Navigation />);
  const spotLightLink =screen.getByRole("link",{name:"spotLight"})
  const artPiecesLink =screen.getByRole("link",{name:"art Pieces"})
  const favoritesLink =screen.getByRole("link",{name:"favorites"})

  expect(spotLightLink)=toBeInTheDocument();
  expect(artPiecesLink)=toBeInTheDocument();
  expect(favoritesLink)=toBeInTheDocument();
});
 