import styled from '@emotion/styled'

interface IProps {
  border?: string
  backgroundColor?: string
  children?: React.ReactNode
  onClick?: () => void
}

export default function OauthBtn(props: IProps) {
  return (
    <Button
      border={props.border}
      backgroundColor={props.backgroundColor}
      onClick={props.onClick}
      className="flex items-center justify-center w-12 h-12 rounded-full"
    >
      {props.children}
    </Button>
  )
}

const Button = styled.button<Pick<IProps, 'border' | 'backgroundColor'>>(
  (props) => ({
    border: `1px solid ${props.border ?? 'transparent'}`,
    background: props.backgroundColor ?? 'transparent',
  })
)
