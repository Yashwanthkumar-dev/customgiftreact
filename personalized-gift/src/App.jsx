import companyLogo from "./assets/company-Logo.png";
import cart from "./assets/cart.svg";
import wishlist from "./assets/wishlist.svg";
import login from "./assets/login.svg";
import search from "./assets/search.svg";
import rightArrow from "./assets/right-arrow.svg";
import Navigator from "./components/navigator";
import ProductCard from "./components/productCard";
import mug from "./assets/personalised-heart-mug.avif";
import lamp from "./assets/together-led-lamp.avif";
import keychain from "./assets/pen-key-chain.avif";
import me from "./assets/you-me-magnets.avif";
import photoframe from "./assets/photo-frame-painting.avif";
import cushion from "./assets/personalized-cushion.avif";
import clock from "./assets/magical-clock.avif";
import mirror from "./assets/magic-mirror.avif";
import Line from "./components/Line";
import Question from "./components/Question";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Policy from "./components/Policy";
function App() {
  return (
    <>
      <nav className="flex justify-between p-9 items-center ">
        <div className="w-[200px]">
          <img src={companyLogo} alt="" />
        </div>

        <div className=" w-fit  flex">
          <input
            className="border-1 border-gray-300 rounded-lg w-[500px] bg-neutral-200 placeholder:text-lg p-[12px] outline-none text-neutral-700"
            type="text"
            placeholder="Seach 5000+ flowers,cakes,gifts etc "
          />
        </div>

        <ul className="flex">
          <li>
            <img src={login} alt="" className="w-[30px] mr-4 " />
          </li>
          <li>
            <img src={wishlist} alt="" className="w-[30px] mr-4" />
          </li>
          <li>
            <img src={cart} alt="" className="w-[30px] mr-4" />
          </li>
        </ul>
      </nav>
      <Navigator />
      <div className="flex ml-3 mt-2 capitalize">
        <p className="text-neutral-400">Home</p>
        <img src={rightArrow} alt="" />
        <p className="text-neutral-400">personalised gifts</p>
      </div>
      <ProductCard
        productname="personalised heart design mug"
        productprice="$449"
        productdiscount="27% off"
        deliverydescription="Earliest Delivery :"
        productdeliverydate="19-Aug"
        productimage={mug}
      />

      <ProductCard
        productname="together forever led lamp"
        productprice="$999"
        productdiscount="38% off"
        deliverydescription="Earliest Delivery :"
        productdeliverydate="19-Aug"
        productimage={lamp}
      />
      <ProductCard
        productname="premium personalised pen keychain and te.."
        productprice="$999"
        productdiscount="33% off"
        deliverydescription="Earliest Delivery :"
        productdeliverydate="19-Aug"
        productimage={keychain}
      />
      <ProductCard
        productname="personalised you and me forever fridge ma.."
        productprice="$449"
        productdiscount="27% off"
        deliverydescription="Earliest Delivery :"
        productdeliverydate="19-Aug"
        productimage={me}
      />

      <ProductCard
        productname="customised photo frame painting"
        productprice="$899"
        productdiscount="33% off"
        productimage={photoframe}
        deliverydescription="Earliest Delivery :"
        productdeliverydate="19-Aug"
      />

      <ProductCard
        productname="infinite love personalized cushion"
        productprice="$349"
        productdiscount="22% off"
        productimage={cushion}
        deliverydescription="Earliest Delivery :"
        productdeliverydate="15-Aug"
      />

      <ProductCard
        productname="magical LED clock"
        productprice="$649"
        productdiscount="58% off"
        productimage={clock}
        deliverydescription="Earliest Delivery :"
        productdeliverydate="15-sep"
      />

      <ProductCard
        productname="magici mirror for you"
        productprice="$649"
        productdiscount="50% off"
        productimage={mirror}
        deliverydescription="Earliest Delivery :"
        productdeliverydate="15-sep"
      />
      <Line />
      <Question />
      <Review />
      <Footer
        companyLogo={companyLogo}
        ourcompany="our company"
        aboutus="about us"
        careers="careers"
        affliate="affliate programs"
        news="in news"
      />
      <Footer
        ourcompany="Quick link"
        aboutus="wishes"
        careers="sitemap"
        affliate="blog-celetrate relations"
        news="corporate order"
      />

      <Policy
        ourcompany="Policy & security"
        aboutus="FAQ"
        careers="refund policy"
        affliate="privacy policy "
        news=" bug bounty"
      />
      <Policy
        aboutus="Data security"
        careers="cancellation policy"
        affliate="terms and conditions"
        news=" payment and security"
      />
    </>
  );
}

export default App;
