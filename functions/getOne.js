import { useEffect, useState } from 'react'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const getHello = () => {
    const [saludo, setSaludo] = useState(0);
    const hi = ["Hello","Hola","こんにちは","ハロー","Hi",".... . .-.. .-.. ---"]
    const i = getRandomInt(hi.length)
    const s= hi[i]

    useEffect(() => setSaludo(s), [])
    return saludo
}

export default getHello;