interface IProps {
  border?: string
  backgroundColor?: string
  children?: React.ReactNode
  onClick?: () => void
}

export default function OauthBtn(props: IProps) {
  return (
    <button
      onClick={props.onClick}
      className="flex items-center justify-center w-12 h-12 rounded-full"
      style={{
        border: `1px solid ${props.border ?? 'transparent'}`,
        background: props.backgroundColor ?? 'transparent',
      }}
    >
      {props.children}
    </button>
  )
}
