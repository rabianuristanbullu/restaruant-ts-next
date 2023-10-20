import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link href="/cart" className="flex items-center justify-center">
      <div className="w-8 h-8 relative md:w-5 md:h-5">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span> Cart (3) </span>
    </Link>
  );
};

export default CartIcon;
