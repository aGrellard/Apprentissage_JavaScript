


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form button[type="button"]').addEventListener('click', function(e) {
        e.preventDefault();
        var cookies = document.cookie.split(';');
        let cookieArray = [];
        console.log(cookies)

        cookies.forEach(item=>{
            let split = item.split("=");
            if (split.length > 1) {
                cookieArray.push(split[1])
            }
        })
        console.log(cookieArray)

        // cookies.forEach(item=>{
        //     let split = item.split("userInfo=");
        //     if (split.length > 1) {
        //         let obj = split[1].split('&').map(item => {
        //             let [key, value] = item.split("=")
        //             return [{key: key, value:value}]
        //         })
        //         cookieArray.push(obj)
        //     }
        // })
        // console.log(cookieArray)

        // cookies.forEach((cookie)=>{
            // let test = cookie.split('userInfo=').reduce((acc, val)=>{
            //     acc = {cookie: undefined}
            //      if (val.split('&').length>1) {
            //         acc.cookie = val.split('&')
            //      }
            //      return acc;
            // }, {});
        // })

        


    });
    document.querySelector('form button[type="submit"]').addEventListener('click', function(e) {
        e.preventDefault();
        var name = document.querySelector('form input[name="cookieName"]').value;
        var value = document.querySelector('form input[name="cookieValue"]').value;
        console.log(name, value);
        // document.cookie = "user=" + name + "; " + "value=" + value +"; samesite=Lax; path=/; max-age=" + 86400;
        document.cookie = name + "=" + value + "; samesite=Lax; path=/; max-age=" + 86400;
        // document.cookie = "userInfo=" + userInfos + "; samesite=Lax; path=/; max-age=" + 86400;
        // document.cookie = "userInfo=" + userInfos + "; samesite=Lax; path=/; expires=Thu, Jan 1970 00:00:00 UTC; max-age=" + 0;

        // document.cookie = "user=" + name +"; expires=Thu, Jan 1970 00:00:00 UTC; samesite=Lax; path=/; max-age=0";
    });    
});