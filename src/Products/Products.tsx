import React from "react";

interface ProductsProps {
  result: any;
}

const Products: React.FC<ProductsProps> = ({ result }) => {
  return (
    <>
      <section className="w-[100vw] my-0 mx-auto max-w-[1170px] flex flex-wrap gap-8">
        {result}
      </section>
    </>
  );
};

export default Products;
// className="flex flex-wrap gap-y-12 gap-x-8 justify-center"
