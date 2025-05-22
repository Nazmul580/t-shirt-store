import React from "react";

const CustomInput = (props) => {
  const { inputName, formData, setFormData, inputs, setInputs, inputValue } =
    props;

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleAddItem = (field, inputField) => {
    const inputValue = inputs[inputField].trim();
    if (inputValue && !formData[field].includes(inputValue)) {
      setFormData((prev) => ({
        ...prev,
        [field]: [...prev[field], inputValue],
      }));
    }
    setInputs((prev) => ({
      ...prev,
      [inputField]: "",
    }));
  };

  const handleRemoveItem = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((item) => item !== value),
    }));
  };

  return (
    <>
      <label className="block font-semibold mb-2 capitalize" htmlFor="sizes">
        {inputName}
      </label>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          id={inputName}
          name={inputValue}
          value={inputs[inputValue]}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
          placeholder={`Enter Product ${inputName}`}
          autoComplete="off"
        />
        <button
          type="button"
          onClick={() => handleAddItem(inputName, inputValue)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {formData[inputName].map((item, index) => (
          <span
            key={index}
            className="flex items-center space-x-2 px-2 py-1 bg-gray-200 text-sm rounded-md"
          >
            <span>{item}</span>
            <button
              type="button"
              onClick={() => handleRemoveItem(inputName, item)}
              className="text-red-500 hover:text-red-700"
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </>
  );
};

export default CustomInput;
