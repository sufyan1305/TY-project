import React,{useState} from "react";
import axios from 'axios';

export default function WarehouseForm() {

    const [data, setdata] = useState({
        warehouse_type : null,
        warehouse_location : {
            state:null,
            city:null,
            area:null
        },
        superior_warehouse : null
    });

    const addWarehouse = (e) =>{
        e.preventDefault();
    }

  return (
    <>
      <form action="" onSubmit={(e) => addWarehouse(e)}>
        <div>
          <label htmlFor="">Warehouse type</label>
          <select name="" id="" onChange={e => setdata({ ...data, warehouse_type: e.target.value })}>
            <option value="Central Warehouse">Central Warehouse</option>
            <option value="Sub Warehouse">Sub Warehouse</option>
            <option value="Outlet">Outlet</option>
          </select>
        </div>
        <div>
        <label htmlFor="">Warehouse Location</label>
        <br />
        <label htmlFor="">State</label>
        <input type="text"  />
        <label htmlFor="">City</label>
        <input type="text" />
        <label htmlFor="">Area</label>
        <input type="text" />
        </div>
        <div>
            <label htmlFor="">superior Warehouse</label>
            <input type="text" />
        </div>
        <div>
            <button  className="btn btn-dark" type="submit">Add</button>
            <button className="btn" type="reset">clear</button>
        </div>
      </form>
    </>
  );
}