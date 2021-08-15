import { FC } from "react";

const Grid: FC<{ header: string }> = ({ header, children }) => {
  return (
    <div>
      <h2 className="text-5xl text-center sm:text-left font-semibold my-4">
        {header}
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {children}
      </div>
    </div>
  );
};

export default Grid;
