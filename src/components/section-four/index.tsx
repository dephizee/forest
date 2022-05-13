import { CustomCard, TitleStyled, UtilContainer } from "@/components";
import { Avatar, Col, Rate, Row, Typography, Button, Tag } from "antd";
import { ReactNode } from "react";
import { StyledDetails, StyledListRow, StyledRow } from "./index.styled";
const { Text } = Typography;


interface ListRowOneProps {
    text: string;
    num: string;
}
export const ListRowOne = (props: ListRowOneProps) => {
    const {text, num, } = props;
    return (<StyledRow>
        
        <div className="text">
            {text}
        </div>
        <div className="date">
            <Tag>
                {num}
            </Tag>
        </div>
    </StyledRow>)
  };

interface ListRowtwoProps {
    src: string;
    product: string;
    name: string;
    note: string;
    rate?: number;
}
export const ListRowTwo = (props: ListRowtwoProps) => {
    const {src, name, product, note} = props;
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
            </div>
            <div className="note">
                <Text disabled>{note}</Text>
            </div>
            <div className="rate">
                <Text disabled>{name}</Text>
            </div>
        </div>
    </StyledListRow>)
  };
  

export const SectionFourContainer = () => {



  return (
        <UtilContainer>
            <Row gutter={[8, 8]}>
                
                <Col className="gutter-row" md={{ span: 24 }} lg={{span: 12}}>
                    <TitleStyled>Top Search Item</TitleStyled>
                    <CustomCard>
                        <div>
                            <ListRowTwo
                                src={`https://i.picsum.photos/id/675/200/300.jpg?hmac=c2gHO4_1hIFBRijtOhz09icBTxsdGCsMSYSs2XIDdAk`}
                                product={'Soda Bread'}
                                name={'200 order'}
                                note={'Bear.'}
                                rate={5}
                            />
                            <ListRowTwo
                                src={`https://i.picsum.photos/id/788/200/300.jpg?hmac=86XnLHCHcI7HWgr9Y662VsXxUxs7H70DjGHc_6iaIw4`}
                                product={'Soda Bread'}
                                name={'200 order'}
                                note={'Bear.'}
                                rate={4}
                            />
                            <ListRowTwo
                                src={`https://i.picsum.photos/id/675/200/300.jpg?hmac=c2gHO4_1hIFBRijtOhz09icBTxsdGCsMSYSs2XIDdAk`}
                                product={'Soda Bread'}
                                name={'200 order'}
                                note={'Bear.'}
                                rate={5}
                            />
                            <ListRowTwo
                                src={`https://i.picsum.photos/id/788/200/300.jpg?hmac=86XnLHCHcI7HWgr9Y662VsXxUxs7H70DjGHc_6iaIw4`}
                                product={'Soda Bread'}
                                name={'200 order'}
                                note={'Bear.'}
                                rate={4}
                            />
                        </div>
                    </CustomCard>
                </Col>

                <Col className="gutter-row" md={{ span: 24 }} lg={{span: 12}}>   
                    <TitleStyled>Top Selling Items</TitleStyled>
                    <CustomCard>
                        <ListRowOne
                            text={'New user registiration'}
                            num={'884'}
                        />
                        <ListRowOne
                            text={'New user registiration'}
                            num={'884'}
                        />
                        <ListRowOne
                            text={'New user registiration'}
                            num={'884'}
                        />
                        <ListRowOne
                            text={'New user registiration'}
                            num={'884'}
                        />
                        <ListRowOne
                            text={'New user registiration'}
                            num={'884'}
                        />
                        <ListRowOne
                            text={'New user registiration'}
                            num={'884'}
                        />
                        <ListRowOne
                            text={'New user registiration'}
                            num={'884'}
                        />
                        <ListRowOne
                            text={'New user registiration'}
                            num={'884'}
                        />
                        
                    </CustomCard>
                </Col>
            </Row>
        </UtilContainer>
  );
};
