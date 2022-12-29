import { useMemo } from "react";
import { useCart } from "../../context/cart";

function CheckOut() {
  const { totalItems, cart } = useCart();
  let newTotalPrice = 0;
  console.log(cart)
  // Total price should be calcullated on the server...
// React is not very smooth for this...
  const totalPrice = useMemo(() => {
    cart.forEach((item) => {
      newTotalPrice += item.price * item.quantity
    });

    return newTotalPrice.toFixed(2);
  }, [totalItems]);

  return (
    <div className="py-4">
      <ApplyCoupon />
      <div className="w-full">
        <div className="my-4 p-4 rounded-md border shadow max-w-md ml-auto mr-0">
          <h2 className="text-2xl font-bold my-3"> Cart Totals </h2>
          <p className="text-xl font-bold flex justify-between items-center">
            <span> Total: </span>
            <span> {totalPrice} </span>
          </p>
          <button className="w-full p-3 bg-black text-white rounded-md my-3">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;

const ApplyCoupon = () => {
  return (
    <div className="flex items-centergap-4 border rounded-md p-1 border-black w-max">
      <input
        type="text"
        placeholder="Coupon code"
        className="outline-none hover:brightness-95 focus:border p-4 w-44"
      />
      <button className="rounded-md p-2 border bg-black text-white">
        {" "}
        Apply{" "}
      </button>
    </div>
  );
};
