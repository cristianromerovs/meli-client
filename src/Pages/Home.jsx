import { BannerNivel } from "../Components/Home/BannerNivel";
import { ProductosDestacados } from "../Components/Home/ProductosDestacados";
import { Slider } from "../Components/Home/Slider";

export const Home = () => {
  return (
  <>
    <Slider />
    <ProductosDestacados />
    <BannerNivel />
  </>
  )
};
