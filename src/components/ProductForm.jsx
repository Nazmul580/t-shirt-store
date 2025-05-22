import React, { useRef, useState } from "react";
import { useAddProductMutation } from "../features/ProductApi";
import { useNavigate } from "react-router-dom";
import CustomInput from "./CustomInput";

const FormComponent = () => {
  const [addProduct] = useAddProductMutation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    discount: "",
    category: "",
    tags: [],
    colors: [],
    sizes: [],
    imageUrl: [],
  });

  const [inputs, setInputs] = useState({
    tagInput: "",
    colorInput: "",
    sizeInput: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    setLoading(true);

    const uploadedImages = [];
    const cloudinaryUrl =
      "https://api.cloudinary.com/v1_1/dvfxdetcl/image/upload";

    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "t-shirt-store");

      try {
        const response = await fetch(cloudinaryUrl, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        uploadedImages.push(data.secure_url);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    setFormData((prev) => ({
      ...prev,
      imageUrl: [...prev.imageUrl, ...uploadedImages],
    }));

    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    await addProduct(formData);
    handleDiscourd();
    navigate("/admin_dashboard/products");
  };
  const handleDiscourd = () => {
    setFormData({
      title: "",
      description: "",
      price: "",
      expense: "",
      category: "",
      tags: [],
      colors: [],
      sizes: [],
      imageUrl: [],
    });
    setInputs({
      tagInput: "",
      colorInput: "",
      sizeInput: "",
    });
  };
  const imgRef = useRef();
  return (
    <div className="max-w-10/12 mx-auto p-4">
      <form className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label className="block font-semibold mb-2" htmlFor="category">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Title"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-md min-h-24"
            placeholder="Description"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2" htmlFor="files">
            Images
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {formData.imageUrl.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Uploaded ${index}`}
                className="w-20 h-20 object-cover rounded-md"
              />
            ))}
          </div>
          <div className="mt-3 ">
            <input
              type="file"
              id="files"
              multiple
              onChange={handleFileChange}
              ref={imgRef}
              className="hidden"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                imgRef.current.click();
              }}
              className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-200"
            >
              <span>{loading ? "Uploading Images..." : "Upload Images"}</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-2" htmlFor="price">
              Price ($)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="0.1"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2" htmlFor="discount">
              Discount (%)
            </label>
            <input
              type="number"
              id="discount"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="0.1"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2" htmlFor="category">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Category"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2" htmlFor="price">
              stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="0.1"
            />
          </div>

          {/* Tags */}
          {/* <div>
            <CustomInput
              inputName={"tags"}
              formData={formData}
              setFormData={setFormData}
              inputs={inputs}
              setInputs={setInputs}
              inputValue={"tagInput"}
            />
          </div> */}

          {/* Colors */}
          <div>
            <CustomInput
              inputName={"colors"}
              formData={formData}
              setFormData={setFormData}
              inputs={inputs}
              setInputs={setInputs}
              inputValue={"colorInput"}
            />
          </div>

          {/* Sizes */}
          <div>
            <CustomInput
              inputName={"sizes"}
              formData={formData}
              setFormData={setFormData}
              inputs={inputs}
              setInputs={setInputs}
              inputValue={"sizeInput"}
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
