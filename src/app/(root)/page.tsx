
import Collection from "@/components/shared/Collection";
import { popularProductCategories } from "../../../constants";

export default function Home() {
  return (<div className="flex flex-col gap-10">
    <div className="flex lg:flex-row flex-col lg:justify-between wrapper">
      <h1 className="h3-bold ">Popular Products</h1>
      <div className="flex gap-4 flex-between max-md:flex-wrap">
        {popularProductCategories.map(category=>(
          <button key={category} className="hover:text-green-500 active:text-green-500">{category}</button>
        ))}
      </div>
    </div>
    <Collection/>
    </div>
  );
}
