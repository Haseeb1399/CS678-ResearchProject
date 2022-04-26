import ReactPlayer from 'react-player'

function StreamTwo() {
  return (
    <div>
       <h1>Stream Two</h1>
        <ReactPlayer url='https://topicsservercsproject.xyz/live/stream_480.flv' playing={true} controls={true} width={1000} height={500}/>
    </div>
  );
}

export default StreamTwo;
