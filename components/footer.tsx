import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-5 flex flex-row align-middle justify-center">
      <div className="mx-auto py-7">
        <p className="text-center text-xs text-gray-500">
          Manuel Rodriguez Urdapilleta
        </p>
        <p className="text-center text-xs text-gray-500">
          manuelrurda@gmail.com
        </p>
        <p className="text-center text-xs text-gray-500">MX 5534552933</p>
      </div>
      <div className="py-5">
        <a href="" target="_blank">
          <Github
            className=" bg-black opacity-20 p-2 rounded-xl mx-1 cursor-pointer"
            color="white"
            size={55}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
