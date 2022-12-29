import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { CartProps } from "../components/cart/CartItem";

type CartContextProps = {
  addToCart: (cartItem: CartProps) => void;
  removeFromCart: (cartItemId: string | number) => void;
  updateQuantity: (index: number, quantity: number) => void;
  cart: CartProps[];
  totalItems: number;
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
  const [totalItems, setTotalItems] = useState(0);

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
      setTotalItems(cartItem.quantity)
      return cartItems;
    });
  }

  //Remove items from cart
  function removeFromCart(cartItemId: string | number) {
    setCart((cartItems) =>
      cartItems.filter((item) => {
        
        if (item.product_id == cartItemId) {
          const newTotal = totalItems - item.quantity
          setTotalItems(newTotal)
        }

      return item.product_id != cartItemId
      })
    );
  }

  //Increment or decrement quantity
  function updateQuantity(index: number, quantity: number) {
    setCart((cartItems) => {
      if (cartItems[index].quantity == 0 && quantity < 0) return cartItems;
      cartItems[index].quantity += quantity;

      const newTotal = totalItems + quantity;
      setTotalItems(newTotal)

      return cartItems;
    });
  }

  return (
    <cartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, totalItems }}
    >
      {children}
    </cartContext.Provider>
  );
}
