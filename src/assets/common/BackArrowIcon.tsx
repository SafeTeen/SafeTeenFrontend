const BackArrowIcon = ({clicked}: { clicked?: () => void }) => {
    return (
        <div onClick={clicked}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <path stroke="#2F2F2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15 5-7 7 7 7"/>
            </svg>
        </div>
    );
};

export default BackArrowIcon;
