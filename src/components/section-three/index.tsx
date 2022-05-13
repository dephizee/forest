import { CustomCard, TitleStyled, UtilContainer } from "@/components";
import { Avatar, Col, Rate, Row, Typography, Button } from "antd";
import { ReactNode } from "react";
import { StyledDetails, StyledListRow, StyledRow } from "./index.styled";
const { Text } = Typography;


interface ListRowOneProps {
    icon: ReactNode | ReactNode[];
    text: string;
    date: string;
    primary?: boolean;
}
export const ListRowOne = (props: ListRowOneProps) => {
    const {icon, text, date, primary=false} = props;
    return (<StyledRow>
        <div className={`icon ${primary&&'primary'}`}>
            {icon}
        </div>
        <div className="text">
            {text}
        </div>
        <div className="date">
            {date}
        </div>
    </StyledRow>)
  };

interface ListRowtwoProps {
    src: string;
    product: string;
    name: string;
    note: string;
    rate: number;
}
export const ListRowTwo = (props: ListRowtwoProps) => {
    const {src, name, product, note, rate} = props;
    return (<StyledListRow>
        <div className="image">
            <Avatar
            shape="square"
            src={src}
            />
        </div>
        <div className="description">
            <div className="title">
                <span>{product} </span>
                <Text disabled>by</Text>
                <span>{name}</span>
            </div>
            <div className="note">
                <Text disabled>{note}</Text>
            </div>
            <div className="rate">
                <Rate value={rate} disabled />
            </div>
        </div>
    </StyledListRow>)
  };
  

export const SectionThreeContainer = () => {



  return (
        <UtilContainer>
            <Row gutter={[8, 8]}>
                <Col className="gutter-row" md={{ span: 24 }} lg={{span: 8}}>   
                    <TitleStyled>Activity</TitleStyled>
                    <CustomCard>
                        <ListRowOne
                            icon={<i className="ri-checkbox-blank-circle-line"></i>}
                            text={'New user registiration'}
                            date={'Dec 19'}
                        />
                        <ListRowOne
                            icon={<i className="ri-checkbox-blank-line"></i>}
                            text={'Product out of stock: Breadstick'}
                            date={'Dec 19'}
                            primary
                        />
                        <ListRowOne
                            icon={<i className="ri-checkbox-blank-circle-line"></i>}
                            text={'New user registiration'}
                            date={'Dec 19'}
                        />
                        <ListRowOne
                            icon={<i className="ri-checkbox-blank-circle-line"></i>}
                            text={'New user registiration'}
                            date={'Dec 19'}
                        />
                        <ListRowOne
                            icon={<i className="ri-checkbox-blank-circle-line"></i>}
                            text={'New user registiration'}
                            date={'Dec 19'}
                        />
                        
                    </CustomCard>
                </Col>
                <Col className="gutter-row" md={{ span: 24 }} lg={{span: 8}}>
                    <TitleStyled>Recent Review</TitleStyled>
                    <CustomCard>
                        <div>
                            <ListRowTwo
                                src={`https://i.picsum.photos/id/675/200/300.jpg?hmac=c2gHO4_1hIFBRijtOhz09icBTxsdGCsMSYSs2XIDdAk`}
                                product={'Soda Bread'}
                                name={'Kathleen Bertha'}
                                note={'Bear claw sweet liquorice jujubes. Muffin gingerbread bear claw.'}
                                rate={5}
                            />
                            <ListRowTwo
                                src={`https://i.picsum.photos/id/788/200/300.jpg?hmac=86XnLHCHcI7HWgr9Y662VsXxUxs7H70DjGHc_6iaIw4`}
                                product={'Soda Bread'}
                                name={'Kathleen Bertha'}
                                note={'Bear claw sweet liquorice jujubes. Muffin gingerbread bear claw.'}
                                rate={4}
                            />
                            <ListRowTwo
                                src={`https://i.picsum.photos/id/675/200/300.jpg?hmac=c2gHO4_1hIFBRijtOhz09icBTxsdGCsMSYSs2XIDdAk`}
                                product={'Soda Bread'}
                                name={'Kathleen Bertha'}
                                note={'Bear claw sweet liquorice jujubes. Muffin gingerbread bear claw.'}
                                rate={5}
                            />
                            <ListRowTwo
                                src={`https://i.picsum.photos/id/788/200/300.jpg?hmac=86XnLHCHcI7HWgr9Y662VsXxUxs7H70DjGHc_6iaIw4`}
                                product={'Soda Bread'}
                                name={'Kathleen Bertha'}
                                note={'Bear claw sweet liquorice jujubes. Muffin gingerbread bear claw.'}
                                rate={4}
                            />
                        </div>
                    </CustomCard>
                </Col>
                <Col className="gutter-row" md={{ span: 24 }} lg={{span: 8}}>
                    <TitleStyled>Tips</TitleStyled>
                    <CustomCard>
                        <StyledDetails>
                            <div className="title">
                                More Sales?
                            </div>
                            <div className="title2">
                                Add New Products!
                            </div>
                            <Text disabled>
                                quidem similique sapiente quam quasi modi. Esse exercitationem maxime architecto hic doloribus?
                            </Text>
                            <div>
                                <Button type="primary" ghost icon={'+'}>
                                    Add Product
                                </Button>
                            </div>
                        </StyledDetails>
                    </CustomCard>
                </Col>
                
                
            </Row>
        </UtilContainer>
  );
};
