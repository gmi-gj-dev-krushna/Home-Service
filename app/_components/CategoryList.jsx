import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryList({ categoryList }) {
  return (
    <div className="mx-4 md:mx-22 lg:mx-52 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {categoryList.length > 0
        ? categoryList.map((category) => (
            <Link href={`/category/${category.name}`} key={category.id}>
              <div className="flex flex-col items-center justify-center gap-2 bg-purple-50 p-5 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out">
                <Image
                  src={category.image.url}
                  alt={category.name}
                  width={35}
                  height={35}
                />
                <h2 className="text-primary">{category.name}</h2>
              </div>
            </Link>
          ))
        : Array.from({ length: 6 }, (_, index) => (
            <div
              key={`skeleton-${index}`}
              className="h-[120px] w-full bg-slate-200 animate-pulse rounded-lg"
            ></div>
          ))}
    </div>
  );
}

export default CategoryList;
