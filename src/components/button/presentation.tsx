import { ButtonOpts } from ".";

export default function Presentation({text, action}: ButtonOpts) {
    return(
        <button onClick={action}>{text}</button>
    )
}