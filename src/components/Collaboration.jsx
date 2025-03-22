import { check } from "../assets";
import codeCaffeineLogo from "../assets/cc.png";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { Link } from "react-router-dom";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h3 mb-4 md:mb-8">
          Revolutionize Healthcare with InstaCare AI
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-gray-400">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Link to="/create">
          <Button>Try InstaCare AI</Button>
          </Link>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4 relative">
          <p className="body-2 mt-20 mb-8 text-gray-400 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-gray-600 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-gray-600 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full curve-glow">
                <div className="flex items-center justify-center w-full h-full bg-gray-800 rounded-full">
                  <img
                    src={codeCaffeineLogo}
                    width={88}
                    height={88}
                    alt="InstaCare AI"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-gray-700 border border-gray-500 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
