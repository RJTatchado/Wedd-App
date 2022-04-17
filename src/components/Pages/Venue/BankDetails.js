import './BankDetails.scss';

const BankDetails = () => {

    return (
        <>
            <p>We're simply grateful for your presence to celebrate the occasion with us!</p>
            <p>If you would like to get us something, we'd love that too...you can send us something here:</p>
            <div className="mainStyle">
                <div className='bankDetail'>
                    <p>BPI Details</p>
                    <p>0429031164</p>
                    <p>Richard Tatchado Jr</p>
                </div>
                <div className='bankDetail'>
                    <p>GCash Details</p>
                    <p>09063653151</p>
                    <p>Richard T.</p>
                </div>
                <div className='bankDetail'>
                    <p>BDO Details</p>
                    <p>008850120260</p>
                    <p>Princess Jane Rosales</p>
                </div>
            </div>
        </>
    );
}

export default BankDetails;