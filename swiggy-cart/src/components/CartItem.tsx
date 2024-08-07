import { useState } from "react";

export interface Item {
    id: number;
    name: string;
    cal: number;
    price: number;
    img: string;
    count: number;
}

interface Props {
    item: Item;
    handleDelete: (index: number) => void;
    handleIncrease: (index: number) => void;
    handleDecrease: (index: number) => void;
}

const CartItem = ({ item, handleDelete, handleIncrease, handleDecrease }: Props) => {
    const [visible, setVisible] = useState(true);
   
    const handleDown = () => {
        if (item.count <= 1) {
            setVisible(false);
            setTimeout(() => handleDelete(item.id), 300);
        }
        handleDecrease(item.id);
    };

    return (
        <div
            className={`bg-white w-full flex  rounded-[10px] transition-all ease-out duration-300 ${
                visible
                    ? "h-[100px] opacity-100 p-[10px] mb-2 "
                    : "h-0 opacity-0 overflow-hidden p-0 m-0"
            }`}
        >
            <img className="h-[80px] w-[80px] rounded-sm" src={item.img} alt="" />
            <div className="flex flex-col px-2 w-full">
                <p className="text-md  text-[12px] font-bold">{item.name}</p>
                <p className="text-sm text-gray text-[10px]">{item.cal} kcal</p>
                <div className="flex justify-between items-end mt-auto">
                    <p className="text-[12px] font-bold text-lg">₹ {item.price}</p>
                    <div className="h-[28px] w-[88px] border-primary border bg-primary-bg text-primary rounded-lg font-bold text-[18px] flex justify-between px-2 items-center">
                        <button onClick={handleDown}>-</button>
                        <span className="text-[14px]">{item.count}</span>
                        <button onClick={() => handleIncrease(item.id)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CartItem;
