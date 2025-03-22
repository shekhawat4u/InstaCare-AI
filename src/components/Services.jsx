import Section from "./Section";
import Heading from "./Heading";
import { service1, check } from "../assets";
import { brainwaveServices } from "../constants";
import { Gradient } from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
      <Heading
  title="Transform Healthcare with AI."
  text="Harness the power of AI-driven diagnostics and predictive analytics to revolutionize patient care."
/>


        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="InstaCare AI Services"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
            <h4 className="h4 mb-4">Revolutionize Healthcare with AI</h4>
<p className="body-2 mb-[3rem] text-n-3">
  InstaCare AI empowers medical professionals with advanced AI-driven diagnostics, predictive analytics, and innovative healthcare solutions to enhance patient care.
</p>


              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} alt="Check Icon" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2"></div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
