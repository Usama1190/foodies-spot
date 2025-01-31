import "./Button.module.css";

const Button = ({ texts, icons }) => {
  return (
    <div>
      {texts?.map((item, index) => {
        return (
          <button key={index}>
            <span className="hbs">
              {icons && <i key={index} className={`${icons[index]}`}></i>}
              {item}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Button;
