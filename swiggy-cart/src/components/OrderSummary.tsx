import { Item } from "./CartItem";

interface Props {
    address: string;
    items: Item[];
}
export const OrderSummary = ({ address, items }: Props) => {
    const amount = items.reduce((acc, ele) => {
        return acc + ele.price*ele.count;
    }, 0);
    return (
        <div className="outside h-[146px] w-full bg-white rounded-lg flex flex-col justify-between px-[14px] py-5">
            <div className="inner-1 flex flex-start items-center gap-2 px-[14px] text-[12px] font-bold">
                <img src="/maps.svg" />
                <div>
                    <p>Delivery to</p> <p className="text-gray">{address}</p>
                </div>
            </div>
            <div className="bg-gray h-[1px]  w-full flex-shrink-0"></div>
            <div className="inner-2 flex flex-start items-center gap-2 px-[14px] text-[12px] font-bold">
                <img src="bill.svg" alt="bill-icon" />
                <div>
                    <p>Total Bill</p> <p className="text-gray">Including Taxes</p>
                </div>
                <p className="font-bold text-[14px] ml-auto">₹ {amount}</p>
            </div>
        </div>
    );
};
