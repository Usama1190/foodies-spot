import styles from "./Button.module.css";

const Button = ({ texts, icons }) => {
  return (
    <div>
      {texts?.map((item, index) => {
        return (
          <a href="#" key={index}>
            <button>
              <span className={styles.hbs}>
                {icons && <i key={index} className={`${icons[index]}`}></i>}
                {item}
              </span>
            </button>
          </a>
        );
      })}
    </div>
  );
};

export default Button;
