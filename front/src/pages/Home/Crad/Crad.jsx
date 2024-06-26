import React, { useContext, useEffect } from "react";
import "./crad.css";
import axios from "axios";
import { ProductsContext } from "../../../context/ProductsContext";
import {useNavigate} from "react-router-dom"
const Crad = () => {
  const {data,setData, filter, setFilterData } = useContext(ProductsContext);

  const GetAllData = async () => {
    const navigate=useNavigate()
    const res = await axios("http://localhost:5000/users");
    setData(res?.data);
    setFilterData(res?.data);
    console.log(res?.data);
  };
  useEffect(() => {
    GetAllData();
  }, []);
  return (
    <div className="crad">
      <div className="datas">
        {filter.map((elem) => {
          return (
            <div className="productDiv" key={elem._id}>
              <img className="imgcrad" src={elem.imgSRC} alt="" />
              <h1 className="titlecrad">{elem.title}</h1>
              <p className="paramcrad">{elem.param}</p>
              <button className="detailbtn">Detail</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Crad;
