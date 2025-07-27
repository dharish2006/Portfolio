const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-display font-bold text-xl bg-gradient-primary bg-clip-text text-transparent mb-4 md:mb-0">
            Portfolio
          </div>
          
          <div className="text-muted-foreground text-sm text-center md:text-left">
            © 2024 John Doe. All rights reserved. Built with React & Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;