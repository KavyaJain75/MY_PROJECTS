import React from "react"

const Search = ({setSearchText, searchFunction}) => {  
  return (
    <form action="" className="flex items-center justify-center p-4 ">
        <input 
          type="text" 
          placeholder="Enter 10-Digit PNR Number"
          className="border rounded-lg w-1/2 h-10 mr-2 text-lg p-2 focus:bg-blue-50 border-blue-200" 
          onChange={(e ) => setSearchText(e.target.value)}
          maxLength="10"
        />
        <button 
          className="h-10 w-20 ml-2 rounded border border-blue-200 text-white bg-blue-400 text-lg hover:bg-blue-500" 
          onClick={(e) => searchFunction(e)}
        >
          Search
        </button>
    </form>
  )
}

export default Search