import "./style.css";
function Avatar({ name }) {
  return (
    <div className="Avatar-circle ms-2">
      <p className="Avatar-text">{name}</p>
    </div>
  );
}

export default Avatar;
