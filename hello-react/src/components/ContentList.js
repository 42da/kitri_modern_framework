function ContentList(props) {
    return (
        <>
            <section class="product-cards">
                {
                    props.products.map(product => {
                        return (
                            <div class="product-card" key={product.id}>
                                    <img src={product.url} alt="" />
                                    <h2><a href="">{product.title}</a></h2>
                                    <p class="original-price">RRP: $18.99</p>
                                    <p class="current-price">Price you pay <span>$9.99</span></p>
                                    <p class="saving">Your saving $9</p>
                            </div>
                        );
                    })

                }
                {/* <div class="product-card">
                    <img src="https://dummyimage.com/300x300/7EC0EE/000&text=Product+Image+2" alt="" />
                    <h2><a href="">Video title 2</a></h2>
                    <p class="original-price">RRP: $18.99</p>
                    <p class="current-price">Price you pay <span>$9.99</span></p>
                    <p class="saving">Your saving $9</p>
                </div>

                <div class="product-card">
                    <img src="https://dummyimage.com/300x300/7EC0EE/000&text=Product+Image+3" alt="" />
                    <h2><a href="">Video title 3</a></h2>
                    <p class="original-price">RRP: $18.99</p>
                    <p class="current-price">Price you pay <span>$9.99</span></p>
                    <p class="saving">Your saving $9</p>
                </div>

                <div class="product-card">
                    <img src="https://dummyimage.com/300x300/7EC0EE/000&text=Product+Image+4" alt="" />
                    <h2><a href="">Video title 4</a></h2>
                    <p class="original-price">RRP: $18.99</p>
                    <p class="current-price">Price you pay <span>$9.99</span></p>
                    <p class="saving">Your saving $9</p>
                </div> */}
            </section>
        </>
    );
}
export default ContentList;