import React, { useEffect } from "react";
import { useState } from 'react';
import "./homepage.css";
import { store } from './../../store'
import { changeCurrentPage } from "../../features/page/pageSlice";
import { ResponsiveBar } from '@nivo/bar';
import apiRoutes from "../../resources/apiUrls";
import Fetch from "../../resources/fetch";
import statsGif from "../../empty_page_gifs/output-onlinegiftools.gif"
import Tutorial from "../tutorial/Tutorial";

export default function Homepage() {
    const [data, setData] = useState([[], []]);
    const [tutorial, setTutorial] = useState(false)
    useEffect(() => {
        store.dispatch(changeCurrentPage('Home'))
        Fetch(apiRoutes.STATS, "get").then(
            response => setData(response)
        )
    }, [])
    return (
        <>
            {tutorial && <Tutorial visibility={() => { setTutorial(false) }} />}
            <div className="wp-otr-hmpg w3-animate-right">
                <div className="wp-inr-hmpg-left w3-animate-zoom">
                    {/* <a href="https://ietta-docs.netlify.app" style={{ textDecoration: "none" }}><span>Doc Link</span></a>
                    <span onClick={() => { setTutorial(true) }}>Tutorial</span>
                    <span>Doc Download</span> */}
                </div>
                <div className="wp-inr-hmpg-right">
                    {data[0].length == 0 ? <img alt="" className="empty-home" /> : <>
                        <div className="wp-inr-hmpg-r-top w3-animate-zoom">
                            <ResponsiveBar
                                data={data[0]}
                                keys={["files"]}
                                indexBy="ProjectName"
                                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                                padding={0.4}
                                valueScale={{ type: "linear" }}
                                colors="var(--theme-color)"
                                labelTextColor="var(--forground-color)"
                                animate={true}
                                enableLabel={true}
                                axisTop={null}
                                axisRight={null}
                                axisLeft={{
                                    tickSize: 8,
                                    tickPadding: 8,
                                    tickRotation: 0,
                                    legend: "files",
                                    legendPosition: "middle",
                                    legendOffset: -40,
                                    format: e => Math.floor(e) === e && e
                                }}
                            />
                        </div>
                        <div className="wp-inr-hmpg-r-bottom w3-animate-zoom">
                            <ResponsiveBar
                                data={data[1]}
                                keys={["tags"]}
                                indexBy="ProjectName"
                                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                                padding={0.4}
                                valueScale={{ type: "linear" }}
                                colors="var(--forground-color)"
                                labelTextColor="var(--theme-color)"
                                animate={true}
                                enableLabel={true}
                                axisTop={null}
                                axisRight={null}
                                axisLeft={{
                                    tickSize: 8,
                                    tickPadding: 8,
                                    tickRotation: 0,
                                    legend: "tags",
                                    legendPosition: "middle",
                                    legendOffset: -40,
                                    format: e => Math.floor(e) === e && e
                                }}
                            />

                        </div>
                    </>}

                </div>
            </div>
        </>
    )
};
