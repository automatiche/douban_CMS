/*只要有组件进入过style.js,其中的import的css文件就对所有组件起作用（不需要在引入？）即使这些css文件并没有
通过export输出?*/

/*import animate  from "../../node_modules/music/css/animate.css"
import fontCss from "../../node_modules/music/fonts/fontCss.css"
import  music from "../../node_modules/music/css/music.css"
import  music0 from "./music0.css"*/

//为什么
// import music  from '../..\node_modules\music\sass'
var styles = {
    divStyle:{border:"1px solid grey",padding:'3px', width:'80%',marginBottom:'3px'},
    h3Style:{ fontWeight:'normal'},
    h5Style:{ fontWeight:'normal' },
    summitButton:{marginLeft:4,position:'relative',bottom:6},
    // 怎样用变量写伪类？
    // clearfix:{display:'block',height:0,clear:'both',visibility:'hidden',content:'.'}
}

export default styles