import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ForginSquad" },
    { name: "description", content: "Welcome to ForginSquad!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-center items-center font-poppins">
      <div className="flex flex-col w-full max-w-[1280px] pt-[60px]">
        <div className="flex flex-row w-fit px-[15px] h-[30px] text-[14px] text-[#004746] font-semibold border-1 border-[#F0F4F7] rounded-full gap-x-[10px] justify-center items-center self-center">
          <span>A</span><span>POWERING THE NEXT BIG THING</span>
        </div>
        <h1 className="mt-[15px] text-[72px] text-[#004746] text-center font-medium leading-[110%] tracking-tighter self-center max-w-[1000px]">
          From Idea To Success—Build, Launch, And Grow <span className="text-[#00BC72]">Faster</span>.
        </h1>
        <span className="mt-[25px] text-[#727272] font-sans text-center font-normal max-w-[640px] self-center">
          We craft high-performing digital products that transform ideas into thriving businesses—built for growth, differentiation, and lasting impact.
        </span>
      </div>
    </div>
  );
}
