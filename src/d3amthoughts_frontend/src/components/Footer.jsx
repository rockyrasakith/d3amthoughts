import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {year} Rocky Rasakith dba Galaxy Software</p>
    </footer>
  );
}

export default Footer;
