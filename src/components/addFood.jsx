const AddFood = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target); //collect data
    const data = Object.fromEntries(formData);
console.log("data being sent to backend:", data);

    try {
      const response = await fetch("http://localhost:3001/macros", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify JSON format
        },
        body: JSON.stringify(data), // Convert data to JSON
      });

      if (response.ok) {
        console.log("Food added successfully!");
      } else {
        console.error("Failed to add food.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


};

export default AddFood;
