import React, { useEffect } from "react";
import "./setup.css";
import { store } from "../../store";
import { changeCurrentPage } from "../../features/page/pageSlice";
import Heading from "../iettaComponents/heading/Heading";
import SubHeading from "../iettaComponents/subHeading/SubHeading";
import Content from "../iettaComponents/content/Content";
import {
    cloneRepos,
    cloneReposDocs,
    javaInstall,
    javaInstallDocs,
    npmIPackages,
    npmIPackagesDocs,
    pipIPackages,
    pipIPackagesDocs,
    prerequisite,
    prerequisiteDocs
} from "../../resources/constants";


export default function Setup() {
    useEffect(() => {
        store?.dispatch(changeCurrentPage('Setup'))
    })
    return <>
        <div className="otr-setup">
            <div className="inr-docs w3-animate-right">
                <Heading
                    text={"Development's Perspective"}
                    underlineSize={"90%"}
                />
                <SubHeading
                    text={prerequisite}
                    underlineSize={"50%"}
                />
                <div className="doc-segment">
                    <Content
                        text={prerequisiteDocs}
                    />
                </div>
                <SubHeading
                    text={cloneRepos}
                    underlineSize={"50%"}
                />
                <div className="doc-segment">
                    <Content
                        text={cloneReposDocs}
                    />
                </div>
                <SubHeading
                    text={npmIPackages}
                    underlineSize={"50%"}
                />
                <div className="doc-segment">
                    <Content
                        text={npmIPackagesDocs}
                    />
                </div>
                <SubHeading
                    text={pipIPackages}
                    underlineSize={"50%"}
                />
                <div className="doc-segment">
                    <Content
                        text={pipIPackagesDocs}
                    />
                </div>
                <SubHeading
                    text={javaInstall}
                    underlineSize={"50%"}
                />
                <div className="doc-segment">
                    <Content
                        text={javaInstallDocs}
                    />
                </div>
            </div>
        </div>
    </>
};
