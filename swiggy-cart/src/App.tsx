import { useState } from "react";
import "./App.css";
import CartItem, { Item } from "./components/CartItem";
import { Suggestion } from "./components/Suggestion";
import TopNav from "./components/TopNav";
import { ScrollableContainer } from "./components/ScrollableContainer";
import { OrderSummary } from "./components/OrderSummary";

const menu = [
    {
        id: 1,
        name: "Carribean Spicy Burger",
        img: "/Burger.png",
        cal: 350,
        price: 200,
        count: 1,
    },
    {
        id: 2,
        name: "Cajun Veg Burger",
        img: "/burger2.png",
        cal: 350,
        price: 219,
        count: 2,
    },
];

function App() {
    const [items, setItems] = useState<Item[]>(menu);
    const handleDelete = (id: number) => {
        setItems((prevItems) => prevItems.filter((ele) => ele.id !== id));
    };
    const handleIncrease = (id: number) => {
        setItems((prev) =>
            prev.map((ele) => {
                return ele.id === id ? { ...ele, count: ele.count + 1 } : ele;
            })
        );
    };
    const handleDecrease = (id: number) => {
        setItems((prev) =>
            prev.map((ele) => {
                return ele.id === id ? { ...ele, count: ele.count - 1 } : ele;
            })
        );
    };
    return (
        <div className="flex flex-col gap-4 bg-secondary-bg  w-[390px] h-[800px] mx-auto my-5 border-gray/40 border text-primary-text ">
            <TopNav />
            <main className="p-[14px] flex flex-col justify-start h-full">
                <div className="flex flex-col">
                    {items.length === 0 && (
                        <div className="text-gray italic text-sm h-14 flex items-center justify-center">
                            Your cart is empty
                        </div>
                    )}
                    {items.map((ele) => {
                        return (
                            <CartItem
                                key={ele.id}
                                item={ele}
                                handleDelete={handleDelete}
                                handleIncrease={handleIncrease}
                                handleDecrease={handleDecrease}
                            />
                        );
                    })}
                </div>
                <div className="suggestions my-4">
                    <h4 className="font-bold text-[14px] my-2">Frequently Ordered</h4>
                    <ScrollableContainer>
                        {[1, 2, 3, 4].map((ele) => (
                            <Suggestion key={ele} />
                        ))}
                    </ScrollableContainer>
                </div>
                <div className="summary">
                    <OrderSummary
                        address="23rd Avenuem JP Nagar, Bangalore"
                        items={items}
                    />
                </div>
                <button
                    onClick={() => alert("Checkout Successful")}
                    disabled={items.length === 0}
                    className={`font-bold text-white h-[44px] w-full rounded-lg text-[16px] flex justify-center items-center mt-auto ${
                        items.length >= 0 ? "bg-primary" : "bg-gray"
                    }`}
                >
                    Proceed to Checkout
                </button>
            </main>
        </div>
    );
}

export default App;
