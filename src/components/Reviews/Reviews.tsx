import { reviews } from "../../data/review";
import Staricon from '../../assets/icons/icon-star.svg'

export function Reviews() {
  return (
    <section className="md:w-fit w-full flex flex-col ">
      {reviews.map(({ rating, text }, index) =>

        <div 
          key={index} 
          className="review flex items-center gap-5 px-5 mb-5 py-4 rounded-lg bg-(--review-bg-color) w-full"
          style={{"--ml": `${index + 1.5}rem`} as React.CSSProperties} 
        >
          <div className="flex">
            {Array.from({ length: rating }).map((_, i) => (
              <img key={i} src={Staricon} alt="Star icon" />
            ))}
          </div>
          <div>
            <p className="text-(--review-text-color) font-bold">Rated {rating} {text}</p>
          </div>
        </div>
      )}

    </section>
  )
}