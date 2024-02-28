import ProfilePic from "./profile_pic";

const LinksCard = () => {
  return (
    <section className="bg-clr-secondary-dark-grey grid max-w-[24rem] place-content-center gap-6 rounded-2xl p-6 text-sm text-white md:p-10">
      <div className="grid place-content-center">
        <ProfilePic />
      </div>
      <div>
        <h1 className="text-2xl font-bold">Jessica Randall</h1>
        <h2 className="text-clr-primary-green font-bold">
          London, United Kingdom
        </h2>
      </div>
      <p>"Front-end developer and avid reader."</p>
      <div className="grid gap-4 ">
        <div
          className="bg-clr-secondary-grey hover:bg-clr-primary-green hover:text-clr-secondary-black focus:bg-clr-primary-green focus:text-clr-secondary-black rounded-lg py-3 font-bold transition-all
      duration-300 ease-in-out focus:cursor-pointer"
        >
          GitHub
        </div>
        <div
          className="bg-clr-secondary-grey hover:bg-clr-primary-green hover:text-clr-secondary-black focus:bg-clr-primary-green focus:text-clr-secondary-black rounded-lg py-3 font-bold transition-all
      duration-300 ease-in-out focus:cursor-pointer"
        >
          Frontend Mentor
        </div>
        <div
          className="bg-clr-secondary-grey hover:bg-clr-primary-green hover:text-clr-secondary-black focus:bg-clr-primary-green focus:text-clr-secondary-black rounded-lg py-3 font-bold transition-all
      duration-300 ease-in-out focus:cursor-pointer"
        >
          LnkedIn
        </div>
        <div
          className="bg-clr-secondary-grey hover:bg-clr-primary-green hover:text-clr-secondary-black focus:bg-clr-primary-green focus:text-clr-secondary-black rounded-lg py-3 font-bold transition-all
      duration-300 ease-in-out focus:cursor-pointer"
        >
          Twitter
        </div>
        <div
          className="bg-clr-secondary-grey hover:bg-clr-primary-green hover:text-clr-secondary-black focus:bg-clr-primary-green focus:text-clr-secondary-black rounded-lg py-3 font-bold transition-all
      duration-300 ease-in-out focus:cursor-pointer"
        >
          Instagram
        </div>
      </div>
    </section>
  );
};

export default LinksCard;
