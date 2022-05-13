import { ReactNode } from "react";
import { BasicContainer, Container } from "./index.styled";

interface StatsCardProps {
  title: string;
  body: string;
  icon: ReactNode | ReactNode[];
}
export const StatsCard = (props: StatsCardProps) => {
  const { title,body, icon } = props;
  return (
    <Container>
          <span className="icon">
              {icon}
          </span>
          <span className="title">{title}</span>
          <span className="foot">{body}</span>
    </Container>
  )
}

export const CustomCard = ({children}: {children:ReactNode | ReactNode[]}) => {
  return (
    <BasicContainer>
          {children}
    </BasicContainer>
  )
}