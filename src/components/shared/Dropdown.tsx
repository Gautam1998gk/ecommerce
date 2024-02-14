"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "../../../constants";
import { LuLayoutDashboard } from "react-icons/lu";

type DropdownProps = {
  value: string;
  cate?: string;
  onChangeHandler?: () => void;
};

const Dropdown = ({ onChangeHandler, value,cate}: DropdownProps) => {

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className={cate === "filter" ? "select-field-filter" : "select-field"}>{cate==="filter"&&<LuLayoutDashboard size="24" />}
        <SelectValue placeholder={`Browse All Categories`} />
      </SelectTrigger>
      <SelectContent>
        {categories.length > 0 &&
          categories.map(category => (
            <SelectItem
              key={category}
              value={category}
              className="select-item p-regular-14"
            >
              {category}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

export default Dropdown;

