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

      <div className="sm:p-10 p-5 md:grid md:grid-cols-2 grid-flow-row place-items-center items-start ">
        {/* --------------------payment method and product for large screen----------------- */}
        <div className="md:hidden block">
          <ProductYouBuy />
        </div>
        <PaymentMethod />
        <div className="md:block hidden">
          <ProductYouBuy />
        </div>
      </div>

      {/* ----------------------------------foooter---------------------------- */}
      <Footer />
    </div>
  );
};

export default Payment;
