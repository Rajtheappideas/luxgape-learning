import React from "react";
import { MetaTags } from "react-meta-tags";
import { Footer, Navbar, PaymentMethod, ProductYouBuy } from "../components";

const Payment = () => {
  return (
    <div className="bg-bgblank">
      <MetaTags>
        <title>Payment</title>
      </MetaTags>
      {/* -------------------navbar=------------------ */}
      <Navbar activeText="" />

      <div className="p-10 grid grid-cols-3 place-items-center items-start ">
        {/* --------------------payment method----------------- */}
        <PaymentMethod />
        {/* --------------product you buy-=------------------------ */}
        <ProductYouBuy />
      </div>

      {/* ----------------------------------foooter---------------------------- */}
      <Footer />
    </div>
  );
};

export default Payment;
