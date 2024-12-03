import user from '../images/boy.png';

function StaticImages() {
    return (
        <div>
            {/* this is for src folder */}
            <img src={user} alt="User" style={{ width: '400px' }} />

            {/* this is for pubic */}
            <img src={'./images/girl.png'} alt="User" style={{ width: '400px' }} />
        </div>
    );
}

export default StaticImages;
