/**
 * Created by Leon.Hwa on 17/3/21.
 */
const address = {
    banner: (auth = Common.AUTH_KEY.auth_key) => {
        return `http://www.g-cores.com/api/originals/home_slideshow?auth_exclusive=${auth}`
    },
    homePage:(page = 1,auth = Common.AUTH_KEY.auth_key) => {
        return `http://www.g-cores.com/api/originals/home?page=${page}&auth_exclusive=${auth}`
    },

    articlePage:(page = 1,auth = Common.AUTH_KEY.auth_key) =>{
        return `http://www.g-cores.com/api/categories/1/originals?page=${page}&auth_exclusive=${auth}`
    },
    news:(page,auth = Common.AUTH_KEY.auth_key ) =>{
        return `http://www.g-cores.com/api/categories/2/originals?page=${page}&auth_exclusive=${auth}`
    }
}
export default address