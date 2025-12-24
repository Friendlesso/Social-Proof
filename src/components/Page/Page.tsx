import { Card } from "../Card/Card";
import { Description } from "../Description/Description";
import { Reviews } from "../Reviews/Reviews";

export function Page() {
  
  return (
    <section className="max-w-[90vw] w-full flex flex-col md:gap-20 gap-3 relative z-10">
      <div className="flex md:flex-row flex-col justify-around md:gap-0 gap-6">
        <Description />
        <Reviews />
      </div>
      <Card />
    </section>
  )
}
