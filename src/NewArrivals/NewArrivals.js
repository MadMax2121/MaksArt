import React from 'react'
import "./NewArrivals.css"

function NewArrivals() {
    const grids = [
        {
            sale: true,
            img: "/collection/arrivals1.png",
            title: "Wooden Chair",
            price: "$65.00",
            color: "rgb(220, 157, 73)"

        },
        {
            sale: true,
            img: "/collection/arrivals2.png",
            title: "Single Armchair",
            price: "$80.00",
            color: "rgb(115, 212, 85)"
        },
        {
            sale: false,
            img: "/collection/arrivals3.png",
            title: "Wooden Armchair",
            price: "$40.00",
        },
        {
            sale: true,
            img: "/collection/arrivals4.png",
            title: "Stylist Chair",
            price: "$100.00",
            color: "rgb(220, 157, 73)"
        },
        {
            sale: false,
            img: "/collection/arrivals5.png",
            title: "Modern Chair",
            price: "$120.00",
        },
        {
            sale: true,
            img: "/collection/arrivals6.png",
            title: "Maple Wood Dining Table",
            price: "$140.00",
            color: "rgb(220, 157, 73)"
        },
        {
            sale: true,
            img: "/collection/arrivals7.png",
            title: "Arm Chair",
            price: "$90.00",
            color: "rgb(115, 212, 85)"
        },
        {
            sale: false,
            img: "/collection/arrivals8.png",
            title: "Wooden Bed",
            price: "$140.00",
        }

    ]
    return (
        <main>
            <h1>New Arrivals</h1>
            <div className='grids'>
                {grids.map((grids) => (
                    <div className='mapping'>
                        <img src={grids.img} alt="" />
                        {grids.sale ? <span className="sale_sign" style={{"background-color" : grids.color}}>Sale </span>: ""}
                        <h2>{grids.title}</h2>
                        <div>{grids.price}</div>
                    </div>
                ))}
            </div>


        </main>
    )
}

export default NewArrivals
