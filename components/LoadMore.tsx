import { Dispatch, FC, SetStateAction } from "react";

const LoadMore: FC<{ setPage?: Dispatch<SetStateAction<number>> }> = ({
  setPage,
}) => {
  return (
    <div className="flex justify-center my-5">
      <button
        onClick={() => {
          setPage && setPage((prev) => prev + 1);
        }}
        className="bg-gray-800 px-3 py-2 rounded-full"
      >
        <span className="bg-gradient-to-r from-green-400 to-purple-400 text-transparent bg-clip-text text-lg font-bold ">
          Load More
        </span>
      </button>
    </div>
  );
};

export default LoadMore;
