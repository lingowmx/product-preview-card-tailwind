import mobileImage from "../../images/image-product-mobile.jpg"
import desktopImage from "../../images/image-product-desktop.jpg"
export const Image = () => {
  return (
    <div className="pt-6 pl-6 pr-6">
    <picture className="w-full rounded-lg">
      <source srcSet={mobileImage} media="(max-width: 639px)"/>
      <source srcSet={desktopImage} media="(min-width: 640px)"/>
      <img src={mobileImage} alt="main-image" className="rounded-t-lg"/>
    </picture>
    </div>
  )
}
