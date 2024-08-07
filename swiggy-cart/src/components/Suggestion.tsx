export const Suggestion = () => {
    return (
        <div className="h-[140px] w-[148px] bg-white flex-shrink-0 flex flex-col justify-start rounded-lg p-1">
            <img className="w-full h-auto object-contain" src="/Fanta.png" alt="juice" />
            <div className="flex flex-col justify-between h-full items-start font-bold text-[10px] mb-1 mt-1.5 mx-1.5">
                <p>Fanta - 1PET</p>
                <p>₹ 89</p>
            </div>
        </div>
    );
};
