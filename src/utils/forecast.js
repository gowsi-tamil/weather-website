const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=36b782cd74170c4a9cffb10c84d8d34b&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, ' It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + 'degrees out, The humidity is '+body.current.humidity+'%')
        }
    })
}

module.exports = forecast