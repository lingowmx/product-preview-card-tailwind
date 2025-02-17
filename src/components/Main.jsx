import iconCart from "../../images/icon-cart.svg"

export const Main = () => {
  return (
    <div className="flex flex-col ml-6 mr-6 p-6 bg-white rounded-b-lg font-montserrat
    sm:m-0 sm:rounded-bl-none sm:rounded-tr-lg lg:p-10 lg:max-w-[490px]">
      <p className="text-grey tracking-wide font-medium text-xs mb-2 
      md:text-lg lg:text-2xl lg:mb-4">P E R F U M E</p>
      <h1 className="text-3xl font-bold font-fraunces 
      md:text-5xl lg:text-6xl lg:leading-tight">Gabrielle Essence Eau De Parfum</h1>
      <div className="">
        <p className="text-grey text-[13px] font-medium tracking-wide pt-4 leading-6
        md:text-[16px] lg:text-2xl">A floral, solar and voluptuous
          interpretation composed by Oliver Polge, 
          Perfumer-Creator for the House of CHANEL.</p>
      </div>
      <div className="flex gap-4 pt-4 pb-4">
        <p className="text-green-700 opacity-85 text-3xl font-semibold font-fraunces
        md:text-4xl lg:text-6xl lg:mt-4">$149.99</p>
        <p className="text-grey text-sm line-through flex items-center font-fraunces
        md:text-base lg:text-2xl">$169.99</p>
      </div>
      <button className="bg-green-700 opacity-85 h-12 text-white rounded-lg font-semibold
        flex justify-center text-center items-center gap-3
       hover:bg-green-950 hover:cursor-pointer sm:mt-4 lg:h-20 lg:mt-8">
        <img src={iconCart} alt="carticon" className="md:h-6 md:w-6 lg:h-7 lg:w-7"/> 
        <p className="md:text-lg lg:text-4xl">Add to Cart</p>
        </button>
    </div>
  )
}
