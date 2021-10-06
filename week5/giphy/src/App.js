import {useEffect, useState} from "react"
import axios from "axios"
const useEffectForm = () =>{
  const [search, setSearch] = useState('dog');
  const [gif, setGif] = useState([])
  const apiKey = 'QCAkuioqUnyrmHRgaXLABNeR3OmMPQ0P'
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=2`
//https://api.giphy.com/v1/gifs/search?api_key=QCAkuioqUnyrmHRgaXLABNeR3OmMPQ0P&q=dog&limit=1
  useEffect(() =>{
    axios.get('https://api.giphy.com/v1/gifs/search?api_key=QCAkuioqUnyrmHRgaXLABNeR3OmMPQ0P&q=dog&limit=2')
    .then(res =>{setGif(res.data)
    console.log(res.data)})
    .catch(err => console.log(err))
    
  }, [])

  const getGif = () =>{
    axios.get(url)
    .then(res =>{setGif(res.data)})
    .catch(err => console.log(err))
  }

  const clickEvent = () =>{
    getGif()
  }

  const handleChange = (e) =>{
    setSearch(e.target.value)
  }

  console.log('gif: ', gif)

  //gif &&
  //gif.map((item, index) => <div className='gif' key={index}><img src={item.url} alt=''/></div>)

  return(
    <div>
      <h1>title</h1>
      <input type='text' value={search} onChange={handleChange} />
      <button onClick={clickEvent}>Search Giphy</button>
      
      <div>
        {
          gif.length !== 0 &&
          gif.map((item, index) => <div className='gif' key={index}><img src={item.images.original.url} alt=''/></div>)
        }
      </div>      
    </div>
  )
}

export default useEffectForm;