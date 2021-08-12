import React from "react";

function NavBar() {
  const intraLinkNames = ["home", "about", "projects"];
  const intraLinkHashTags = intraLinkNames.map((linkName) => (`#${linkName}`))
  const intraLinkElements = intraLinkHashTags.map((linkName) => {
    return <a key={linkName} href={linkName}>{linkName.slice(1)}</a>
  })
  return <nav>{intraLinkElements}</nav>
}

export default NavBar;
