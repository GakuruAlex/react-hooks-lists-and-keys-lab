import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const userLinks= links.map((link)=>{

    return <a href={link}>{link}</a>
  }) ;

  return <nav>{/* display an <a> tag for each link here */
  userLinks}
  </nav>;
}

export default NavBar;
