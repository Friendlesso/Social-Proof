import { reviews } from "../../data/review";
import Staricon from '../../assets/icons/icon-star.svg'

export function Reviews() {
  return (
    <section>
      {reviews.map(({ rating, text }, index) =>

        <div key={index} className="flex items-center gap-5 px-5 mb-5 py-2 rounded-lg bg-(--review-bg-color) w-fit">
          <div className="flex">
            {Array.from({ length: rating }).map((_, i) => (
              <img key={i} src={Staricon} alt="Star icon" />
            ))}
          </div>
          <div>
            <p>Rated {rating} {text}</p>
          </div>
        </div>
      )}

    </section>
  )
}