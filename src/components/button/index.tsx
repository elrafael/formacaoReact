import Presentation from "./presentation";

export interface ButtonOpts {
    text: string
    type?: 'button' | 'submit' | 'reset'
    action?(): void
}

export default function Button({text, action}: ButtonOpts) {
    return <Presentation text={text} action={action} />
}