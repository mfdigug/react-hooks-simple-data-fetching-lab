import React, {useState, useEffect} from 'react'

export default function App() {
    
    const [dogData, setDogData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
            setDogData(data.message)
            setIsLoaded(true)
            })
        }, [])

    if (!isLoaded) {
        return <p>Loading...</p>;
    }  else {
        return <img src={dogData}alt="A Random Dog"></img>
    }

}
