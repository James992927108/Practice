var mockServerHost = require('mockserver-grunt');
var mockServer = require('mockserver-client');//定義require Response
var mockServerClient = mockServer.mockServerClient;
var proxyClient = mockServer.proxyClient;

var startParameters = {
    serverPort: 1080,//給mockServerClient
    proxyPort: 1090,//給proxyClient用
    proxyRemotePort: 1080,//Request port
    verbose: true//紀錄LOG
};

mockServerHost.start_mockserver(startParameters).then(function() {
   //mockServerClient("localhost", 1080).mockSimpleResponse('/somePath', { name: 'mockSimpleResponse' }, 200);//mockSimpleResponse api(PATH,name response ,status code)

    // mockServerClient("localhost", 1080).mockAnyResponse(
    //    {
    //        'httpRequest': {
    //            'method': 'POST',
    //            'path': '/somePath',
    //            //'queryStringParameters': [
    //            //    {
    //            //        'name': 'test',
    //            //        'values': ['true']
    //            //    }
    //            //]
    //        },
    //        'httpResponse': {
    //            'statusCode': 200,
    //            'body': JSON.stringify({ name: 'POST mockAnyResponse' }),
    //            'delay': {
    //                'timeUnit': 'MILLISECONDS', //時間型態
    //                'value': 5000
    //            }
    //        },
    //        //times = 呼叫次數
    //        'times': {
    //            'unlimited': true//無限制呼叫次數
    //        },
    //        //呼叫一次範例
    //        //'times': {
    //        //    'remainingTimes': 1,
    //        //    'unlimited': false
    //        //}
    //    }
    // );

    // mockServerClient("localhost", 1080).mockAnyResponse(//
    //    {
        //forward path
    //        'httpRequest': {
    //            'method': 'GET',
    //            'path': '/en/latest/'
    //        },
       //forward  URL
    //        "httpForward": {
    //            "host": "docs.autofac.org",
    //            "port": 80,
    //            "scheme": "HTTP"
    //        },
    //        'times': {
    //            'remainingTimes': 1,
    //            'unlimited': false
    //        }
    //    }
    // );

    // proxyClient('localhost', 1090).dumpToLogs();//LOG 要設定proxy port

    mockServerClient("localhost", 1080).mockAnyResponse(
       {
           'httpRequest': {
               'method': 'GET',
               'path': '/en/latest/getting-started/index.html',
           },
           "httpForward": {
               "host": "docs.autofac.org",
               "port": 80,
               "scheme": "HTTP"
           },
           'times': {
               'unlimited': true
           }
       }
    );

    mockServerClient("localhost", 1080).mockAnyResponse(
       {
           'httpRequest': {
               'method': 'GET',
               'path': '/getId',
           },
           'httpResponse': {
               'statusCode': 200,
               'body': JSON.stringify({ name: 'ID 12345' })
           },
           'times': {
               'unlimited': true    
           }
       }
    );


});


// stop MockServer if Node exist abnormally
process.on('uncaughtException', function (err) {
    console.log('uncaught exception - stopping node server: ' + JSON.stringify(err));
    mockServerHost.stop_mockserver(startParameters);
    throw err;
});

// stop MockServer if Node exits normally
process.on('exit', function () {
    console.log('exit - stopping node server');
    mockServerHost.stop_mockserver(startParameters);
});

// stop MockServer when Ctrl-C is used
process.on('SIGINT', function () {
    console.log('SIGINT - stopping node server');
    mockServerHost.stop_mockserver(startParameters);
    process.exit(0);
});

// stop MockServer when a kill shell command is used
process.on('SIGTERM', function () {
    console.log('SIGTERM - stopping node server');
    mockServerHost.stop_mockserver(startParameters);
    process.exit(0);
});