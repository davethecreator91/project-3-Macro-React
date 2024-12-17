
const UpdateFood = ({id, onUpdateSuccess }) => {
    console.log("Received ID:", id); // Debugging - Check if ID is received


    const handleUpdateFood = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target); //collect data
      const stateData = Object.fromEntries(formData.entries())
  
  try {
    const res = await fetch(`http://localhost:3001/macros/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stateData),
    });
    const updatedData = await res.json();

    onUpdateSuccess(updatedData)

  } catch (error) {
    console.error("Error updating Macros:", error);
  }
    };
  
    return (
      <div>
        <form onSubmit={handleUpdateFood}>
          <label htmlFor="food">Name:</label>
          <input type="text" name="food" id="food" />
          <button type="submit">Update</button>
        </form>
      </div>
    );
  };
  
  export default UpdateFood;
  