'use client';

import './globals.css';
import './robot.css';
import { useState } from 'react';


export default function SearchPage() {
    const [prompt, setPrompt] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [loading, setLoading] = useState(0);

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(1);
        const response = await fetch('/api/image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt
            })
        });
        const imageResponse = await response.json();
        // setImageURL(imageResponse.imageURL)
        console.log(imageResponse);
        setImageURL(imageResponse.imageURL);
        setLoading(0);
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (imageURL !== '' && loading === 0) {
        return (
            <div className="imageContainer">
                <img src={imageURL}></img>
            </div>
        )
    }

    return (
        <div>
            <div className="search-box">
                {/* <form action='/api/image' method="post"> */}
                <form onSubmit={handleSubmit}>
                    <button className="btn-search"><i className="fa fa-search"></i></button>
                    <input type="text" id="prompt" name="prompt" className="input-search" onChange={(e) => setPrompt(e.target.value)} placeholder="Generate Image with AI ..."></input>
                </form>
            </div>
        </div>
    )
}

function Loading() {
    return (
        <div>
            <div style={{ textAlign: "center", fontFamily: "arial", color: "#D3D3D3" }}>The robot is generating your image ....</div>
            <div class="container">
                <svg id="robot" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 960 570">

                    <g class="head">
                        <g class="levitate">
                            <path fill="#06C194" d="M480.5,9.545C436.011,9.545,400,45.61,400,90.1V166h161V90.1C561,45.61,524.989,9.545,480.5,9.545z" />
                            <path fill="#16FFC6" d="M480,10h9.04c-2.807-0.296-5.654-0.455-8.54-0.455C436.011,9.545,400,45.61,400,90.1V166h80V10z" />
                        </g>
                    </g>

                    <g class="smoke-group">
                        <circle class="smoke delay-2" fill="#FAC784" cx="441" cy="484.667" r="22.167" />
                        <circle class="smoke delay-3" fill="#FFD97F" cx="455" cy="510" r="42.5" />
                        <circle class="smoke delay-4" fill="#FAC784" cx="508.258" cy="486.763" r="25.263" />
                    </g>

                    <g class="lean">
                        <g class="levitate">
                            <rect x="455" y="348" fill="#FFFBB5" width="54" height="163" />
                            <polygon class="flame" fill="#FFD97F" points="469.333,328 493.667,328 481.63,460.667 " />

                            <g>
                                <rect x="442" y="276" fill="#CCCCCC" width="39" height="65" />
                                <circle fill="#CCCCCC" cx="461.001" cy="277.087" r="19.427" />
                                <rect x="481" y="276" fill="#CCCCCC" width="38" height="65" />
                                <circle fill="#CCCCCC" cx="500.307" cy="277.087" r="19.427" />
                                <polygon fill="#CCCCCC" points="508.885,348 454.731,348 468.616,335 494.998,335 	" />
                            </g>

                            <path class="arm" fill="none" stroke="#06C194" stroke-width="5" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" d="
          M434.833,320.333c0,0,0.143-8.807-0.911-32.76"/>
                            <path class="arm delay-4" fill="none" stroke="#06C194" stroke-width="5" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" d="
          M527.28,287.573c-1.054,23.953-0.911,32.76-0.911,32.76"/>

                            <circle fill="#16FFC6" cx="515.25" cy="279" r="17.75" />
                            <circle fill="#16FFC6" cx="447.25" cy="279" r="17.75" />

                            <rect x="447" y="241" fill="#06C194" width="67" height="65" />

                            <g class="leg">
                                <path fill="none" stroke="#06C194" stroke-width="5" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" d="
          M463.833,359.333c0,0,0.143-8.807-0.911-32.76"/>

                                <path fill="#16FFC6" d="M479.311,361.396c-8.956-6.462-21.476-4.682-28.235,4.143c-6.759,8.823-5.219,21.372,3.351,28.339
              L479.311,361.396z"/>
                            </g>

                            <g class="leg delay-6">
                                <path fill="none" stroke="#06C194" stroke-width="5" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" d="
          M499.28,326.573c-1.054,23.953-0.911,32.76-0.911,32.76"/>

                                <path fill="#16FFC6" d="M510.386,393.843c8.519-7.028,9.965-19.592,3.139-28.363c-6.827-8.773-19.359-10.458-28.266-3.93
            L510.386,393.843z"/>
                            </g>

                            <circle fill="#06C194" cx="480.5" cy="305.5" r="33.5" />
                        </g>
                    </g>

                    <g class="smoke-group">
                        <circle class="smoke delay-8" fill="#FFD97F" cx="419" cy="517.193" r="22.193" />
                        <circle class="smoke delay-6" fill="#FAC784" cx="555" cy="517.193" r="22.193" />
                        <circle class="smoke delay-7" fill="#FFD97F" cx="527.28" cy="505.667" r="33.72" />
                        <circle class="smoke delay-5" fill="#FFD97F" cx="485.251" cy="514.063" r="36.877" />
                    </g>

                    <g class="head">
                        <g class="levitate">
                            <g>
                                <path fill="#16FFC6" d="M370.065,176c-0.001,0-0.004-0.065-0.004,0.028c0,48.908,44.819,88.43,100.106,88.43
            c55.286,0,100.105-39.46,100.105-88.368c0-0.093-0.004-0.09-0.004-0.09H370.065z"/>
                            </g>

                            <circle fill="#FFFFFF" stroke="#06C194" stroke-width="5" stroke-miterlimit="10" cx="480.235" cy="141.86" r="14.015" />
                            <circle fill="#FFFFFF" stroke="#06C194" stroke-width="5" stroke-miterlimit="10" cx="444.377" cy="141.86" r="14.015" />
                        </g>
                    </g>
                </svg>
            </div>

        </div>
    )
}
