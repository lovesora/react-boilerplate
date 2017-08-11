let host = 'http://sandbox.food.petkit.com';

export default {
    host: host,
    config: {
        get: {
            type: 'GET',
            url: host + '/api/web/luckydraw/{campaignId}/detail'
        }
    },
    home: {
        lottery: {
            type: 'POST', 
            url: host + '/api/web/luckydraw/dice'
        }
    },
    awards: {
        list: {
            type: 'GET',
            url: host + '/api/web/luckydraw/trophies/{campaignId}'
        }
    },
    wechat: {
        shareEnd: {
            type: 'POST',
            url: host + '/api/web/luckydraw/share'
        }
    }
}
