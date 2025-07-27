const Header = () => {
  return (
    <header className="bg-primary/95 backdrop-blur-md border-b border-accent/20 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-20">
          {/* Centered company logo */}
          <div className="flex items-center">
            <img 
              src="https://img1.wsimg.com/isteam/ip/bc7cebe9-b604-4d0e-9c6e-660ac5ced5e1/tmplacbura9.webp/:/rs=w:205,h:70,cg:true,m/cr=w:205,h:70/qt=q:95" 
              alt="Previse Mortgage" 
              className="h-12 hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;