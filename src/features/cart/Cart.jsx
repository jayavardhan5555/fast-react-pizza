import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from "./EmptyCart"
function Cart() {
  
  const username = useSelector(store=> store.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  if (!cart.length) return <EmptyCart />;
  return (
    <div className='px-4 py-3'>
      <Link to="/menu">&larr; Back to menu</Link>

      <h2 className="mt-7 text-xl font-semibold">Your cart,{username}</h2>
      <ul>
        {cart.map((pizza) => (
          <CartItem key={pizza.pizzaId} item={pizza}>
          </CartItem>
        ))}
      </ul>

      <div className='mt-6 space-x-2'>
      <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={()=> dispatch(clearCart())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
