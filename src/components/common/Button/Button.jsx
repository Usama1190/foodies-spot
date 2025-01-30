import "./Button.module.css";

const Button = ({ texts, icons }) => {
  return (
    <div>
      {texts?.map((item, index) => {
        return (
          <button key={index}>
            {icons && <i key={index} className={`${icons[index]}`}></i>}
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Button;
