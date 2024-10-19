import { computed, map } from "nanostores";

export const $cart = map<Record<number, CartItem>>({});

export function addItemToCart(item: ShopItem) {
  const cartItem = $cart.get()[item.id];
  const quantity = cartItem ? cartItem.quantity : 0;

  $cart.setKey(item.id, {
    item,
    quantity: quantity + 1,
  });
}

export function removeItemFromCart(item: number) {
  // @ts-ignore
  $cart.setKey(item, undefined);
}

export const subtotal = computed($cart, (cart) => {
  return Object.values(cart).reduce((sum, { item, quantity }) => {
    return sum + item.price * quantity;
  }, 0);
});