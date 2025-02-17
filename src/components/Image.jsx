import mobileImage from "../../images/image-product-mobile.jpg"
import desktopImage from "../../images/image-product-desktop.jpg"
export const Image = () => {
  return (
    <div className="pl-6 pr-6 sm:p-0 lg:max-w-[490px]">
    <picture className="w-full rounded-lg">
      <source srcSet={mobileImage} media="(max-width: 639px)"/>
      <source srcSet={desktopImage} media="(min-width: 640px)"/>
      <img src={mobileImage} alt="main-image" 
      className="h-full object-cover rounded-t-lg sm:rounded-tr-none sm:rounded-bl-lg"/>
    </picture>
    </div>
  )
}
