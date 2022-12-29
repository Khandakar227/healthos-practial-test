import { FaEye, FaEyeSlash } from "react-icons/fa"


function ShowPasswordButton({show, onClick}:{show:boolean, onClick: any}) {
  return (
    <button type='button' onClick={onClick} className='mx-4'>{show ? <FaEyeSlash /> : <FaEye />}</button>
  )
}

export default ShowPasswordButton