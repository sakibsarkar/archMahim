import "./FooterV2.css";

const FooterV2 = () => {
    return (
        <footer className="footerV2">

            <div>
                <img src="https://i.ibb.co/vHs7MVK/web-under.png" alt="" />
            </div>

            <div className="footerDetails">
                <p className="addresss">Hazi Anser Ali Vila,Gound Floor-A Ghaterchar, Ati Bazar, Keranigonj
                    Basila, Mohammadpur, Dhaka.</p>

                <div>
                    <div className="footerPhone">
                        <p>Phone:</p>
                        <div className="phoneNumbers">
                            <a href="tel:+8801581-581268">+8801581-581268</a>
                            <a href="tel:+8801715-306736">+8801715-306736</a>
                        </div>
                    </div>

                    <a className="email" href="mailto:cadesign@gmail.com">Email : cadesign@gmail.com</a>

                </div>
            </div>

        </footer>
    );
};

export default FooterV2;