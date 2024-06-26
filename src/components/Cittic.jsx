import Image from "next/image";
import { Poppins, Saira } from "next/font/google";

const saira = Saira({
  weight: "700",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
function Info_text() {
  return (
    <div className="flex flex-col space-x-2 text-[#FFFFFF]">
      <h className={"antialised text-[40px] leading-[56px]" + saira}>
        {" "}
        CITTIC LOGO
      </h>
      <p className={"antialised text-[16px] leading-[26px]" + poppins}>
        CITTIC CUSAT provide a springboard to budding entreprenurs who wish to
        launch themselves into the world of technology based business carrers.
        In CITTIC, bright ideas can be developed to a product or service using
        advanced technology solutions. This innovation centre is designed to
        provide all the support to make business ventures successful.
      </p>
    </div>
  );
}

export default function Cittic() {
  return (
    <div className="flex flex-col space-y-1 bg-[#003C43] px-[10vw] py-[8vw] lg:h-screen lg:flex-row">
      <div className="flex bg-[#003C43] md:w-1/2 md:items-center md:justify-center">
        <Info_text />
      </div>
      <div className="flex w-full bg-[#003C43]">
        <Image
          width={1500}
          height={1500}
          src="/images/citticlogo.svg"
          className="bg-[#003C43] "
          alt="Cittic Logo"
        />
      </div>
    </div>
  );
}
