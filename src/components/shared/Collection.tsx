import { popularProducts } from "../../../constants"
import Card from "./Card"


const Collection = () => {
  return (
    <>
    {popularProducts.length>0?(
        <div>
           <ul className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5 wrapper">
           {/* <ul className="flex flex-wrap w-full gap-10 wrapper" > */}
               {popularProducts?.map((product=>{
                return (
                    <li key={product.title} className="flex justify-center">
                        <Card product={product}/>
                    </li>
                )
               }))} 
            </ul>
        </div>
    ):(
        <div className="w-full gap-3 flex flex-col wrapper rounded-[14px] flex-center min-h-[200px] bg-gray-50 py-28 text-center">
            <h3 className="p-bold">No Popular Products</h3>
        </div>
    )}
    </>
  )
}

export default Collection