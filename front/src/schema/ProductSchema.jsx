import * as yup from "yup"

const ProductSchema = yup.object().shape({
    imgSRC:yup.string().required("Please image"),
    title:yup.string().required("Please title"),
    param:yup.string().required("Please param")
})

export default ProductSchema