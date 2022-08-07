import { Btn } from "./ButtonStyled";

const Button = (props) => {

  const { btnText, handleClick } = props;

  return (
    <>
      <Btn type="submit" onClick={handleClick}>{btnText}</Btn>
    </>
  )
}

export default Button;