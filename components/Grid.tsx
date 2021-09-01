import { FC } from "react";

const Grid: FC<{ header: string; size?: "LG" | "MD" | "SM" | "XS" }> = ({
  header,
  size = "LG",
  children,
}) => {
  const classes =
    size === "LG"
      ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 "
      : "grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 lg:gap-4 ";

  return (
    <div>
      <h2 className="text-5xl text-center sm:text-left font-semibold my-4 py-2 bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent">
        {header}
      </h2>

      <div className={classes + "grid justify-center"}>{children}</div>
    </div>
  );
};

export default Grid;
