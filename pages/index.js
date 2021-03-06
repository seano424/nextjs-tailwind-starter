import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    console.log('Mounting...')

    return () => console.log('Unmounting..')
  }, [])
  
  return (
    <div className="w-full container my-base">
      <h1 className="font-cabinet text-7xl font-black text-center max-w-2xl mx-auto">
        Next Tailwind Starter Kit!!
      </h1>
    </div>
  )
}
