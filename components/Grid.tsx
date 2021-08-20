import { FC } from "react";

const Grid: FC<{ header: string; size?: string }> = ({
  header,
  size = "LG",
  children,
}) => {
  const classes: string =
    size === "LG"
      ? "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "
      : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ";

  return (
    <div>
      <h2 className="text-5xl text-center sm:text-left font-semibold my-4 bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent">
        {header}
      </h2>

      <div
        className={classes + "grid gap-6 justify-center"}
        style={{ gridAutoRows: "1fr" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Grid;
