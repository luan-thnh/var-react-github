import Button from "@/components/ui/Button";
import { body, container, heading } from "@/components/utils/primitives";
import bgPilot from "/images/home/bg_pilot.png";

const PilotProgramSection = () => {
  return (
    <section className="bg-[#F6F8F7] py-[114px]">
      <div className={container()}>
        <div className="w-full max-w-[940px] mx-auto relative ">
          <img src={bgPilot} className="rounded-lg" />
          <div className="xl:absolute pt-12 px-10 pb-[60px] mx-auto xl:mx-0 relative top-[-113px] w-[90%] xl:bottom-auto xl:right-[-113px] xl:top-1/2 xl:-translate-y-1/2 xl:w-full xl:max-w-[448px] rounded-lg border border-[#E0E3EB] bg-white shadow-[0px_20px_24px_-4px_rgba(17,_24,_39,_0.10),_0px_8px_8px_-4px_rgba(17,_24,_39,_0.04)]">
            <h2
              className={heading({
                variant: 36,
                weight: 700,
                className: "text-primary",
              })}
            >
              Pilot program
            </h2>
            <ul className="font-manrope text-primary-dark/80 list-disc pl-5 pt-12 pb-[58px]">
              <li className={body({ variant: 18 })}>
                Providing insurance to those most affected by unpredictable
                rainfall.
              </li>
              <li className={body({ variant: 18 })}>
                Simple onboarding process with affordable premiums.
              </li>
              <li className={body({ variant: 18 })}>
                Transparent terms and instant payouts for natural disasters.
              </li>
            </ul>

            <Button className="min-w-[130px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotProgramSection;
