import ReactPlayer from 'react-player'

function StreamThree() {
  return (
    <div>
       <h1>Stream Three</h1>
        <ReactPlayer url='https://topicsservercsproject.xyz/live/stream_360.flv' playing={true} controls={true} width={1000} height={500}/>
    </div>
  );
}

export default StreamThree;
