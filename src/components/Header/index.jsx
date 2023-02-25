import "./style.css";
import {Avatar} from '../../components'; 

function Header() {
  return (
    <div className="Header-container">
      <div className="Title-container">
        <i class="bi bi-house-door-fill Icon-color"></i>
        <h6 className="Title-text px-2 m-0">Grave Sites Manageent</h6>
      </div>
      <div className="SubMenu-container">
        <div className="Maintain-Box p-2">
        <i class="bi bi-menu-button-wide Icon-color"></i>
          <h6 className="Maintain-text px-2 ">Maintain</h6>
          <i class="bi bi-chevron-down Icon-color"></i>

        </div>
        <div className="Sub-box px-3">
          <h6 className="Maintain-text m-0">$</h6>
          <h6 className="Maintain-text px-2 m-0">Payments</h6>
        </div>
        <div className="Sub-box px-3">
        <i class="bi bi-journal-text Icon-color"></i>
          <h6 className="Maintain-text px-2 m-0">Reports</h6>
        </div>
      </div>
      <div className="HelperMenu-container">
        <i class="bi bi-search Icon-color px-2"></i>
        <i class="bi bi-gear Icon-color px-2"></i>
        <i class="bi bi-info-circle-fill Icon-color px-2"></i>

        <Avatar name={"JS"}/>
        <div className="User-name-container px-3">
          <p className="User-text">John snow</p>
          <p className="User-text Grey-text pt-2">Muncipality officer</p>
        </div>
        <i class="bi bi-chevron-down Icon-color"></i>
      </div>
    </div>
  );
}

export default Header;
