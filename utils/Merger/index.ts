import clsx from "clsx";
import { ClassNameValue, twMerge } from "tailwind-merge";

const Merger = (...classes: ClassNameValue[]) => {
  return twMerge(clsx(classes));
}

export default Merger;