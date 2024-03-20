
import { useState } from "react";
import {data} from "../data/data.js";

const Food = () => {
    //console.log(data)
  const [foods, setFoods ]=useState(data);


  //Filter Type burger etc.
    const filterType =(category)=>{
        setFoods(
            data.filter((item)=>{
                return item.category === category
            })
        )
    }

    //Filter by price
    const filterPrice = (price) => {
        setFoods(
            data.filter((item)=>{
                return item.price === price
            })

        )
    }
 
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12 '>
        <h1 className='text-orange-600 font-bold text-4xl text-center '>Top Rated Menu Items</h1>

        {/* Filter Row  */}
        <div className='flex flex-col lg:flex-row justify-between'>

            {/* filter Type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={()=> setFoods(data)} className='m-0.5 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={()=>filterType('burger')} className='m-0.5 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burger</button>
                    <button onClick={()=> filterType('pizza')}  className='m-0.5 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={()=> filterType('salad')} className='m-0.5 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                    <button onClick={()=> filterType('chicken')} className='m-0.5 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken </button>
                </div>
            </div>

            {/* filter price */}
            <div>
                <p className='font-bold text-gray-700'>Filter price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={()=>filterPrice('$')} className='m-0.5 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600'>$</button>
                    <button onClick={()=>filterPrice('$$')} className='m-0.5 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600'>$$</button>
                    <button onClick={()=>filterPrice('$$$')} className='m-0.5 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600'>$$$</button>
                    <button onClick={()=>filterPrice('$$$')} className='m-0.5 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600'>$$$$</button>
                </div>
            </div>
        </div>

        {/* Display foods */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 ">
            {foods.map((item, index)=>(
                <div  key={index} className="border rounded-lg shadow-lg hover:scale-105 duration-300">
                    <img src={item.image} alt={item.name}
                    className="w-full h-[200px] object-cover rounded-lg"/>
                    <div className="flex justify-between px-4 py-2">
                        <p className="font-bold ">{item.name}</p>
                        <p>
                        <span className="bg-orange-500 text-white p-1 rounded-full">{item.price}</span>
                        
                        </p>
                    </div>


                </div>

            ))}
        </div>

    </div>
  )
}

export default Food