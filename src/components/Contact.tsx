import ContactForm from "./ContactForm";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeam";
import World from "./ui/World";

const Contact = () => {
  return (
    <section className="pt-20 relative" id="contact">
      <BackgroundBeamsWithCollision>
        <div className="flex lg:flex-row flex-col-reverse gap-7 w-full items-center pb-20">
          <ContactForm />
          <div className="lg:h-[30rem] h-full lg:flex-[0.5] w-full">
           <World />
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default Contact;
