import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex flex-col items-center lg:flex-row justify-between gap-10 xs:px-6 sm:px-8"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:leading-none lg:text-center w-full lg:max-w-none font-palanquin font-bold">
        Sign Up from<span className="text-coral-red"> Updates </span> &
        Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
