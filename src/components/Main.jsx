import iconCart from "../../images/icon-cart.svg"

export const Main = () => {
  return (
    <div className="flex flex-col ml-6 mr-6 pl-6 pr-6 pb-6 bg-white rounded-b-lg font-montserrat">
      <p className="text-grey tracking-wide font-medium text-xs mt-4 mb-2">P E R F U M E</p>
      <h1 className="text-3xl font-bold font-fraunces">Gabrielle Essence Eau De Parfum</h1>
      <div>
        <p className="text-grey text-[13px] font-medium tracking-wide pt-4 leading-6">A floral, solar and voluptuous
          interpretation composed by Oliver Polge, 
          Perfumer-Creator for the House of CHANEL.</p>
      </div>
      <div className="flex gap-4 pt-4 pb-4">
        <p className="text-green-700 opacity-85 text-3xl font-semibold font-fraunces">$149.99</p>
        <p className="text-grey text-sm line-through flex items-center font-fraunces">$169.99</p>
      </div>
      <button className="bg-green-700 opacity-85 h-12 text-white rounded-lg font-semibold
        flex justify-center text-center items-center gap-3
       hover:bg-green-950 hover:cursor-pointer ">
        <img src={iconCart} alt="carticon" className=""/> 
        <p>Add to Cart</p>
        </button>
    </div>
  )
}
