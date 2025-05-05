import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex w-full h-[60px] border-b-1 border-[#eeeeee] justify-center items-center">
      <span>Home</span>
    </div>
  );
}
