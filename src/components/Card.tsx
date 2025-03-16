interface CardProps {
  img: string;
  title: string;
  price: number;
  desc: string;
  category: string;
}

const Card = ({ img, title, price, desc }: CardProps) => {
  console.log(img);
  return (
    <div className="">
      <div className="flex flex-row">
        {/* single items */}
        <article className="flex gap-y-4 gap-x-8 max-w-[35rem]  mt-3">
          <img
            src={img}
            className="photo object-cover h-40 shadow-md shadow-red-500 rounded-[15px]"
            alt={title}
          />
          <div className="item-info ">
            <header className="flex justify-between border-b-[0.5px] border-dotted border-gray-500">
              <h4 className="mb-2">{title}</h4>
              <h4 className="price text-orange-300">${price}</h4>
            </header>
            <p className="item-text mb-0 pt-4">{desc}</p>
          </div>
        </article>
        {/* end of single item */}
      </div>
    </div>
  );
};

export default Card;
//  w-[100vw] my-0 mx-auto max-w-[1170px]  gap-y-12 gap-x-8 flex flex-row flex-wrap bg-red-500
