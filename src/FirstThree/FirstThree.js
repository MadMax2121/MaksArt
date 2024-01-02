import React from 'react'
import "./FirstThree.css"

function FirstThree() {
    return (
        <main className='new_arrivals_main'>
            <div className='first3'>
                    <div className='first_chair'>
                        <img style={{height: "2cm",width: "2.5cm"}}src="/popular-products/p1.png" alt="" />
                        <h4>Arm Chair</h4>
                        <div className='pp'>
                        Lorem ipsum sinapsy dolor sit amet consectetur 
                        adipisicing elit ratione.
                        </div>
                    </div>

                    <div className='second_chair'> 
                        <img src="/popular-products/p2.png" alt="" />
                        <div className='second_chair_text'>
                            <h2>Latest Design Stool and Chair</h2>
                            <p>Iusto eligendi, libero facere animi deleniti mollitia 
                                nobis incidunt nulla. Molestias sequi natus maiores quam,
                                itaque quia eum laboriosam beatae pariatur facilis ipsa.
                            </p>
                            <h2 className='sale'>
                                Sale Starts from <span style={{color:"rgb(220, 157, 73)"}}>
                                    $99.0
                                    </span>
                            </h2>
                            <button>Discover More</button>

                        </div>
                    </div>

                    <div className='third_chair'>
                        <img src="/popular-products/p3.png" alt="" />
                        <h2>Hanging Lamp</h2>
                        <p>Inventore ipsam, ex eaque saepe nesciunt nostrum 
                        voluptate voluptatum.</p>
                    </div>
            </div>


        </main>
    )
}

export default FirstThree;
