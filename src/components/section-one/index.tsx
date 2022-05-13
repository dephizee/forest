
import { Col, Row } from "antd";
import { StatsCard } from "../dashboard";
import { UtilContainer } from "../utils";

export const SectionOneContainer = () => {

  return (
        <UtilContainer>
            <Row gutter={[8, 8]}>
                <Col className="gutter-row" xs={{ span: 12 }} md={{ span: 8 }} lg={{span: 4}}>
                <StatsCard
                    title="Earnings"
                    body="$ 315.20"
                    icon={<i className="ri-money-dollar-circle-line"></i>}
                    />
                </Col>
                <Col className="gutter-row" xs={{ span: 12 }} md={{ span: 8 }} lg={{span: 4}}>
                <StatsCard
                    title="ORDERS"
                    body="16"
                    icon={<i className="ri-money-dollar-circle-line"></i>}
                    />
                </Col>
                <Col className="gutter-row" xs={{ span: 12 }} md={{ span: 8 }} lg={{span: 4}}>
                <StatsCard
                        title="SESSIONS"
                        body="463"
                        icon={<i className="ri-money-dollar-circle-line"></i>}
                        />
                </Col>
                <Col className="gutter-row" xs={{ span: 12 }} md={{ span: 8 }} lg={{span: 4}}>
                <StatsCard
                        title="USERS"
                        body="17"
                        icon={<i className="ri-money-dollar-circle-line"></i>}
                        />
                </Col>

                <Col className="gutter-row" xs={{ span: 12 }} md={{ span: 8 }} lg={{span: 4}}>
                <StatsCard
                        title="RETURNS"
                        body="2"
                        icon={<i className="ri-money-dollar-circle-line"></i>}
                        />
                </Col>

                <Col className="gutter-row" xs={{ span: 12 }} md={{ span: 8 }} lg={{span: 4}}>
                <StatsCard
                        title="COMMENTS"
                        body="16"
                        icon={<i className="ri-money-dollar-circle-line"></i>}
                        />
                </Col>
                
            </Row>
        </UtilContainer>
  );
};
