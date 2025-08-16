function ProductCard(props) {
  return (
    <div className="  w-80 ml-10.5 mt-5  overflow-hidden p-2.5 rounded-2xl hover:shadow-lg duration-500 flex-wrap hover:cursor-pointer inline-block h-108">
      <img src={props.productimage} alt="mug image" className="w-80 rounded-lg" />
      <p className="text-neutral-600 ml-0.5 capitalize">{props.productname}</p>
      <div className="flex gap-2 ml-0.5 m-0.5">
        <p className=" font-bold text-lg">{props.productprice}</p>
        <p className="text-sm px-1 rounded text-green-700 font-bold bg-green-200">
          {props.productdiscount}
        </p>
      </div>
      <p className="text-neutral-500 text-sm m-1 ">
        {props.deliverydescription}
        <span className="text-green-500 ">{props.productdeliverydate}</span>
      </p>
    </div>
  );
}
export default ProductCard;
