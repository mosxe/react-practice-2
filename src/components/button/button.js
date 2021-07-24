import './button.css';


const Button = ({name}) => {
  return (
   <button className="button">
     {name}
   </button>
  );
};

export default Button;