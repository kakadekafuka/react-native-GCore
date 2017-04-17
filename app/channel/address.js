/**
 * Created by Leon.Hwa on 17/3/21.
 */

const address = {
    banner: (auth = Common.AUTH_KEY.auth_key) => {
        console.log(account.user)
        const auth_token = account.user ? `&auth_token=` + account.user.auth_token:``
        return `http://www.g-cores.com/api/originals/home_slideshow?auth_exclusive=${auth}`+ auth_token
    },
    homePage:(page = 1,auth = Common.AUTH_KEY.auth_key) => {
        console.log(account.user)
        const auth_token = account.user ? `&auth_token=` + account.user.auth_token:``
        return `http://www.g-cores.com/api/originals/home?page=${page}&auth_exclusive=${auth}`+ auth_token
    },

    articlePage:(page = 1,auth = Common.AUTH_KEY.auth_key) =>{
        console.log(account.user)
        const auth_token = account.user ? `&auth_token=` + account.user.auth_token:``
        return `http://www.g-cores.com/api/categories/1/originals?page=${page}&auth_exclusive=${auth}`+ auth_token
    },
    news:(page,auth = Common.AUTH_KEY.auth_key ) =>{
        console.log(account.user)
        const auth_token = account.user ? `&auth_token=` + account.user.auth_token:``
        return `http://www.g-cores.com/api/categories/2/originals?page=${page}&auth_exclusive=${auth}`+ auth_token
    },
    articleDetail:(id,auth = Common.AUTH_KEY.auth_key) => {
        console.log(account.user)
        const auth_token = account.user ? `&auth_token=` + account.user.auth_token:``
        return `http://www.g-cores.com/api/originals/${id}/html_content?auth_exclusive=${auth}&auth_token= &quickdownload=1`+ auth_token
    },
    newsDetail: (id,auth = Common.AUTH_KEY.auth_key) => {
        console.log(account.user)
        const auth_token = account.user ? `&auth_token=` + account.user.auth_token:``
        return `http://www.g-cores.com/api/originals/${id}/html_content?auth_exclusive=${auth}&auth_token=(null)&quickdownload=1`+ auth_token
    },
    bannarDetail: (id,auth = Common.AUTH_KEY.auth_key) => {
        console.log(account.user)
        const auth_token = account.user ? `&auth_token=` + account.user.auth_token:``
        return `http://www.g-cores.com/api/originals/${id}/html_content?auth_exclusive=${auth}&auth_token=(null)&quickdownload=1`+ auth_token
    },
    getComment :(type,page,id,auth = Common.AUTH_KEY.auth_key) => {
        console.log(account.user)
        const auth_token = account.user ? `&auth_token=` + account.user.auth_token:``
      return `http://www.g-cores.com/api/comments?auth_exclusive=${auth}&commentable_id=${id}&commentable_type=original&page=${page}&sort=${type}`
    },
    getPageInfo:(id,auth = Common.AUTH_KEY.auth_key) => {
        console.log(account.user)
       const auth_token = account.user ? `&auth_token=` + account.user.auth_token:``
        return `http://www.g-cores.com/api/originals/${id}?auth_exclusive=${auth}` + auth_token
    },
    getTimeLine:(id,auth = Common.AUTH_KEY.auth_key) => {
        console.log(account.user)
        const auth_token = account.user ? `&auth_token=` + account.user.auth_token:``
        return `http://www.g-cores.com/api/volumes/${id}/timelines?auth_exclusive=${auth}`+ auth_token
    },
    getTimeLineCategories:(page = 1,auth = Common.AUTH_KEY.auth_key) => {
        console.log(account.user)
        const auth_token = account.user ? `&auth_token=` + account.user.auth_token:``
        return `http://www.g-cores.com/api/categories/9/originals?page=${page}&auth_exclusive=${auth}`+ auth_token
    },
    getRadio:(page = 1,auth = Common.AUTH_KEY.auth_key) => {
        console.log(account.user)
        const auth_token = account.user ? `&auth_token=` + account.user.auth_token:``
        return `http://www.g-cores.com/api/categories/9/originals?page=${page}&auth_exclusive=${auth}`+ auth_token
    },
    getVideo:(page = 1,auth = Common.AUTH_KEY.auth_key) => {
        console.log(account.user)
        const auth_token = account.user ? `&auth_token=` + account.user.auth_token:``
        return `http://www.g-cores.com/api/categories/8/originals?page=${page}&auth_exclusive=${auth}`+ auth_token
    },
}
export default address