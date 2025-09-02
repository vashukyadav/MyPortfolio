import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-4 sm:px-8 lg:px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex justify-end items-center py-6 sm:py-8">
          {/* socials */}
          <div className="flex-shrink-0">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
