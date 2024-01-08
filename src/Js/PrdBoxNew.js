import { useState } from "react";

const PrdBoxNew = ({prdData}) => {

    const [wish, setWish] = useState(0);

    return(
        <div className="prd_box">
            <div className="img">
            {
                prdData.id <= 3 ? (
                    <img src={process.env.PUBLIC_URL + `../img/new_prd_img${prdData.id}.png`} alt="prd img"/>
                ) : (
                    <img src={
                        process.env.PUBLIC_URL + `../img/new_prd_img${Math.floor(Math.random() * 2) + 1}.png`
                    } alt="prd img" />
                )
            }
            </div>
            <div className="info">
                <span className={
                    wish === 0 ? "wish" : "wish on"
                } onClick={()=>{
                    setWish(wish === 0 ? 1 : 0)
                }}>wish</span>
                <div className="prd_name">
                    <p className="today">
                        {
                            (prdData.today === "" ? "" : prdData.today)
                        }
                    </p>
                    <p className="title">{prdData.title}</p>
                </div>
                <div className="price">
                    <p className={
                        `consumer${prdData.discount !== undefined && prdData.discount !== "" ? ' del' : ''}`}>{prdData.consumer
                        }원</p>
                    <p className="discount">
                        { 
                            (prdData.discount !== undefined && prdData.discount !== "" ? prdData.discount + "원" : "")
                        }
                    </p>
                </div>
                <p className="status">
                    {
                        (prdData.status === "" ? "" : prdData.status)
                    }
                </p>
            </div>
        </div>
    )
}

export default PrdBoxNew;