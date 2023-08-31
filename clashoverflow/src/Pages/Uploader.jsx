import React, { useState } from "react";



const Uploader = () => {

    const [min, setMin] = useState();
    const [sec, setSec] = useState();
    const [min1, setMin1] = useState();
    const [sec1, setSec1] = useState();

    const [alreadyScraped, setAlreadyScraped] = useState(false);

    const [armyOptions, setArmyOptions] = useState(["Lavaloon", "Hybrid", "Dragon", "Electro"]);



    const renderTownHalls = () => {

    }

    return (
        <>
            <div className="container px-4 py-6">
                <div className="d-flex justify-content-center py-4">
                    <h3>Upload Attack</h3>
                </div>
                <form className="form-control">
                    <label htmlFor="link" className="py-2">Youtube Link</label>
                    <input type="text" name="link" id="link" className={"form-control" + (alreadyScraped ? " border border-danger" : "")} />
                    {(alreadyScraped) && <div className="d-flex text-danger justify-content-center"><p>Link already scraped!!</p></div>}

                    <label htmlFor="army" className="mt-4">Army timestamp</label>
                    <div className="d-flex justify-content-center">
                        <input type="number" style={{ width: "12%" }} className="mx-3 form-control flex"
                            name="army"
                            id="army"
                            max={60}
                            value={min}
                            onChange={(e) => { if ((e.target.value > 60) || (e.target.value < 0)) { return } else { setMin(e.target.value) } }} /> Minutes
                        <input type="number"
                            style={{ width: "12%" }}
                            className="mx-3 form-control flex"
                            name="army"
                            id="army"
                            max={60}
                            value={sec}
                            onChange={(e) => { if ((e.target.value > 60) || (e.target.value < 0)) { return } else { setSec(e.target.value) } }} /> Seconds
                    </div>

                    <label className="mt-4">Attack start timestamp</label>
                    <div className="d-flex justify-content-center">
                        <input type="number" style={{ width: "12%" }} className="mx-3 form-control flex"
                            name="army"
                            id="army"
                            max={60}
                            value={min1}
                            onChange={(e) => { if ((e.target.value > 60) || (e.target.value < 0)) { return } else { setMin1(e.target.value) } }} /> Minutes
                        <input type="number"
                            style={{ width: "12%" }}
                            className="mx-3 form-control flex"
                            name="army"
                            id="army"
                            max={60}
                            value={sec1}
                            onChange={(e) => { if ((e.target.value > 60) || (e.target.value < 0)) { return } else { setSec1(e.target.value) } }} /> Seconds
                    </div>

                    <label htmlFor="army"> Army composition</label>
                    <div className="d-flex justify-content-center">
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Example select</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                {armyOptions.map((item) => {
                                    return (
                                        <option key={item.key}>{item}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>

                    <label>Town Hall</label>
                    <div className="d-flex justify-content-center">
                    <select className="form-control w-25" id="townhallselect">
                            {Array.from({ length: 10 }, (_, index) => (
                                <option key={index}>{index + 6}</option>
                            ))}
                        </select>
                    </div>


                </form>
            </div>
        </>
    )
}


export default Uploader