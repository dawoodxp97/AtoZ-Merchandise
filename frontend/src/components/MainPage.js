import React from "react";
import Product from "./Product";
import Slider from "./Slider";
import "./styles/MainPage.css";
import vc1 from "./images/vcam.png";
import vc2 from "./images/vphone.png";
import vc3 from "./images/vlap.png";
import vc4 from "./images/vheadphones.png";
import vc5 from "./images/vtshirt.png";
import vc6 from "./images/vbaby.png";
import vc7 from "./images/vwatch.png";
import vc8 from "./images/vlip.png";
import vc9 from "./images/vcycle.png";
import vc10 from "./images/vgame.png";
import vc11 from "./images/vsofa.png";
import { Tooltip } from "@material-ui/core";

function MainPage() {
  return (
    <div className="mainpage">
      <div className="slide">
        <Slider />
      </div>
      <h3 id="cat_head">Popular Categories</h3>

      <div className="prod_head">
        <Tooltip title="Camera" placement="bottom">
          <div>
            <img className="vector_icons" src={vc1} alt="" />
          </div>
        </Tooltip>
        <Tooltip title="Mobiles" placement="bottom">
          <div>
            <img className="vector_icons" src={vc2} alt="" />
          </div>
        </Tooltip>
        <Tooltip title="Laptops" placement="bottom">
          <div>
            <img className="vector_icons" src={vc3} alt="" />
          </div>
        </Tooltip>
        <Tooltip title="Headphones" placement="bottom">
          <div>
            <img className="vector_icons" src={vc4} alt="" />
          </div>
        </Tooltip>
        <Tooltip title="T-Shirts" placement="bottom">
          <div>
            <img className="vector_icons" src={vc5} alt="" />
          </div>
        </Tooltip>
        <Tooltip title="Baby Essentials" placement="bottom">
          <div>
            <img className="vector_icons" src={vc6} alt="" />
          </div>
        </Tooltip>
        <Tooltip title="Watch" placement="bottom">
          <div>
            <img className="vector_icons" src={vc7} alt="" />
          </div>
        </Tooltip>
        <Tooltip title="Lipstick" placement="bottom">
          <div>
            <img className="vector_icons" src={vc8} alt="" />
          </div>
        </Tooltip>
        <Tooltip title="Bicycle" placement="bottom">
          <div>
            <img className="vector_icons" src={vc9} alt="" />
          </div>
        </Tooltip>
        <Tooltip title="Gaming" placement="bottom">
          <div>
            <img className="vector_icons" src={vc10} alt="" />
          </div>
        </Tooltip>
        <Tooltip title="Sofa" placement="bottom">
          <div>
            <img className="vector_icons" src={vc11} alt="" />
          </div>
        </Tooltip>
      </div>
      <h3>Hot Deals 🔥 🔥 🔥 </h3>
      <div className="products">
        <Product
          id="12321341"
          brand="HP"
          title="HP Pavilion Gaming 10th Gen Intel Core i5 Processor 16.1 (40.9 cms) FHD Gaming Laptop (8GB/1TB HDD + 256GB SSD)"
          price={44990}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71FHcGAPevL._SL1498_.jpg"
        />

        <Product
          id="12321342"
          brand="HP"
          title="HP 22fw Ultra-Thin Full HD 21.5-inch IPS Monitor with VGA and HDMI Ports"
          price={11935}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71yYGgCG%2BhL._SL1500_.jpg"
        />
        <Product
          id="12321343"
          brand="Apple"
          title="Apple Mac Mini (3.6GHz Quad-core 8th-Generation Intel Core i3 Processor, 8GB RAM, 256GB)"
          price={69990}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/913HIEWEgBL._SL1500_.jpg"
        />
        <Product
          id="12321344"
          brand="Samsung"
          title="Samsung Galaxy M32 (Light Blue, 4GB RAM, 64GB Storage) INR 1250 Off with ICICI Credit and Debit Cards "
          price={14999}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71F4jU7MRUS._SL1500_.jpg"
        />
        <Product
          id="12321345"
          brand="PTron"
          title="PTron Boom Ultima V2 Dual Driver, In-Ear Headphones with in-line Mic, Volume Control, Passive Noise Cancelling."
          price={399}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61KuS-yAFGL._SL1100_.jpg"
        />
        <Product
          id="12321346"
          brand="Mivi"
          title="Mivi Duopods M40 True Wireless Bluetooth Earbuds with Studio Sound, Powerful Bass, 24 Hours of Battery and EarPods."
          price={1499}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71jjlIxu5yL._SL1500_.jpg"
        />
        <Product
          id="12321347"
          brand="Inalsa"
          title="Inalsa Hand Blender| Hand Mixer|Beater - Easy Mix, Powerful 250 Watt Motor | Variable 7 Speed Control."
          price={1126}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/61Gmi%2BQWBzL._SL1200_.jpg"
        />
        <Product
          id="12321348"
          brand="Cureveda"
          title="Cureveda Plant Based Collagen Builder Glow Powder for Women & Men Skin & Hair Anti-aging Supplement Beauty Protein"
          price={1355}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71sN7XeyDUL._SL1500_.jpg"
        />
        <Product
          id="12321349"
          brand="OZiva"
          title="OZiva Plant Based Collagen Builder (With Vitamin C, Biotin, Silica & Bamboo Shoot) for Anti-Aging Beauty"
          price={854}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61CF9gr%2BhmS._SL1500_.jpg"
        />
        <Product
          id="12321350"
          brand="Welcare"
          title="Welcare MAXPRO PTM405I 2HP (4 HP Peak) Motorized Auto Incline Folding Treadmill with LCD Display, Soft Cushion."
          price={37490}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61bpsU6h0wL._SL1500_.jpg"
        />
        <Product
          id="12321351"
          brand="U.P.C"
          title="Utilite™ Smart Home Multi-Purpose Foldable Laptop Bed Table Lap Desk Stand Storage Drawer Cup Holder Slot."
          price={799}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71jRDH260ZS._SL1500_.jpg"
        />
        <Product
          id="12321352"
          brand="U.P.C"
          title="U.P.C. Upgraded Hands-Free Squeeze Microfiber Flat Spin Mop System 360° Flexible Head."
          price={1499}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41dngKExodL.jpg"
        />
        <Product
          id="12321353"
          brand="TP-Link"
          title="TP-Link Archer MR600 AC1200 Mbps 4G+ Cat6 Mobile Wi-Fi Router Dual Band Wireless WiFi."
          price={8499}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51mJbljbumL._SL1000_.jpg"
        />
        <Product
          id="12321354"
          brand="NETBOON"
          title="NETBOON 4G LTE External Barrel Antenna with LMR200 Coaxial Cable SMA-Male to N-Male 12 dBi Antenna for Router."
          price={2500}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61ONGMzqcSS._SL1000_.jpg"
        />
      </div>
    </div>
  );
}

export default MainPage;
