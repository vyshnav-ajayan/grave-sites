import "./style.css";


function Header() {
  return (
    <div className="Header-container">
      <div className="Title-container">
      <i class="bi bi-arrow-up-left-circle-fill Icon-color"></i>
        <h6 className="Title-text px-2">Grave Sites Manageent</h6>
      </div>
      <div className="SubMenu-container">
        <div className="Maintain-Box p-2">
        <i class="bi bi-arrow-up-left-circle-fill Icon-color"></i>
        <h6 className="Title-text px-2">Maintain</h6>
        <i class="bi bi-arrow-up-left-circle-fill Icon-color"></i>
        </div>
        <div className="Sub-box px-3">
        <h6 className="Title-text">$</h6>
        <h6 className="Title-text px-2">Payments</h6>
        </div>
        <div className="Sub-box px-3">
        <i class="bi bi-arrow-up-left-circle-fill Icon-color"></i>
        <h6 className="Title-text px-2">Reports</h6>
        </div>
      </div>
      <div className="HelperMenu-container">
      <i class="bi bi-search Icon-color px-3" ></i>
      <i class="bi bi-gear Icon-color px-3"></i>
      <i class="bi bi-info-circle-fill Icon-color px-3"></i>

        <div className="Avatar-circle">JS</div>
        <div className="User-name-container px-3">
        <p className="User-text">John snow</p>
        <p className="User-text">Muncipality officer</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
