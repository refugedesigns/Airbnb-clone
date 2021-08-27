const Footer = () => {
    return (
      <div className="grid md:grid-cols-4 space-y-10 md:space-y-0 px-32 py-14 bg-gray-100 text-gray-600 mx-auto max-w-screen-xl">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Accessibility</p>
          <p>This is not a real site</p>
          <p>Its a pretty awesome clone</p>
          <p>Referrals accepted</p>
          <p>Refugedesigns</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">HOST</h5>
          <p>Refugedesigns</p>
          <p>Presents</p>
          <p>Zero to Full Stack Hero</p>
          <p>Full Stack Node/React Developer</p>
          <p>Hire me!</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Help Centre</p>
          <p>Trust & Safety</p>
          <p>Say Hi to me</p>
          <p>Lets win together</p>
          <p>Let me code for you</p>
        </div>
      </div>
    );
}

export default Footer
