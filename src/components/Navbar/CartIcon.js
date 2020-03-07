import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import {useSpring, animated} from 'react-spring'
import {ProductConsumer} from '../../context';

function CartIcon() {
    return <ProductConsumer>
        {context => <Cart {...context} />}
    </ProductConsumer>
}

function Cart({cart}) {
    const [styles, set] = useSpring(() => ({
        color: '#22525e'
    }))

    useEffect(() => {
        if (cart.length === 0) set({
            color: '#22525e'
        })

        if (cart.length > 0) set({
            color: '#ab511e'
        })
    }, [cart, set])

    return <div className='cart-icon-icon'>
        <Link to='/Cart'>
            <animated.i style={styles} className="fas fa-shopping-cart"></animated.i>    
        </Link>

        <span>{cart.length}</span>
    </div>
}

export default CartIcon
