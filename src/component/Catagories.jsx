import React from "react";

class Catagories extends React.Component {
    // const catagoriesList ={
    //     electronics:"Electronics",
    //     furniture:"Furniture",
    //     cars_and_trucks:"Cars and Trucks",
    //     clothing_and_shoes:"Clothing and shoes",
    //     bussines_equipment:"Bussines Equipment",
    //     house_hold:"House Hold",
    //     free:"Free",
    //     jewlery_and_accesories:"Jewlery and accesories",
    //     books:"Books",
    //     auto_parts:"Auto parts",
    //     general:"General",
    // }
    render() {
        return (
            <div className='mt-4 border'>
            <div className='px-3'>
                <h2 className='col-4 px-0'> Catagories</h2>
                <div className=''>
                <div className='text-left'>Electronics</div>
                <div className='text-left'>Furniture</div>
                <div className='text-left'>Cars and Trucks</div>
                <div className='text-left'>Clothing and shoes</div>
                <div className='text-left'>Bussines Equipment</div>
                <div className='text-left'>House Hold</div>
                <div className='text-left'>Free</div>
                <div className='text-left'>Jewlery and accesories</div>
                <div className='text-left'>Books</div>
                <div className='text-left'>Auto parts</div>
                <div className='text-left'>General</div>
                </div>
            </div>
            </div>
        )
    }
}

export default Catagories;