import ProfilePic from "./profile_pic";

const LinksCard = () => {
  return (
    <section className="grid max-w-[24rem] place-content-center gap-6 rounded-2xl bg-clr-secondary-dark-grey p-6 text-sm text-white md:p-10">
      <div className="grid place-content-center">
        <ProfilePic />
      </div>
      <div>
        <h1 className="pb-1 text-2xl font-bold">Jessica Randall</h1>
        <h2 className="font-bold text-clr-primary-green">
          London, United Kingdom
        </h2>
      </div>
      <q>Front-end develoqer and avid reader.</q>
      <div className="grid gap-4 ">
        <div
          className="rounded-lg bg-clr-secondary-grey py-3 font-bold transition-all duration-300 ease-in-out hover:bg-clr-primary-green hover:text-clr-secondary-black
      focus:cursor-pointer focus:bg-clr-primary-green focus:text-clr-secondary-black"
        >
          GitHub
        </div>
        <div
          className="rounded-lg bg-clr-secondary-grey py-3 font-bold transition-all duration-300 ease-in-out hover:bg-clr-primary-green hover:text-clr-secondary-black
      focus:cursor-pointer focus:bg-clr-primary-green focus:text-clr-secondary-black"
        >
          Frontend Mentor
        </div>
        <div
          className="rounded-lg bg-clr-secondary-grey py-3 font-bold transition-all duration-300 ease-in-out hover:bg-clr-primary-green hover:text-clr-secondary-black
      focus:cursor-pointer focus:bg-clr-primary-green focus:text-clr-secondary-black"
        >
          LnkedIn
        </div>
        <div
          className="rounded-lg bg-clr-secondary-grey py-3 font-bold transition-all duration-300 ease-in-out hover:bg-clr-primary-green hover:text-clr-secondary-black
      focus:cursor-pointer focus:bg-clr-primary-green focus:text-clr-secondary-black"
        >
          Twitter
        </div>
        <div
          className="rounded-lg bg-clr-secondary-grey py-3 font-bold transition-all duration-300 ease-in-out hover:bg-clr-primary-green hover:text-clr-secondary-black
      focus:cursor-pointer focus:bg-clr-primary-green focus:text-clr-secondary-black"
        >
          Instagram
        </div>
      </div>
    </section>
  );
};

export default LinksCard;
