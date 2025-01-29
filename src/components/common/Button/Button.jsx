import "./Button.module.css";

const Button = ({ texts, icons }) => {
  return (
    <div>
      {texts?.map((item, index) => {
        return (
          <button key={index}>
            {icons?.map((item, index) => {
              <span key={index}>
                <i className={`${item}`}></i>
              </span>;
            })}
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Button;
