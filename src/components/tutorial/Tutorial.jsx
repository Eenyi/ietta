import React from 'react'
import "./tutorial.css"
import IettaButton from '../iettaComponents/IettaButton'

export default function Tutorial({ visibility }) {
    return (
        <>
            <div className="wp-otr-tagform">
                <div className="wp-inr-tutorial w3-animate-zoom">
                    <div className="image-container">

                    </div>
                    <IettaButton
                        buttonText="Close"
                        buttonCssClass={"attribute-save-btn"}
                        buttonOnClick={visibility}
                    />
                </div>
            </div>
        </>
    )
}
