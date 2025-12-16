import { text } from "../../data/description"

export function Description() {
  
  return(
    <div className="md:w-1/3 w-full md:text-left text-center flex flex-col gap-4">
      <h1 className="text-(--main-h-color) text-5xl font-bold">{text.title}</h1>
      <p className="text-(--desc-text-color)">{text.description}</p>
    </div>
  )
}