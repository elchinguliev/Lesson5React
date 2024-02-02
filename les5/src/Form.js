import React, { useState } from 'react'
import { carDatas } from './Data';


export default function Form({addCar}) {

  const [cars, setCars] = useState(carDatas);

    const  [model ,setModel]=useState("");
    const  [vendor ,setVendor]=useState("");
    const  [price ,setPrice]=useState("");
    const  [image ,setImage]=useState("");

    const [selectedCar, setSelectedCar] = useState(null);
    const [selectedCarId, setSelectedCarId] = useState(null);
  
    function ClickForUpdateFunc(p) {
      setSelectedCar(p);
      setSelectedCarId(p.productIndex);
    }


    function handleUpdateSubmitFunc(e) {
      e.preventDefault();
  
      const updatedCar = {
        model: selectedCar?.model,
        vendor: selectedCar?.vendor,
        price: selectedCar?.price,
        image: selectedCar?.image,
      };
    

      const selectedIndex = cars.findIndex((car) => car.id === selectedCarId);

      const updatedCars = [
        ...cars.slice(0, selectedIndex),
        updatedCar,
        ...cars.slice(selectedIndex + 1),
      ];

      setCars(updatedCars);

      // Clear the selected product after updating
      setSelectedCarId(null);
      setSelectedCar(null);
  
      alert("Product Updated Successfully");
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setModel("");
        setVendor("");
        setPrice("");
        setImage("");
        let obj = 
          {
            id: 7,
            model: model,
            vendor: vendor,
            price: price,
            image: image,
        }
        
        addCar(obj);     
    }


  return (
    <div style={{backgroundColor:"aquamarine", color:"white", fontSize:"25px",fontWeight:"bold",width:"70%", fontWeight:"bold",color:"Highlight"}}>

      <h1>Add </h1>
      <form onSubmit={handleSubmit}>
        <label>Model:</label>
        <input  type="text" id="model"  name="model"  value={model} onChange={(e) => setModel(e.target.value)}
        />
        <br></br>
        <label >Vendor:</label>
        <input type="text"  id="vendor" name="vendor" value={vendor} onChange={(e) => setVendor(e.target.value)}
        />
        <br></br>

        <label >Price:</label>
        <input  type="number" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} 
        />
        <br></br>

        <label>Image URL:</label>
        <input type="url" id="imageUrl"    name="imageUrl" value={image}  onChange={(e) => setImage(e.target.value)}   
        />


        <button type="submit">Add car</button>
      </form>

      <form onSubmit={handleUpdateSubmitFunc}>
        <br></br>
        <div>
          <input type="text" value={selectedCar?.vendor ||""} onchange={(e)=>setSelectedCar({...selectedCar,vendor:e.target.value})} id="vendor" name="vendor"></input>
        </div>
        <div>
          <input type="text" value={selectedCar?.model ||""} onchange={(e)=>setSelectedCar({...selectedCar,model:e.target.value})} id="model" name="model"></input>
        </div>
        <div>
          <input type="number" value={selectedCar?.price ||""} onchange={(e)=>setSelectedCar({...selectedCar,price:e.target.value})} id="price" name="price"></input>
        </div>
        <div>
          <input type="text" value={selectedCar?.image ||""} onchange={(e)=>setSelectedCar({...selectedCar,image:e.target.value})} id="image" name="image"></input>
        </div>
        <button type="submit" style={{ background: "#007fcc" }}>
          <b>Update Product</b>
        </button>
      </form>
        <br></br>
        <br></br>
        
        
    </div>
  )
}
