import "./PaymentForm.style.css";
import Form from "react-bootstrap/Form";
import { Button } from "../components/Button";

function PaymentForm() {
  return (
    <div className="col-md-6 Form-Container shadow my-5">
        <h3 className="pt-4 ps-2">Payment Details</h3>
      <Form className="p-3">
        <div className="row">
          <div className="col-md-6 py-2">
            <Form.Label>Receipt Number</Form.Label>
            <Form.Control />
          </div>
          <div className="col-md-6 py-2">
            <Form.Label>Transaction Id</Form.Label>
            <Form.Control />
          </div>

          <div className="col-md-6 py-2">
            <Form.Label>Amount</Form.Label>
            <Form.Control />
          </div>
          <div className="col-md-6 py-2">
            <Form.Label>Date Paid</Form.Label>
            <Form.Control />
          </div>

          <div className="col-md-6 py-2">
            <Form.Label>Payment Type</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
          <div className="col-md-6 py-2">
            <Form.Label>Payor</Form.Label>
            <Form.Control />
          </div>

          <div className="col-md-12 py-2">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </div>
        </div>
        <Button bgColor={"green"}>
          <p className="Button-text">Submit</p>
        </Button>
        <Button bgColor={"grey"}>
          <p className="Button-text">Cancel</p>
        </Button>
      </Form>
    </div>
  );
}

export default PaymentForm;
