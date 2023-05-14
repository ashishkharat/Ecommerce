import React from 'react'
// import product1 from "../images/home/product1.jpg"
import product2 from "../images/home/product2.jpg"
import product3 from "../images/home/product3.jpg"
import product4 from "../images/home/product4.jpg"
import product5 from "../images/home/product5.jpg"
import product6 from "../images/home/product6.jpg"

export default function 
() {
  return (
    <div>
        <div class="row">
                    <figure class="col-xl-4 col-6 text-center">
                        <img class="img-fluid" src={require('../images/home/product1.jpg')} alt="" width={250} height={500}/>
                        <h2>Price 2300</h2>
                        <p>Product name</p>
                        <p><button  >More Details</button></p>
                    </figure>
                    <figure class="col-xl-4 col-6 text-center">
                        <img class="img-fluid" src={product2} alt="" width={250} height={500}/>
                        <h2>Price 2300</h2>
                        <p>Product name</p>
                        <p><button >More Details</button></p>
                    </figure>
                    <figure class="col-xl-4 col-6 text-center">
                        <img class="img-fluid" src={product3} alt=""  width={250} height={500}/>
                        <h2>Price 2300</h2>
                        <p>Product name</p>
                        <p><button >More Details</button></p>
                    </figure>
                    <figure class="col-xl-4 col-6 text-center">
                        <img class="img-fluid" src={product4} alt="" width={250} height={500}/>
                        <h2>Price 2300</h2>
                        <p>Product name</p>
                        <p><button >More Details</button></p>
                    </figure>
                    <figure class="col-xl-4 col-6 text-center">
                        <img class="img-fluid" src={product5} alt=""width={"250px"} height={"500px"}/>
                        <h2>Price 2300</h2>
                        <p>Product name</p>
                        <p><button >More Details</button></p>
                    </figure>
                    <figure class="col-xl-4 col-6 text-center">
                        <img class="img-fluid" src={product6} alt="" width={"250px"} height={"500px"}/>
                        <h2>Price 2300</h2>
                        <p>Product name</p>
                        <p><button >More Details</button></p>
                    </figure>
                </div>
            </div>
    
  )
}
