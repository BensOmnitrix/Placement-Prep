import { SearchBar } from "./SearchBar";

export const AppBar = () => {
  return (
    <div className="flex justify-between mb-10 mt-3 cursor-pointer">
      <div className="h-15 w-33 ml-5">
        <img src="./yt.jpeg" className="h-full w-full" />
      </div>
      <div className="w-400 mt-3">
        <SearchBar />
      </div>
      <div className="mt-3 text-blue-500 border-2 border-solid border-blue-500 rounded-4xl w-25 h-10 flex items-center justify-center cursor-pointer hover:bg-blue-500 hover:text-white">
        Sign In
      </div>
    </div>
  );
};
