import axios from "axios"
const getData = (userid) => {
    return new Promise(async (resolve, reject) => {
        const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + userid)
        const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userid)
        resolve([user,posts])
    })
}
(async () => {
    try {
        const getValues = await getData(1);
        console.log(getValues);
    
}catch (e) {
    console.log(e)
}
})()
export default getData