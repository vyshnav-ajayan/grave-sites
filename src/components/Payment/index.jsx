import "./style.css";
import Form from "react-bootstrap/Form";
import {Button} from  '../Button';

function Payment() {
  return (
    <div className="row">
      <div className="col-md-4 p-5 ">
        <h2 className="mb-3">Payment Details</h2>
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
            <i class="bi bi-house-door"></i>
            <p className="px-2">Lorraine</p>
          </div>
        </div>
        <div className="mb-1">
          <h5>person buried</h5>
          <div className="Sub-item">
            <i class="bi bi-house-door"></i>
            <p className="px-2">edgar</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 Form-Container shadow my-5">
        <Form className="p-5">
          <div className="row">
            <div className="col-md-6">
              <Form.Label>Receipt Number</Form.Label>
              <Form.Control />
            </div>
            <div className="col-md-6">
              <Form.Label>Transaction Id</Form.Label>
              <Form.Control />
            </div>

            <div className="col-md-6">
              <Form.Label>Amount</Form.Label>
              <Form.Control />
            </div>
            <div className="col-md-6">
              <Form.Label>Date Paid</Form.Label>
              <Form.Control />
            </div>

            <div className="col-md-6">
              <Form.Label>Payment Type</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div>
              <Form.Label>Payor</Form.Label>
              <Form.Control />
            </div>

            <div className="col-md-12">
              <Form.Label>Payor</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </div>
          </div>
          <Button bgColor={"green"}>Submit</Button>
          <Button bgColor={"grey"}>Cancel</Button>
        </Form>
      </div>
    </div>
  );
}

export default Payment;
