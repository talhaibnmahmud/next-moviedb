import { FC } from "react";

import Nav from "./Nav";

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
