import React from 'react'
import "./FirstContainer.css"

function FirstContainer() {
    return (
        <main>
            <div className="general">
                <div className='main_text'>
                    <h1 className='first_line'>
                        Great Design Collection
                    </h1>
                    <h1 className='second_line'>
                        Cloth Covered Accent Chair
                    </h1>
                    <p className='paragraph'>
                        Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Odio dolore cumque maxime animi,
                        quia iure blanditiis, dolores quam quo itaque
                        voluptatibus cum tempore placeat inventore.
                    </p>
                    <div className='price'>
                        <span className='first_price'>--- $ 399.00 &nbsp; &nbsp;</span>
                        <span className='second_price'> $499.00</span>
                    </div>
                    <div className='buttons'>
                        <button className='add_cart'>
                            <img src="/icons/plus.png" alt="" />
                            Add to Cart
                        </button>
                        <button className='more_info'>More Info</button>
                    </div>
                </div>
                <img className="chair_image" src="/slider/slider1.png" alt="" />
            </div>

            <div className='carousel_buttons'>
                <button className='carousel_1'>●</button>
                <button className='carousel_2'>o</button>
                <button className='carousel_3'>o</button>
            </div>
        </main>
    )
}

export default FirstContainer
