const LeftSideMenu = () => {
    return (
        <div className="col-span-3  border-r-[1px]">
            <nav className="border-b-[1px] text-center py-2 font-bold">
                <div>
                    <span>Email Builder</span>
                </div>
            </nav>
            <div className="my-3 text-center text-sm">
                <button>Add Page</button>
            </div>
            <ul className="flex flex-col items-center justify-center text-sm ">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>

            <div>
                <ul className="flex gap-4 my-2">
                    <li role="presentation">
                        <button>Block</button>
                    </li>
                    <li role="presentation">
                        <button>Trait</button>
                    </li>
                    <li role="presentation">
                        <button>Style</button>
                    </li>
                </ul>
                <div className="tab-content">
                    <div><div id="blocks"></div></div>
                    <div><div id="layer-container"></div></div>
                    <div><div id="style-view"></div></div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideMenu;
