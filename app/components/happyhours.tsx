import { IoBeerSharp } from "react-icons/io5";

export default function HappyHour() {
    let happyDrinks = [
        {
            name: "Soju",
            desc: "",
            price: 9.99
        },
        {
            name: "Flavored Soju",
            desc: "Apple Mango - Beach - Green Grape - Yogurt",
            price: 10.99
        },
        {
            name: "Bottled Beer(S)",
            desc: "Asahi - Kirin - Sapporo",
            price: 4.99
        },
        {
            name: "House Wine(G)",
            desc: "Red or White",
            price: 4.99
        }

    ]

    return (
        <div id="happyhour" className="container my-28">
            <div className="container mx-auto">
                <h2 className="text-center lg:text-5xl text-5xl mt-10 pb-6 font-bold" style={{color: "#10233e"}}>
                    Happy Hour Drinks!</h2>
            </div>
            <p className="text-center font-bold mb-2">5-7PM & 10-12PM on Fri & Sat</p>
            <p className="w-100 xl:mx-60 mx-5 text-center">
            Two Rounds of Happy Hour Drink for Your Weekend!<br />
            Various Flavored Soju, Beer & Wines
            </p>

            {
                happyDrinks.map((item, index) => 
                    <div key={index+100} className="my-2 xl:mx-52 mx-5 font-sans">
                        <div className="flex">
                            <h4 className="lg:text-xl text-lg font-bold uppercase">
                                {item.name}
                            </h4>
                            <div className="flex flex-auto flex-col px-1">
                                <div className="flex-1 border-b border-black"></div>
                                <div className="flex-1"></div>
                            </div>
                            {
                                item.price != 0 &&
                                <div className="text-lg flex">
                                    {
                                        `$${item.price}`
                                    }
                                </div>
                            }
                        </div>
                        <p key={index+100} className="text-gray-600 -mt-1 font-medium">
                            {item.desc}
                        </p>
                    </div>
                )
            }
        </div>
    )
}