import Banner from "../../page/Banner/Index";
import styles from "./Home.module.css";
import HeroLinks from "./components/HeroLinks";
import FlashSales from "./components/flashSales/FlashSales";
import Categories from "./components/categories/Categories";
import CBanner from "./components/categoriesBanner";
import Month from "./components/month/Month";
import OurProducts from "./components/ourProducts/OurProducts";
import Featured from "./components/featured/Featured";
import { FloatButton } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";

function Index() {
  return (
    <div className="container">
      <div className={styles.hero_banner_container}>
        <HeroLinks />
        <Banner />
      </div>
      <FlashSales />
      <Categories />
      <Month />
      <CBanner />
      <OurProducts/>
      <Featured/>
      <FloatButton.BackTop icon={<ArrowUpOutlined/>}/>
    </div>
  );
}

export default Index;
