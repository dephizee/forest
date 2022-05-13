import { MainContainer, SideBar } from "@/components";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode | ReactNode[];
}

export const MainLayoutContainer = (props: MainLayoutProps) => {
  const { children } = props;
  

  return (
    <MainContainer>
      <SideBar 
        content={
          <main>{children}</main>
        }      />
    </MainContainer>
  );
};
