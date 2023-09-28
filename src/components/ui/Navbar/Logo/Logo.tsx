import useMediaQuery from "@mui/material/useMediaQuery";


function Logo() {
  const isSmallScreen = useMediaQuery("(max-width:599px)");
  return (
    <>
      {!isSmallScreen ? (
        <div className="flex justify-left">
          <img className="w-full animate-fade-up animate-once animate-alternate" src="/streamlyfe-logo.png" />
        </div>
      ) : <div className="w-full h-full flex justify-center">
      <img className="w-2/4 h-2/4" src="/streamlyfe-logo-small.PNG" />
    </div>}
      
    </>
  );
}

export default Logo;
