import { ReactNode, createContext, useContext, useState } from "react";

type CartProps = {
  product_id: string | number | any;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextProps = {
  addToCart: (cartItem: CartProps)=> void;
  removeFromCart: (cartItemId: string | number)=>void;
  updateQuantity: (index: number, quantity: number)=>void;
  cart: CartProps[];
};

export const cartContext = createContext({} as CartContextProps);

export const useCart = () => {
  return useContext(cartContext);
};

export default function CartProvider({
  children,
}: {
  children?: ReactNode | ReactNode[];
}) {
  const [cart, setCart] = useState([] as CartProps[]);

  //Add items to cart
  function addToCart(cartItem: CartProps) {
    // First check if the selected Item is already in cart
    let exist = false;
    setCart((cartItems) => {
      cartItems.forEach((item) => {
        // If it is in cart then update the quantity
        if (item.product_id == cartItem.product_id) {
          exist = true;
          item.quantity += cartItem.quantity;
        }
      });
      if (!exist) cartItems.push(cartItem);
      return cartItems;
    });
  }
  //Remove items from cart
  function removeFromCart(cartItemId: string | number) {
    setCart((cartItems) =>
      cartItems.filter((item) => item.product_id != cartItemId)
    );
  }

  function updateQuantity(index: number, quantity: number) {
    setCart((cartItems) => {
      cartItems[index].quantity = quantity;
      return cartItems;
    });
  }

  return (
    <cartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </cartContext.Provider>
  );
}
