import st from './Button.module.css'

type CounterType = {
    maxValue?: number
    minValue?: number
    onClick:()=>void
    children: string
    disabled: boolean
}

export function Button (props: CounterType) {
    return <button onClick={props.onClick} disabled={props.disabled} className={`${st.buttons} ${st.button}`}>{props.children}</button>
}

