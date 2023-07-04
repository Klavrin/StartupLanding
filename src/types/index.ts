export interface LayoutChildrenProps {
  children: React.ReactNode
}

export interface CustomButtonProps {
  title: string
  isWhite?: boolean
  height?: number
  style?: string
}

export interface NewsProps {
  description: string
}

export interface IntroductionProps {
  heading: string
  description: string
}

export interface ButtonsProps {
  firstButtonTitle: string
  secondButtonTitle: string
}

export interface SpecialButtonProps {
  title: string
}

export interface EmbededVideoProps {
  setVisible: Function
}
