import PropTypes from "prop-types";
import styles from "./Button.module.css";

//Button.moddule.css 파일을 따로 만들어서 Button이라는 컴포넌트만 적용되는 css파일을 만들어서
//css가 전역적으로 사용되는 행동을 막을 수 있다.
//이렇게 따로 import를 하게 된다면, css를 js로 변환하여 object 형식으로 변환 시켜 준다
// .module.css를 붙이는게 국룰이다.
function Button({text}){
    return <button className={styles.btn}>{text}</button>
}

Button.prototype= {
    text: PropTypes.string.isRequired,
}
export default Button;