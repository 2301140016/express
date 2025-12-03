var express = require('express');
var router = express.Router();
const request = require('request');
const cors = require('cors'); // corsミドルウェアを追加

// corsミドルウェアを使用
router.use(cors());

router.get('/', async (req, res) => {
request('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.cyber-u.ac.jp/index.html', function (error, response, body) {
if (!error && response.statusCode == 200) {
const data = JSON.parse(body);
res.json(data);
}
});
})

module.exports = router;