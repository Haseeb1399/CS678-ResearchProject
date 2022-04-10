const NodeMediaServer = require('node-media-server');


const config = {
    logType:3,
    rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 30,
        ping_timeout: 60,
    },
    http: {
        port: 8000,
        mediaroot: './files',
        allow_origin: '*',
    },
    fission: {
        ffmpeg: '/usr/bin/ffmpeg',
        tasks: [{
            rule: "live/*",
            model: [
            {
                ab: "192k",
                vb: "5000k",
                vs: "1920x1080",
                vf: "60",
            },
            {
                ab: "128k",
                vb: "2500k",
                vs: "1280x720",
                vf: "30",
            },
            {
                ab: "96k",
                vb: "1000k",
                vs: "854x480",
                vf: "24",
            },
            {
                ab: "96k",
                vb: "600k",
                vs: "640x360",
                vf: "20",
            },
            ]
        }]
        }
    };
    
    var nms = new NodeMediaServer(config)
    nms.run();