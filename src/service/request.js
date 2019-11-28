import { Toast } from 'react-native'
export const post = (url, params) => {
    return fetch(url, params, 'POST')
}

export const get = (url, params) => {
    return fetch(url, params, 'GET')
}

export const fetch = (url, params = {}, method = 'POST') => {
    return new Promise((resolve, reject) => {
        let headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        let body = params
        if (method == 'POST') {
            headers['Content-Type'] = 'application/json'
        }
        if (headers['Content-Type'] == 'application/json') {
            body = JSON.stringify(body)
        } else {
            let result = []
            for (let key in body) {
                result.push(`${key}=${body[key]}`)
            }
            body = result.join('&')
        }

        return fetch(url, {
            method: method,
            headers: headers,
            body: body,
        }).then(res => res.json()).then(res => {
            //1.检测授权
            //2.提示异常
            //3.正确返回
            resolve(res)
        }).catch(error => {
            Toast.show({
                text: error,
                buttonText: 'Okay',
                duration: 1500,
                position: "bottom",
                type: "danger"
            })
            reject(error)
        })
    })
}

const isNeedAuthor = () => {
    return true
}