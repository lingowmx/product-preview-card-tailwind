// import cart from "../../images/icon-cart.svg"

export const Main = () => {
  return (
    <div className="flex flex-col ml-6 mr-6 pl-6 pr-6 pb-6 bg-white rounded-b-lg">
      <p className="text-grey tracking-widest">PERFUME</p>
      <h1 className="text-3xl font-bold">Gabrielle Essence Eau De Parfum</h1>
      <div>
        <p className="text-grey text-base tracking-wide pt-4">A floral, solar and voluptuous
          interpretation composed by Oliver Polge, 
          Perfumer-Creator for the House of CHANEL.</p>
      </div>
      <div className="flex gap-4 pt-4 pb-4">
        <p className="text-green-700 opacity-95 text-3xl font-semibold">$149.99</p>
        <p className="text-grey text-sm line-through flex items-center">$169.99</p>
      </div>
      <button className="bg-green-700 opacity-95 h-12 text-white rounded-lg ">Add to Cart</button>
    </div>
  )
}
