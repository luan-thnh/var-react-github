import { Input } from "@nextui-org/react";
import Button from "../../../../components/ui/Button";
import Tag from "../../../../components/ui/Tag";
import { HStack } from "../../../../components/utils/h-stack";
import {
  body,
  container,
  heading,
} from "../../../../components/utils/primitives";

const HeroSection = () => {
  return (
    <section className="h-screen bg-[url('/images/home/bg_hero.png')] overflow-hidden relative bg-no-repeat bg-center bg-cover w-full pt-navbar flex items-center">
      <div
        className={container({ className: "px-4 md:px-[80px] lg:px-[160px]" })}
      >
        <Tag />
        <div className="mt-6 max-w-[886px] w-full relative z-10">
          <h1
            className={heading({
              variant: 48,
              weight: 700,
              className: "text-white",
            })}
          >
            Bridging the Gap: <br /> Insurance for Those Left Behind
          </h1>
          <p className={body({ variant: 20, className: "text-white mt-3" })}>
            Swift. Fair. Transparent. <br />
            Starting with rainfall insurance in Luzon, Philippines in Q2/2025.
          </p>

          <HStack className="mt-8 flex-col lg:flex-row justify-start items-start">
            <Button
              className="text-white w-full lg:w-fit"
              size="lg"
              endIcon={
                <img
                  src="/images/home/arrow-right.svg"
                  alt="arrow"
                  className="ml-3"
                />
              }
            >
              Get in touch
            </Button>
            <Input
              placeholder="Enter your email address"
              className="w-full lg:max-w-[378px]"
              classNames={{
                inputWrapper: "h-[52px] rounded font-manrope py-[18px] px-6",
                input: "placeholder:text-[#98A2B3]",
              }}
              radius="none"
            />
          </HStack>
        </div>
      </div>
      <img
        src="/images/home/fam_img.png"
        width={529}
        height={529}
        alt="hero"
        className="absolute right-0 bottom-0"
      />
    </section>
  );
};

export default HeroSection;