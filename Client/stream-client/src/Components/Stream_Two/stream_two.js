import ReactPlayer from 'react-player'

function StreamTwo() {
  return (
    <div>
       <h1>StreamOne</h1>
        <ReactPlayer url='https://topicsservercsproject.xyz/live/stream_720.flv' playing={true} controls={true} width={1000} height={500}/>
    </div>
  );
}

export default StreamTwo;
