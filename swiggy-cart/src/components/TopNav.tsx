const TopNav = () => {
    return (
        <div className="flex justify-center bg-white px-4 h-[56px] relative">
            <img
                src="arrow-left.svg"
                alt="back"
                className="absolute  p-1 rounded-lg cursor-pointer left-4 top-1/2 -translate-y-1/2 hover:bg-primary-bg"
            />
            <div className="flex flex-col justify-center items-center">
                <h3 className="font-semibold text-primary-text text-[14px]">Checkout</h3>
                <p className="text-gray font-bold text-[10px]">POPEYES | JP NAGAR</p>
            </div>
        </div>
    );
};
export default TopNav;
