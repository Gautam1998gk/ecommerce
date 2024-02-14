import { Button } from "@/components/ui/button"
import Link from "next/link";
import StarRating from "./StarRating";
import { IoCartOutline } from "react-icons/io5";

type ProductProps = {
  title: string;
  rating: number;
  productby: string;
  price: number;
  disPr: number;
  category: string;
  url: string;
};
const Card = ({ product }: { product: ProductProps }) => {
  return (
    <div
      className="group relative flex flex-col overflow-hidden min-h-[420px] w-full
    max-w-[300px] rounded-xl bg-white shadow-sm border-2 border-gray-200 transition-all hover:shadow-lg"
    >
      <Link
        href={`/products/${product.title}`}
        style={{
          backgroundImage: `url(${product.url})`,
          width:"250px",
          height:"200px",
        }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-gray-500"
      />

      <div className="flex min-h-[230px] flex-col  gap-3 p-5 md:gap-4">
        <p className="text-gray-400 text-[14px]">{product.category}</p>
        <Link href={`/products/${product.title}`}>
          <p className="p-medium-16 line-clamp-2 hover:text-green-400 flex text-black">
            {product.title}
          </p>
        </Link>
        <div className="flex-col  flex w-full">
          <div className="flex gap-2">
            <StarRating initialRating={product.rating} />{" "}
            <p className="text-gray-400">({product.rating})</p>
          </div>
          <p className="text-gray-400 ">
            By{" "}
            <Link href={product.productby} className="text-green-500">
              {product.productby}
            </Link>
          </p>
        </div>
        <div className="flex justify-between items-end ">
        <div className="flex gap-2 items-center">
            <p className="text-green-500 text-lg font-semibold">${product.price}</p>
            <p className="line-through text-gray-400 text-sm">${product.disPr}</p>
        </div>
        <Button size="sm" className="bg-green-300 p-4 hover:bg-green-600 hover:shadow-xl text-green-500 hover:text-white"><IoCartOutline size={20}/><span >Add</span> </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
