import Search from "./Search";
import Button from "./Button";
import { useState } from "react";
import useCurrentUser from "@/hooks/useCurrentUser";
import { getSession, signOut } from "next-auth/react"
import { useRouter } from 'next/router';


const Navbar = () => {
    const router = useRouter();

    const handleLogin = () => {
        router.push('/auth'); 
    };
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const[search, setSearch] = useState("");
    const { data: currentUser } = useCurrentUser();

    const handleAvatarClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="
            w-full
            flex
            flex-col
            mt-[40px]
            items-center
        ">
            <div className="flex justify-between w-full items-center">
                <svg id="Logo" xmlns="http://www.w3.org/2000/svg" width="157.243" height="35.94" viewBox="0 0 157.243 35.94">
                    <g id="Symbol" transform="translate(0 0)">
                        <g id="Group_149" data-name="Group 149" transform="translate(0)">
                        <path id="Path_108" data-name="Path 108" d="M567.268,80.874a5.082,5.082,0,0,0-.661-2.139,5.141,5.141,0,0,0-1.663-1.75,5.069,5.069,0,0,0-2.307-.79c-.116-.011-.6-.021-.693-.014l-.156.011a5.079,5.079,0,0,0-2.544.92,5.242,5.242,0,0,0-1.2,1.193,5.077,5.077,0,0,0-.91,2.321,5.668,5.668,0,0,0,0,1.29,5.069,5.069,0,0,0,.768,2.111,5.161,5.161,0,0,0,1.529,1.529,5.1,5.1,0,0,0,2.36.795c.155.013.638.013.789,0a5.029,5.029,0,0,0,1.9-.531,5.1,5.1,0,0,0,2.256-2.256,5.04,5.04,0,0,0,.531-1.9C567.282,81.512,567.282,81.029,567.268,80.874Z" transform="translate(-557.098 -71.952)" fill="#fff" fill-rule="evenodd"/>
                        <path id="Path_109" data-name="Path 109" d="M592.213,74.674a7.24,7.24,0,0,0-2.783-3.955,6.923,6.923,0,0,0-1.041-.608,7.127,7.127,0,0,0-2.34-.673,10.384,10.384,0,0,0-1.4-.015,7.106,7.106,0,0,0-2.509.689,6.862,6.862,0,0,0-1.919,1.351,7.213,7.213,0,0,0-1.053,8.986,7.2,7.2,0,0,0,6.1,3.364,7.212,7.212,0,0,0,6.827-4.883A7.321,7.321,0,0,0,592.213,74.674Z" transform="translate(-564.981 -69.405)" fill="#fff" fill-rule="evenodd"/>
                        </g>
                        <path id="Path_110" data-name="Path 110" d="M609.039,103.144a2,2,0,0,0-1.365,1.013,1.771,1.771,0,0,0-.169.429l-.039.135-.006,4.19c0,3.054,0,4.228.014,4.332a2,2,0,0,0,1.181,1.5,2.085,2.085,0,0,0,1.244.092,2,2,0,0,0,1.435-1.477c.032-.144.033-.334.033-4.376v-4.225l-.049-.179a2.065,2.065,0,0,0-.828-1.146,1.8,1.8,0,0,0-.552-.253,1.548,1.548,0,0,0-.469-.052,2.3,2.3,0,0,0-.432.017" transform="translate(-576.036 -82.085)" fill="#fff" fill-rule="evenodd"/>
                        <path id="Path_111" data-name="Path 111" d="M584.556,102.6a5.109,5.109,0,0,0-4.043-4.423c-.513-.1.284-.1-9.568-.1-4.953,0-9.034,0-9.069,0a5.119,5.119,0,0,0-4.708,4.263,39.187,39.187,0,0,0-.069,4.937c.008,4.547,0,4.272.1,4.771a5.062,5.062,0,0,0,1.444,2.632,4.461,4.461,0,0,0,.74.6,5.089,5.089,0,0,0,1.809.75c.49.1-.1.092,9.678.092h9.1l.255-.041a5.119,5.119,0,0,0,4.284-4.149c.082-.448.08-.372.08-4.843C584.589,103.114,584.587,102.843,584.556,102.6Zm-8.468,5.709a10.108,10.108,0,0,1-2.481,1.1,10.042,10.042,0,0,1-5.525,0,10.1,10.1,0,0,1-2.482-1.1,10.674,10.674,0,0,1-3.721-3.895,14.639,14.639,0,0,0,17.928,0A10.669,10.669,0,0,1,576.088,108.308Z" transform="translate(-557.098 -80.187)" fill="#fff" fill-rule="evenodd"/>
                    </g>
                    <g className="hidden ss:flex" id="Typography" transform="translate(48.161 12.235)">
                        <path id="Path_112" data-name="Path 112" d="M640.43,92.605a1.539,1.539,0,0,0-.512-1.15,2.006,2.006,0,0,0-1.442-.489,2.121,2.121,0,0,0-1.245.323,1.016,1.016,0,0,0-.456.874,1.162,1.162,0,0,0,.11.512,1.051,1.051,0,0,0,.386.41,2.947,2.947,0,0,0,.726.323,9.42,9.42,0,0,0,1.142.268,5.843,5.843,0,0,1,2.647,1.056,2.657,2.657,0,0,1,.914,2.191v.189a3.413,3.413,0,0,1-.276,1.395,2.934,2.934,0,0,1-.8,1.063,3.641,3.641,0,0,1-1.261.678,6.065,6.065,0,0,1-3.584-.071,3.83,3.83,0,0,1-1.379-.85,3.594,3.594,0,0,1-.835-1.277,4.407,4.407,0,0,1-.283-1.6v-.473h2.08v.378a2.176,2.176,0,0,0,.575,1.584,2.4,2.4,0,0,0,1.788.59,2.049,2.049,0,0,0,1.4-.409,1.269,1.269,0,0,0,.457-.977,1.411,1.411,0,0,0-.094-.512,1.093,1.093,0,0,0-.331-.441,2.291,2.291,0,0,0-.646-.354,5.7,5.7,0,0,0-1.04-.268,10.469,10.469,0,0,1-1.528-.371,4.249,4.249,0,0,1-1.205-.606,2.606,2.606,0,0,1-.8-.945,3.077,3.077,0,0,1-.283-1.386v-.095a2.858,2.858,0,0,1,.275-1.252,3.037,3.037,0,0,1,.772-1,3.571,3.571,0,0,1,1.2-.661,4.882,4.882,0,0,1,1.568-.236,5.037,5.037,0,0,1,1.733.276,3.717,3.717,0,0,1,1.268.748,3.119,3.119,0,0,1,.772,1.088,3.279,3.279,0,0,1,.26,1.292v.568h-2.08Z" transform="translate(-634.285 -89.013)" fill="#fff"/>
                        <path id="Path_113" data-name="Path 113" d="M653.426,89.366h6.965v1.985h-4.884v2.521h4.7v1.985h-4.7V98.41h5.073V100.4h-7.154Z" transform="translate(-641.483 -89.146)" fill="#fff"/>
                        <path id="Path_114" data-name="Path 114" d="M676.175,98.032h-3.75l-.537,2.364h-2.174l2.631-11.03h3.907l2.632,11.03h-2.174Zm-3.309-1.985h2.852l-1.277-5.641h-.283Z" transform="translate(-647.608 -89.146)" fill="#fff"/>
                        <path id="Path_115" data-name="Path 115" d="M688.679,89.366h7.941v1.985h-2.931V100.4h-2.08V91.351h-2.931Z" transform="translate(-654.74 -89.146)" fill="#fff"/>
                        <path id="Path_116" data-name="Path 116" d="M712.193,99.356h.284v-9.99h2.08V100.4h-4.065l-1.292-9.99h-.283v9.99h-2.08V89.366H710.9Z" transform="translate(-661.568 -89.146)" fill="#fff"/>
                        <path id="Path_117" data-name="Path 117" d="M732.49,100.4h-3.624l-.5-8.382V90.5h-.379v1.513l-.5,8.382h-3.625l-.378-11.03h1.891l.252,8.382v1.418H726V97.748l.5-8.382h3.341l.5,8.382v1.418h.379V97.748l.252-8.382h1.891Z" transform="translate(-667.826 -89.146)" fill="#fff"/>
                        <path id="Path_118" data-name="Path 118" d="M748.094,98.032h-3.749l-.537,2.364h-2.174l2.631-11.03h3.907L750.8,100.4H748.63Zm-3.308-1.985h2.851l-1.277-5.641h-.283Z" transform="translate(-674.653 -89.146)" fill="#fff"/>
                        <path id="Path_119" data-name="Path 119" d="M760.6,89.366h7.941v1.985h-2.931V100.4h-2.08V91.351H760.6Z" transform="translate(-681.785 -89.146)" fill="#fff"/>
                        <path id="Path_120" data-name="Path 120" d="M782.523,98.593a2.322,2.322,0,0,0,.985-.181,1.46,1.46,0,0,0,.6-.489,1.858,1.858,0,0,0,.292-.709,4.309,4.309,0,0,0,.079-.827V96.1h2.08v.283a4.182,4.182,0,0,1-1.031,3.033,4,4,0,0,1-3,1.064,3.954,3.954,0,0,1-2.994-1.151,4.667,4.667,0,0,1-1.1-3.356V93.519a5.92,5.92,0,0,1,.284-1.9,3.856,3.856,0,0,1,.819-1.418,3.594,3.594,0,0,1,1.293-.882,4.485,4.485,0,0,1,1.7-.307,4.922,4.922,0,0,1,1.734.283,3.365,3.365,0,0,1,1.268.819,3.484,3.484,0,0,1,.772,1.292,5.215,5.215,0,0,1,.26,1.7v.284h-2.08v-.284a3.4,3.4,0,0,0-.094-.787,2.087,2.087,0,0,0-.315-.709,1.64,1.64,0,0,0-.6-.512,2.037,2.037,0,0,0-.946-.2,1.921,1.921,0,0,0-.9.2,1.835,1.835,0,0,0-.631.535,2.279,2.279,0,0,0-.37.788,3.649,3.649,0,0,0-.118.938v2.773a4.081,4.081,0,0,0,.11.985,2.241,2.241,0,0,0,.346.78,1.569,1.569,0,0,0,.623.512A2.191,2.191,0,0,0,782.523,98.593Z" transform="translate(-688.489 -89.013)" fill="#fff"/>
                        <path id="Path_121" data-name="Path 121" d="M796.735,89.366h2.08v4.507h3.561V89.366h2.08V100.4h-2.08V95.858h-3.561V100.4h-2.08Z" transform="translate(-695.374 -89.146)" fill="#fff"/>
                    </g>
                </svg>


                <div className="hidden ms:flex gap-[12px]">
                    <div className="hidden m:flex">
                        <Search
                            id="search_bar"
                            onChange={(ev)=> setSearch(ev.target.value)}
                            value={search}
                            placeholder="Search"
                        />
                    </div>
                    {currentUser ? (
                        <div className="relative z-50">
                            <div className={`w-[56px] h-full cursor-pointer select-none ${isMenuOpen ? "avatar" : "border-none"}`} onClick={handleAvatarClick}>
                                {currentUser.avatar?(
                                    <img className="object-cover rounded-full " src={currentUser?.avatar}></img>
                                ):(
                                    <img className="object-cover rounded-full " src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png"></img>
                                )}
                                
                            </div>
                            <div className={`bg-primaryvariant1 cursor-pointer rounded-[10px] p-[20px] w-[180px] mt-[16px] right-0 absolute ${isMenuOpen ? "vissible": "hidden"}`}>
                                <div className="flex items-center mb-[16px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.783" height="16" viewBox="0 0 14.783 16">
                                        <path id="interface-setting-cog" d="M101.9.141a2.2,2.2,0,0,0-.3.05,1.723,1.723,0,0,0-1.146.976c-.013.03-.118.3-.234.6l-.21.544-.671.381-.671.381-.557-.085a5.086,5.086,0,0,0-.839-.1,1.707,1.707,0,0,0-1.3.6,3.708,3.708,0,0,0-.416.666c-.267.468-.275.483-.31.561a1.717,1.717,0,0,0,.186,1.708c.019.026.2.254.405.507l.37.459V8.9l-.341.435c-.188.239-.363.464-.391.5a1.71,1.71,0,0,0-.344.864,2.176,2.176,0,0,0,0,.376,1.705,1.705,0,0,0,.2.621c.081.148.477.838.517.9a1.549,1.549,0,0,0,.237.294,1.6,1.6,0,0,0,.285.233,1.678,1.678,0,0,0,.925.272,4.975,4.975,0,0,0,.819-.1l.563-.085c.012,0,.217.114.67.375.359.207.656.379.66.383s.1.241.207.526c.21.545.252.648.3.73a1.72,1.72,0,0,0,1.225.892,4.359,4.359,0,0,0,.774.026c.447,0,.575,0,.646-.01a1.709,1.709,0,0,0,.984-.441,1.77,1.77,0,0,0,.406-.562c.013-.029.12-.3.239-.608l.215-.555.661-.38c.375-.216.665-.379.672-.377.028.006,1.151.175,1.206.181a1.853,1.853,0,0,0,.511-.026,1.726,1.726,0,0,0,.947-.546,3.423,3.423,0,0,0,.434-.685c.267-.468.275-.482.31-.561a1.718,1.718,0,0,0-.186-1.708c-.019-.026-.2-.254-.405-.507l-.37-.459V7.377l.341-.434c.188-.239.363-.464.39-.5a1.711,1.711,0,0,0,.344-.866,2.258,2.258,0,0,0,0-.375,1.715,1.715,0,0,0-.2-.621c-.081-.148-.477-.838-.517-.9a1.55,1.55,0,0,0-.237-.294,1.607,1.607,0,0,0-.285-.233,1.7,1.7,0,0,0-.733-.263,2.157,2.157,0,0,0-.364,0c-.034,0-.317.045-.629.093l-.582.087c-.011,0-.231-.123-.669-.375-.359-.207-.656-.379-.66-.383s-.1-.241-.207-.526c-.214-.555-.251-.646-.3-.736a1.721,1.721,0,0,0-1.222-.886,4.251,4.251,0,0,0-.771-.025c-.3,0-.567,0-.582,0m.042,1.146a.618.618,0,0,0-.242.1.6.6,0,0,0-.187.224c-.008.018-.126.321-.262.673s-.256.657-.267.678a.576.576,0,0,1-.182.214c-.05.034-1.736.991-1.786,1.014a.472.472,0,0,1-.232.047,6.041,6.041,0,0,1-.768-.1c-.751-.116-.76-.117-.869-.09a.57.57,0,0,0-.319.2c-.039.051-.514.883-.539.945a.575.575,0,0,0,.01.447.69.69,0,0,0,.05.088c.013.018.208.262.434.542s.427.531.447.556a.637.637,0,0,1,.1.2,6.5,6.5,0,0,1,.024,1.174l0,.982-.015.054a.7.7,0,0,1-.1.215l-.45.575c-.26.331-.426.548-.443.579a.565.565,0,0,0-.03.481c.009.023.131.243.27.487l.254.445.064.065a.544.544,0,0,0,.283.16c.1.023.126.02.879-.1a4.95,4.95,0,0,1,.771-.1.512.512,0,0,1,.2.045c.043.019,1.716.981,1.769,1.017a.61.61,0,0,1,.2.245c.009.021.125.319.258.662s.248.639.257.658a.63.63,0,0,0,.215.243.667.667,0,0,0,.185.074c.075.015,1.108.015,1.181,0a.569.569,0,0,0,.4-.3c.012-.025.134-.335.272-.69s.259-.664.271-.688a.559.559,0,0,1,.193-.214c.048-.032,1.681-.971,1.736-1a.705.705,0,0,1,.09-.034.41.41,0,0,1,.152-.017,5.3,5.3,0,0,1,.749.1c.359.055.677.1.706.106a.562.562,0,0,0,.294-.051.536.536,0,0,0,.21-.166c.039-.051.514-.883.539-.945a.574.574,0,0,0-.01-.447.687.687,0,0,0-.05-.088c-.013-.018-.208-.262-.434-.542s-.427-.531-.448-.557a.662.662,0,0,1-.107-.221l-.015-.058V7.1l.015-.058a.669.669,0,0,1,.114-.231l.441-.563c.218-.278.406-.52.418-.537a.574.574,0,0,0,.054-.522c-.009-.023-.131-.243-.27-.487l-.254-.445-.064-.065a.544.544,0,0,0-.283-.16c-.1-.023-.126-.02-.879.1a4.949,4.949,0,0,1-.771.1.513.513,0,0,1-.2-.045c-.043-.019-1.716-.981-1.769-1.017a.61.61,0,0,1-.2-.245c-.009-.021-.125-.319-.258-.662s-.248-.639-.257-.658a.554.554,0,0,0-.126-.172.518.518,0,0,0-.175-.114c-.1-.042-.091-.042-.682-.041-.293,0-.542,0-.552,0m.429,4a2.86,2.86,0,0,0-2.315,4.342,2.882,2.882,0,0,0,1.271,1.12,2.82,2.82,0,0,0,1.293.246A2.854,2.854,0,0,0,105.1,9.307a2.817,2.817,0,0,0,.246-1.293,2.85,2.85,0,0,0-2.7-2.728l-.131-.005c-.019,0-.087,0-.15,0m.029,1.143a1.718,1.718,0,0,0-1.607,1.519,2.4,2.4,0,0,0,0,.384,1.716,1.716,0,0,0,1.383,1.491,1.824,1.824,0,0,0,.64,0,1.713,1.713,0,0,0,1.363-1.363,1.824,1.824,0,0,0,0-.64,1.712,1.712,0,0,0-1.464-1.379,2.52,2.52,0,0,0-.315-.012" transform="translate(-95.103 -0.137)" fill="#fff" fill-rule="evenodd"/>
                                    </svg>
                                    <p className="text-white ml-[10px]">Settings</p>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.699" height="16" viewBox="0 0 16.699 16">
                                        <path id="entertainment-ticket" d="M10.057,50.107a1.671,1.671,0,0,0-.888.335,1.691,1.691,0,0,0-.5.617c-.009.02-.917,2.157-2.018,4.749S4.525,60.8,4.373,61.147s-.285.655-.3.688a2.1,2.1,0,0,0-.07.268A1.819,1.819,0,0,0,4,62.627a1.68,1.68,0,0,0,.258.671,1.454,1.454,0,0,0,.231.278,1.617,1.617,0,0,0,.427.3c.107.051,4.911,2.1,4.993,2.126a1.619,1.619,0,0,0,.361.089,2.054,2.054,0,0,0,.414,0,1.662,1.662,0,0,0,1.286-.922c.051-.107,4.575-10.753,4.6-10.829a1.953,1.953,0,0,0,.076-.309,2.212,2.212,0,0,0,0-.468,1.664,1.664,0,0,0-.771-1.176c-.041-.025-.092-.055-.114-.066-.056-.028-1.086-.452-1.142-.469a.671.671,0,0,0-.271-.01.6.6,0,0,0-.3.153.619.619,0,0,0-.16.25.949.949,0,0,1-.2.326.978.978,0,0,1-1.259.139,1.02,1.02,0,0,1-.354-.437.986.986,0,0,1-.045-.606,1.591,1.591,0,0,1,.055-.16.605.605,0,0,0,.062-.272.591.591,0,0,0-.249-.485,5.927,5.927,0,0,0-.634-.309,2.825,2.825,0,0,0-.812-.315,1.81,1.81,0,0,0-.391-.02m.007,1.205a.726.726,0,0,0-.107.041.467.467,0,0,0-.195.193c-.013.028-.924,2.168-2.023,4.757-1.122,2.642-2.118,4.976-2.269,5.321s-.274.627-.278.643a.476.476,0,0,0,.057.367.516.516,0,0,0,.145.145c.04.024,4.872,2.086,4.951,2.113a.467.467,0,0,0,.254,0,.459.459,0,0,0,.273-.2c.028-.045,4.569-10.732,4.584-10.785a.482.482,0,0,0-.086-.389c-.065-.086-.1-.1-.38-.22-.139-.057-.255-.1-.259-.1a.11.11,0,0,0-.028.031,2.3,2.3,0,0,1-.22.244,2.17,2.17,0,0,1-1.3.6,2.986,2.986,0,0,1-.424,0,2.181,2.181,0,0,1-1.33-.64,2.15,2.15,0,0,1-.6-1.226,2.73,2.73,0,0,1-.021-.388c0-.039.009-.11.014-.16a.421.421,0,0,0,0-.095c-.01-.01-.49-.233-.525-.244a.54.54,0,0,0-.232,0m-4.612.536c-.044,0-.321.065-.534.117a.6.6,0,0,0-.441.391.656.656,0,0,0-.014.343.832.832,0,0,1-.124.629.813.813,0,0,1-.678.359.833.833,0,0,1-.608-.249.8.8,0,0,1-.162-.224,1.184,1.184,0,0,1-.082-.227.582.582,0,0,0-.281-.349.521.521,0,0,0-.3-.073,3.9,3.9,0,0,0-.562.1c-.263.054-.512.107-.554.118a1.575,1.575,0,0,0-.81.524,1.733,1.733,0,0,0-.257.452,1.806,1.806,0,0,0-.074.287,2.915,2.915,0,0,0,0,.488c.013.08.95,4.342.97,4.413a.592.592,0,0,0,.393.4.6.6,0,0,0,.773-.625c0-.031-.22-1.029-.482-2.218-.4-1.83-.476-2.17-.476-2.216a.37.37,0,0,1,.119-.269c.066-.061.1-.073.368-.128.224-.046.234-.048.243-.036l.055.085a2.051,2.051,0,0,0,1.5.931,2.611,2.611,0,0,0,.424,0,1.976,1.976,0,0,0,.917-.325,1.842,1.842,0,0,0,.316-.257,1.993,1.993,0,0,0,.32-.417,2.017,2.017,0,0,0,.257-.774c.01-.082.013-.092.027-.092a.331.331,0,0,0,.056-.019.6.6,0,0,0,.247-.9.6.6,0,0,0-.54-.243" transform="translate(0.042 -50.103)" fill="#fff" fill-rule="evenodd"/>
                                    </svg>
                                    <p className="text-white ml-[10px]">Tickets</p>
                                </div>
                                <div className="h-[1px] w-full bg-[#6B696C] my-[16px]"></div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.004" height="16" viewBox="0 0 16.004 16">
                                        <path id="interface-logout_3_" data-name="interface-logout (3)" d="M1.5.422A1.745,1.745,0,0,0,.832.634,1.717,1.717,0,0,0-.035,1.974c-.009.1-.009,12.788,0,12.886a1.715,1.715,0,0,0,1.559,1.552c.06.005,1.226.006,4.209,0,3.827,0,4.13,0,4.187-.013a1.727,1.727,0,0,0,.54-.176c.053-.028.126-.069.161-.093a1.726,1.726,0,0,0,.735-1.087,7.469,7.469,0,0,0,.033-1.463V12.331l-.014-.054A.561.561,0,0,0,11.2,12a.538.538,0,0,0-.281-.143.818.818,0,0,0-.228,0,.592.592,0,0,0-.4.334c-.045.1-.041-.007-.045,1.368l0,1.242-.018.057a.56.56,0,0,1-.163.261.534.534,0,0,1-.295.146c-.029,0-1.364.006-4.121,0l-4.078,0-.058-.018a.582.582,0,0,1-.385-.385l-.018-.058V2.025l.018-.058a.582.582,0,0,1,.385-.385l.058-.018,4.078,0c2.757,0,4.092,0,4.121,0a.534.534,0,0,1,.3.148.561.561,0,0,1,.164.269l.015.047,0,1.242c0,1.147,0,1.245.015,1.282a.59.59,0,0,0,.435.42.815.815,0,0,0,.228,0,.538.538,0,0,0,.28-.143.56.56,0,0,0,.17-.279l.014-.054V3.247a7.469,7.469,0,0,0-.033-1.463A1.722,1.722,0,0,0,10.028.45L9.919.429C9.862.419,9.561.419,5.71.418c-2.3,0-4.174,0-4.206,0m11.542,5.14a.547.547,0,0,0-.348.167.572.572,0,0,0-.093.684,6.843,6.843,0,0,0,.714.739c.376.377.684.687.684.69s-1.515.005-3.366.006c-2.755,0-3.37,0-3.391.01A.6.6,0,0,0,7,8a.558.558,0,0,0-.177.482.5.5,0,0,0,.058.2.587.587,0,0,0,.4.3c.027,0,1.148.007,3.38.007,1.837,0,3.34,0,3.34,0s-.308.313-.684.69a6.84,6.84,0,0,0-.714.739.572.572,0,0,0,.093.684.556.556,0,0,0,.463.166.546.546,0,0,0,.264-.093c.04-.026,2.359-2.337,2.415-2.406a.579.579,0,0,0,0-.711c-.054-.068-2.375-2.38-2.413-2.405a.568.568,0,0,0-.381-.094" transform="translate(0.042 -0.417)" fill="#ff7430" fill-rule="evenodd"/>
                                    </svg>
                                    <p className="text-accent ml-[10px]" onClick={()=> signOut()}>Log Out</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex gap-[12px]">
                            <Button
                            style="secondary"
                            label="Login"
                            clickFunction={handleLogin}
                            />
                            <Button
                            style="primary"
                            label="Register"
                            />
                        </div>
                    )}
                    
                    
                </div>
                <svg className="flex ms:hidden" xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 32 25">
                    <g id="Group_331" data-name="Group 331" transform="translate(-91 -53)">
                        <rect id="Rectangle_416" data-name="Rectangle 416" width="32" height="3" rx="1.5" transform="translate(91 53)" fill="#fff"/>
                        <rect id="Rectangle_417" data-name="Rectangle 417" width="32" height="3" rx="1.5" transform="translate(91 64)" fill="#fff"/>
                        <rect id="Rectangle_418" data-name="Rectangle 418" width="32" height="3" rx="1.5" transform="translate(91 75)" fill="#fff"/>
                    </g>
                </svg>

            </div>
            <div className="w-full mt-[16px] hidden ms:flex m:hidden">
                <Search
                    id="search_bar"
                    onChange={(ev)=> setSearch(ev.target.value)}
                    value={search}
                    placeholder="Search"
                />
            </div>
        </div>
    )
}

export default Navbar;