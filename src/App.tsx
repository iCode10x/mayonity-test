import SearchSection from "./components/SearchSection.tsx";
import CategoriesList from "./components/CategoriesList.tsx";
const App = () => {
  return (
    <div className="bg-[#F9FAFB] p-4 flex flex-col items-start gap-5">
      <h1 className="font-poppins font-semibold text-[22px] sm:text-[30px]">
        Categories <span className="text-[#0E9F6E]">(4)</span>
      </h1>

      <div className="w-full py-2">
        <SearchSection />
        <CategoriesList />
      </div>
    </div>
  );
};
export default App;
