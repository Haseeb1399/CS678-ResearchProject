import ReactPlayer from 'react-player'

function StreamOne() {
  return (
    <div>
        <h1>StreamOne</h1>
        <ReactPlayer url='http://139.59.159.233:8000/live/stream_1080.flv' playing={true} controls={true} width={1000} height={500}/>
    </div>
  );
}

export default StreamOne;
