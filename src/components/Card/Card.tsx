import { userReview } from "../../data/user"

export function Card() {
  return (
    <section className="flex lg:flex-row flex-col gap-6 justify-center">
      {userReview.map(({ name, profileImg, isBuyer, review }, index) => (
        <article
          key={index}
          className="max-w-[95vw] lg:w-sm w-full h-fit p-10 rounded-[10px] bg-(--card-bg-color) flex flex-col gap-5"
          style={{marginTop: `${index + 1.5}rem`}}
        >
          <div className="flex items-center gap-4">
            <img className="rounded-[50%] h-12" src={profileImg} alt="User Image" />
            <div className="flex flex-col">
              <p className="text-white">{name}</p>
              <p className="text-(--card-verify)">{isBuyer ? 'Verifed Buyer' : 'Not a Buyer'}</p>
            </div>
          </div>
          <p className="text-white">{review}</p>
        </article>
      ))}
    </section>
  )
}