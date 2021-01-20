// export const getPoetry = async () => {
//     try {
//         const data = await fetch('https://v1.jinrishici.com/all.json')
//         if(data.status == 200) {
//             const {author, origin, content} = await data.json()
//             return [origin, author, content]
//         } else {
//             console.log('err')
//         }
//     } catch(e) {
//         console.log('network error')
//     }
// }

export const getPoetry = () => {    
    return new Promise((resolve, reject) => {
        fetch('https://v1.jinrishici.com/all.json')
        .then(data => {
            if(data.status == 200) {
                return data.json()
            } else {
                // error
            }
        })
        .then(data =>
            resolve([data.origin, data.author, data.content])
        )
        .catch(e => reject(new Error('network error')))
    })
}