import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAIResponse } from "../redux/thunks/aiThunk";
import { clearResponse } from "../redux/slices/aiSlice";


const ChatBar = () => {
  const [message, setMessage] = useState("")
  const { loading, response, error } = useSelector((state)=>state.ai)
  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()
    if(!message.trim()) return
    dispatch(fetchAIResponse(message))
  }

  const clearHandler = () => {
    setMessage("")
    dispatch(clearResponse())
  }

  return (
    <div className="shadow-md bg-white rounded-sm border-t border-gray-200">
      <div className="max-w-5xl mx-auto p-1 sm:p-3">
        <form onSubmit={submitHandler} className="flex flex-col sm:flex-row w-full gap-5 sm:gap-2">
          <input 
            type="text"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            placeholder="Ask your AI Virtual health Assistant..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-400 hover:bg-blue-500 tracking-widest cursor-pointer text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring focus:ring-blue-200"
          >
            {loading ? "Thinking..." : "Send"}
          </button>
        </form>
        {
          (response || error) && (
            <div className="">
              {response && <p><strong></strong>{response}</p>}
              {error && <p className="text-red-400">{error}</p>}
              <button
                type="button"
                onClick={clearHandler}
                className="bg-gray-200 hover:bg-gray-500 hover:text-white cursor-pointer p-1 text-sm rounded tracking-wider"
              >
                Clear
              </button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default ChatBar;