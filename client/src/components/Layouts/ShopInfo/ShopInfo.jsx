import "./ShopInfo.css"

const ShopInfo = () => {
  return (
    <section id="shop-info">
      <div className="container">
        <div id="shop-info-wrapper">
          <div className="shop-info-col">
            <article id="shop-info-content">
              <h2>
                Bringing you the <span>best</span> audio gear
              </h2>
              <p>
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
              </p>
            </article>
          </div>
          <div className="shop-info-col">
            <img className="shop-info-img" src="/shared/image-best-gear.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopInfo;
