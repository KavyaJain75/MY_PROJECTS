import {  useState } from "react"
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import axios from "axios";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [response, setResponse] = useState({});
  const [error, setError] = useState("");

  const searchFunction = async (e) => {
    e.preventDefault();


    // Validation: Ensure the PNR number is exactly 10 digits
    if (!searchText || searchText.length !== 10 || isNaN(searchText)) {
      setError("Please enter a valid 10-digit PNR number.");
      return;
    }

    setError(""); // Clear error if input is valid

  

    const API_URL = `${import.meta.env.VITE_API_URL}/search?pnr=${searchText.toString()}`;
    try {
      const response = await axios.get(`${API_URL}`)
      console.log(response);
      setResponse(response?.data?.data[0]);
      setError("");
    } catch (error) {
      console.log(error);
      // setError(error)
    }
  }
  return (
    <div className="h-screen bg-blue-900">
      <Navbar />
      <div>
        <Search setSearchText={setSearchText} searchFunction={searchFunction} />
        <div className="text-center">
        <div className="flex justify-center">
        {
          Object.keys(response).length > 0 ? <>
            <div className="w-1/2 h-80 p-3 bg-white rounded">
              <div>
                <h2 className="text-xl"><span className="font-bold">PNR Number:</span> {response?.pnr_number}</h2>
                <h2 className="text-xl"><span className="font-bold">Train Number:</span> {response?.train_number}</h2>  
                <h2 className="text-xl"><span className="font-bold">Train Name:</span> {response?.train_name}</h2> 
                <h2 className="text-xl"><span className="font-bold">Passenger Name:</span> {response?.passenger_name}</h2> 
                <h2 className="text-xl"><span className="font-bold">Journey Date:</span> {response?.journey_date}</h2> 
                <h2 className="text-xl"><span className="font-bold">Source:</span> {response?.source}</h2> 
                <h2 className="text-xl"><span className="font-bold">Destination:</span> {response?.destination}</h2> 
                <h2 className="text-xl"><span className="font-bold">Coach:</span> {response?.coach}</h2> 
                <h2 className="text-xl"><span className="font-bold">Seat Number:</span> {response?.seat_number}</h2>
                <h2 className="text-xl"><span className="font-bold">Status:</span> {response?.status}</h2>
              </div>
            </div>
          </> : <>
            <div>
            <h2 className="text-xl text-white">{error}</h2> 
            </div>
          </>
        }
        </div>
        </div>
      </div>
    </div>
  )
}

export default App