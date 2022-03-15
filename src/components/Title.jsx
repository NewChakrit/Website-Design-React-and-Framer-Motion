import "../styles/components/Title.scss";

function Title({ title, color, LineCenter = false }) {
  return (
    <div className={`title ${LineCenter === true ? "center" : ""}`}>
      <h2>{title}</h2>
      <div className={`${color}`}>
        <span></span>
      </div>
    </div>
  );
}

export default Title;
