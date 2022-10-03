import Image from "next/image"

export default function Home() {
  return (
    <div className="h-screen w-full bg-taupe pt-24">
      <div className="container mx-auto flex flex-col items-center">
        <Image 
          src="/assets/images/bundl-logo.png"
          width={60}
          height={70}
        />

        <h1 className="font-primary font-bold text-center text-6xl max-w-xl mt-8">
          Welcome to our startersproject.
        </h1>
      </div>
    </div>
  )
}
