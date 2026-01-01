/*
 * ------------------------------------------------------------
 * Copyright (c) 2026 Software Bakery Inc.
 * All rights reserved.
 *
 * Company : Software Bakery Inc.
 * Author  : Sung Hyun Back
 * ------------------------------------------------------------
 */
import { useTranslation } from "react-i18next";
import orderedGif from "../../assets/order_received.gif";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { NavPath } from "../../constant/NavPath";

export default function OrderConfirmationScreen() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div id="container">
            <Header />
            <div className="body">
                <div className="centeredContent">
                    <img src={orderedGif} />
                    <h2 className="subTitle">{t("confirmation.title")}</h2>
                    <p className="message" style={{ margin: "5px 0px 0px 0px" }}>{t("confirmation.message")}</p>
                    <button className="roundedButton" style={{ marginTop: "50px" }} onClick={() => { navigate(NavPath.MENU); }}>{t("confirmation.button")}</button>
                </div>
            </div>
        </div>
    );
}