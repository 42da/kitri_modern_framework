function ContentDescription(props) {
    return (
        <section class="intro">
            <h1>Videos less than $10</h1>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum non purus quis vestibulum. Pellentesque ultricies quam lacus, ut tristique sapien tristique et.</p> */}
            <p>{props.desc}</p>
        </section>
    );
}
export default ContentDescription;