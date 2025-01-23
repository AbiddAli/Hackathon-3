import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/LogoIcon.png"
import cart from "/public/images/Cart.png"



const Header = () => {
    return (
      <header>
        {/* Top Bar */}
        <div className="bg-[#272343] text-white text-sm py-2 px-4 flex justify-between items-center">
          <p>✅ Free Shipping On All Orders Over $50</p>
          <div className="flex items-center space-x-6">
            <span>Eng ▼</span>
            <Link href="/faqpages" className="hover:underline">FAQs</Link>
            <Link href="#" className="hover:underline">Need Help</Link>
          </div>
        </div>
  
        {/* Main Header */}
        <div className="bg-[#F0F2F3] py-4 px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="Logo" width={30} height={20}  />
            <span className="text-xl font-bold">Comforty</span>
            
          </div>
          

          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 border rounded-md px-3 py-1 text-gray-700 hover:text-purple-600">
            <Link href="cart">
            <Image src={cart}  alt="Cart" width={100} height={100} />
            </Link>
            </button>
            
          </div>
         
         
        </div>
     

<div className="flex items-center justify-between py-[14px] px-[100px] pr-10">
  {/* Navigation Links */}
  <nav className="flex items-center space-x-6 text-gray-700 font-medium ">
    <Link href="/" className="hover:text-purple-600">Home</Link>
    <Link href="/shop" className="hover:text-purple-600">Shop</Link>
    <Link href="/product" className="hover:text-purple-600">Product</Link>
    <Link href="/faqpages" className="hover:text-purple-600">Pages</Link>
    <Link href="/aboutus" className="hover:text-purple-600">About</Link>
  </nav>

  {/* Contact Details */}
  
  <Link href="/contact">
  <p className="text-gray-700 text-sm ml-auto">Contact: (808) 555-0111</p>
  </Link>
</div>

      </header>
    );
  };
  
  export default Header;
