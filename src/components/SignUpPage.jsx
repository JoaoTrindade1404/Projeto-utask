import Header from "./Header";
import img from "../assets/IlustraçãoCadastro.svg";
import styles from "./SignUpPage.module.css"
import SignUpForm from "./SignUpForm";
import divisor from '../assets/Divisor.svg'

function SignUpPage() {
  return (
    <div className={styles.signpage}>
      <Header />
      <SignUpForm />
      <img className={styles.divisor}  src={divisor} />
      <img className={styles.ilustracao} src={img} alt="Ilustração" />
    </div>
  );
}

export default SignUpPage;
