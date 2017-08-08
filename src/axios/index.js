/**
 * Created by hao.cheng on 2017/4/16.
 */
import axios from 'axios';

export const getPros = () => axios.post('http://api.xitu.io/resources/github', {
    category: "trending",
    period: "day",
    lang: "javascript",
    offset: 0,
    limit: 30
}).then(function (response) {
    return response.data;
}).catch(function (error) {
    console.log(error);
});

export const npmDependencies = () => axios.get('./npm.json').then(res => res.data).catch(err => console.log(err));

export const weibo = () => axios.get('./weibo.json').then(res => res.data).catch(err => console.log(err));

const GIT_OAUTH = 'https://github.com/login/oauth';
//这个方法在调用时被跨域问题阻止了
export const gitOauthLogin = () => axios.get(`https://cors-anywhere.herokuapp.com/${GIT_OAUTH}/authorize?client_id=4c0ff32209ec44f2b787&redirect_uri=http://localhost:3456/&scope=user&state=douban_movie`);

export const gitHref = () => {window.location.href = 'https://github.com/login/oauth/authorize?client_id=4c0ff32209ec44f2b787&redirect_uri=http://localhost:3456/&scope=user&state=douban_movie'; }
//此方法的redirect_url参数好像会被github生成时设置的参数覆盖https://github.com/login/oauth/authorize?client_id=4c0ff32209ec44f2b787&redirect_uri=http://localhost:3456/&scope=user&state=douban_movie
export const gitOauthToken = code => axios.post('https://cors-anywhere.herokuapp.com/' + GIT_OAUTH + '/access_token', {...{client_id: '4c0ff32209ec44f2b787',
    client_secret: 'b776163523c6eedc923d4f4f2d49066941cbde8b', 
    redirect_uri: 'http://localhost:3456/', 
    state: 'douban_movie'}, 
    code: code}
    , {headers: {Accept: 'application/json'}})
    .then(res => res.data).catch(err => console.log(err));
export const gitOauthInfo = access_token => axios({
    method: 'get',
    url: 'https://api.github.com/user?access_token=' + access_token,
}).then(res => res.data).catch(err => console.log(err));