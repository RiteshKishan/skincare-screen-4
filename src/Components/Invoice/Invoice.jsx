import React from "react";
import "./Invoice.css";
import PreviewInvoice from "../PreviewInvoice/PreviewInvoice";
import InvoiceList from "../InvoiceList/InvoiceList";
import Template from "../Template/Template";

const Invoice = () => {
  return (
    <div className="invoice">
      <div className="invoice-head">Invoice</div>
      <div className="invoice-subhead">Invoice-list</div>
      <div className="invoice-content">
        <div className="preview-heading">
          <p>Edit Invoice</p>
          <span>custom Invoice layout editing </span>
          <div className="line-path"></div>
          <div className="preview-container">
            <PreviewInvoice />
          </div>
        </div>
        <Template/>
      </div>
    </div>
  );
};

export default Invoice;
