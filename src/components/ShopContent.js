import ContentDescription from "./ContentDescription";
import ContentList from "./ContentList";

function ShopProducts(props) {
    return (
        <>
            <ContentDescription desc={props.desc}/>
            <ContentList/>
        </>
    );
}
export default ShopProducts;