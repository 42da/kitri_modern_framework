function ShopHeader(props) {    // App.js에서 받은 데이터를 파라미터로 받음
    return (
        <header>
            <img src="https://dummyimage.com/200x100/000/fff&text=Logo" alt="" />
            <nav>
                <ul>
                    {/* <li><a href="">{props.menuItems[0]}</a></li>
                    <li><a href="">{props.menuItems[1]}</a></li>
                    <li><a href="">{props.menuItems[2]}</a></li>
                    <li><a href="">{props.menuItems[3]}</a></li> */}
                    {
                        props.menuItems.map((item) => 
                            <li key={item}><a href="">{item}</a></li>        
                        )
                    }
                </ul>
            </nav>
        </header>
    );
}

export default ShopHeader;