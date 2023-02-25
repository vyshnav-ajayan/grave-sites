import "./style.css";
import PaymentForm from "../../forms/PaymentForm";

function Payment() {
  return (
    <div className="row Grey-container">
      <div className="col-md-4 p-5 ">
        <h3 className="mb-3">Create Payment</h3>
        <div className="mb-1">
          <h5>grave site</h5>
          <div className="Sub-item">
            <i class="bi bi-house-door"></i>
            <p className="px-2">01-002233-22</p>
          </div>
        </div>
        <div className="mb-1">
          <h5>owner</h5>
          <div className="Sub-item">
          <i class="bi bi-person"></i>
            <p className="px-2">Lorraine</p>
          </div>
        </div>
        <div className="mb-1">
          <h5>person buried</h5>
          <div className="Sub-item">
          <i class="bi bi-archive"></i>
            <p className="px-2">edgar</p>
          </div>
        </div>
      </div>
      <PaymentForm/>
    </div>
  );
}

export default Payment;
