import { FC } from "react";

import Nav from "@components/Nav";

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Nav />
      <main className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-24">
        {children}
      </main>
    </div>
  );
};

export default Layout;
