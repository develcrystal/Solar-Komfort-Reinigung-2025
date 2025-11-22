import Image from "next/image";
import React from "react";
import { Container }  from "@/components/Container";

interface BenefitsProps {
  imgPos?: "left" | "right";
  data: {
    imgPos?: "left" | "right";
    title: string;
    desc: string;
    image: any;
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}
export const Benefits = (props: Readonly<BenefitsProps>) => {
  const { data } = props;
  return (
      <Container className="flex flex-wrap mb-24 lg:gap-16 lg:flex-nowrap">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}>
          <div className="overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src={data.image}
              width={521}
              height={521}
              alt="Benefits"
              className="object-cover w-full h-full"
              placeholder="blur"
              blurDataURL={data.image.src}
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div className="w-full mt-8 lg:mt-0">
            <div className="flex flex-col w-full">
              <h3 className="max-w-2xl mb-4 text-3xl font-bold leading-tight tracking-tight text-gray-800 lg:text-4xl dark:text-white">
                {data.title}
              </h3>

              <p className="max-w-2xl pb-6 text-lg leading-relaxed text-gray-600 lg:text-xl xl:text-xl dark:text-gray-300">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-6 space-y-6">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
  );
};

function Benefit(props: any) {
  return (
      <div className="flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-blue-600 rounded-lg w-12 h-12 shadow-md">
          {React.cloneElement(props.icon, {
            className: "w-6 h-6 text-white",
          })}
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
            {props.children}
          </p>
        </div>
      </div>
  );
}