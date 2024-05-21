import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { ProductsContext } from "../../context/ProductsContext";
import ProductSchema from "../../schema/ProductSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./add.css"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Add = () => {
  const {
    sortData,
    setSortData,
    usernameInp,
    setUsernameInp,
    imgInp,
    setImgInp,
    titleInp,
    setTitleInp,
    paramInp,
    setParamInp,
  } = useContext(ProductsContext);

  const GetAllData = async () => {
    const res = await axios.get("http://localhost:5000/users");
    setSortData(res?.data);
  };
  useEffect(() => {
    GetAllData();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProductSchema),
  });

  const createProduct = async () => {
    await axios.post("http://localhost:5000/users", {
      imgSRC: imgInp,
      title: titleInp,
      param: paramInp,
    });
    GetAllData();
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="tables">
        <form className="form" action="" onSubmit={handleSubmit(createProduct)}>
          <input
            className="input"
            type="text"
            {...register("imgSRC")}
            placeholder="Image"
            onChange={(e) => setImgInp(e.target.value)}
          />
          {errors.imgSRC?.message && (
            <p style={{ color: "red" }}>{errors.imgSRC?.message}</p>
          )}
          <input
           className="input"
            type="text"
            placeholder="Title"
            {...register("title")}
            onChange={(e) => setTitleInp(e.target.value)}
          />
          {errors.title?.message && (
            <p style={{ color: "red" }}>{errors.title?.message}</p>
          )}

          <input
           className="input"
            type="text"
            placeholder="Param"
            {...register("param")}
            onChange={(e) => paramInp(e.target.value)}
          />
          {errors.param?.message && (
            <p style={{ color: "red" }}>{errors.param?.message}</p>
          )}
          <button className="addbtn" type="submit">
            Add
          </button>
        </form>

        <TableContainer className="table" component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Param</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortData.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
                >
                  <TableCell><img className="imgsrc" src={row.imgSRC} alt=""/></TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.param}</TableCell>
                  <TableCell>
                    <button
                      style={{
                        width: "100px",
                        height: "20px",
                        color: "white",
                        backgroundColor: "red",
                        border: "none",
                        borderRadius: "10px",
                      }}
                      onClick={() => {
                        let newArr = sortData.filter(
                          (item) => item.id != row._id
                        );
                        axios.delete(
                          "http://localhost:5000/users" + "/" + row._id
                        );
                        setSortData(newArr);
                       
                        GetAllData();
                      }}
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    

      </div>
    </div>
  );
};

export default Add;
