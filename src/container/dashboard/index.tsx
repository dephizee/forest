import { H1Styled, SectionOneContainer, SectionTwoContainer, SectionThreeContainer, SectionFourContainer } from "@/components";
import { Breadcrumb } from "antd";
import { Container } from "./index.styled";

export const DashboardContainer = () => {
  
  

  return (
    <Container>
        <H1Styled>Welcome, Lisa!</H1Styled>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>Today&apos;s</Breadcrumb.Item>
          <Breadcrumb.Item>Stats</Breadcrumb.Item>
        </Breadcrumb>
        <SectionOneContainer/>
        <SectionTwoContainer/>
        <SectionThreeContainer/>
        <SectionFourContainer/>
    </Container>
  );
};
