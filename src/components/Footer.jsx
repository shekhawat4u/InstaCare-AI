import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex flex-col sm:flex-row sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        
        <ul className="flex gap-5 flex-wrap justify-center sm:justify-start">
          <li>
            <a
              href="/about-us"
              className="text-n-4 hover:text-n-1 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/privacy-policy"
              className="text-n-4 hover:text-n-1 transition-colors"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/terms-and-conditions"
              className="text-n-4 hover:text-n-1 transition-colors"
            >
              Terms and Conditions
            </a>
          </li>
          <li>
            <a
              href="/support"
              className="text-n-4 hover:text-n-1 transition-colors"
            >
              Support
            </a>
          </li>
        </ul>

        <ul className="flex gap-5 flex-wrap justify-center sm:justify-end">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
      <div className="container flex flex-col sm:flex-row sm:justify-between items-center gap-10 max-sm:flex-col">
      
      <p className="caption bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300 lg:block text-center">
          Code Caffeine © {new Date().getFullYear()}. All rights reserved.
        </p>
        </div>
    </Section>
  );
};

export default Footer;
