
function Search({ inputString, handleClick, handleInput }) {
  return (
    <div className="flex justify-center items-center">
      <input type="text" 
            className="border border-black rounded-l-lg text-2xl p-1"
            onChange={handleInput}
            value={inputString} />
      <button 
            className="border border-black rounded-r-lg text-2xl bg-green-300 px-5 py-1 hover:bg-green-500" 
            onClick={handleClick}>
        搜尋
      </button>
    </div>
  );
}

export default Search