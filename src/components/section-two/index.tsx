import { TitleStyled, UtilContainer } from "@/components";
import { DivRow, StyledTag } from "./index.styled";
interface SectionRowProps {
  orderNumber: string;
  color: string;
  status: string;
  amount: string;
  timeRange: string;
}


const SectionRow = (props:SectionRowProps) => {
  const { orderNumber,color, status, amount, timeRange } = props;
  return (
        <DivRow>
          <div className="order-div">
            <a href="">{orderNumber}</a>
          </div>

          <div className="tag-div">
            <StyledTag color={color}>{status}</StyledTag>
          </div>

          <div>
            <span>{amount}</span>
          </div>

          <div>
            <span>{timeRange}</span>
          </div>
        </DivRow>
  );
};

export const SectionTwoContainer = () => {

  return (
    <UtilContainer>
        <TitleStyled>Recent Orders</TitleStyled>
        <>
          <SectionRow
            orderNumber="Order #0940953"
            color="magenta"
            status="PENDING"
            amount="$ 300"
            timeRange="Today - 13:20"
          />
          <SectionRow
            orderNumber="Order #0940953"
            color="gold"
            status="SHIPPING"
            amount="$ 300"
            timeRange="Today - 13:20"
          />
          <SectionRow
            orderNumber="Order #0940953"
            color="gold"
            status="SHIPPING"
            amount="$ 300"
            timeRange="Today - 13:20"
          />
          <SectionRow
            orderNumber="Order #0940953"
            color="green"
            status="DELIVERED"
            amount="$ 300"
            timeRange="Today - 13:20"
          />
          <SectionRow
            orderNumber="Order #0940953"
            color="gold"
            status="SHIPPING"
            amount="$ 300"
            timeRange="Today - 13:20"
          />
          <SectionRow
            orderNumber="Order #0940953"
            color="gold"
            status="SHIPPING"
            amount="$ 300"
            timeRange="Today - 13:20"
          />
        </>
    </UtilContainer>
  );
};


