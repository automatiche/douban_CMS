export default  {
    getMovieListByType(type) {
        var url = 'http://127.0.0.1:3090/getmovielist?type='+type;
        // 先return  fetch对象  在return data数据
/*        return fetch(url).then(function(response){
            return response.json();
        }).then(function(data){
            // console.log(data);
            return data;
        });*/
        return new Promise(function(resolve,reject){
            fetch(url).then(function(response){
                return response.json();
            }).then(function(data){
                resolve(data);
            });
        });

/*        return new Promise(function(resolve,reject){
            fetch(url).then(function(response){
                return response.json();
            }).then(function(data){
            // console.log(data);
                resolve(data);
            });
        })*/
    },
    getMovieDetailById(id){
        var url = 'http://127.0.0.1:3090/getDetail?id='+id;
        return new Promise(function(resolve,reject){
            fetch(url).then(function(response){
                return response.json();
            }).then(function(data){
                resolve(data);
            });
        });
    },

    getdoubanCss(){
        var url = 'http://127.0.0.1:3090/getdoubancss';
        return new Promise(function(resolve,reject){
            fetch(url).then(function(response){
                return response.toString();
            }).then(function(data){
                resolve(data)
            })
        })
    }
    //下面两个测试项
     ,
    getTargettar(tar){
        var url = "http://127.0.0.1:3090/gettargettar?tar=" + tar;
         return new Promise(function(resolve,reject){
            fetch(url).then(function(response){
                return response.json()
            }).then(function(data){
                resolve(data);
            })
        }) 


    }
    ,
    getTargettartar(){
        var url = "http://127.0.0.1:3090/gettargettartar?tartar=tartar" ;
        return new Promise(function(resolve,reject){
            fetch(url).then(function(response){
                return response.json()
            }).then(function(data){
                resolve(data);
            })
        })
    } ,
    // getSrc(){
    //     //测试createElement方法创建  本地src  的script标签 暂停!
    // var url = "http://127.0.0.1:3456/src.js";
    //     return new Promise(function(resolve,reject){
    //         fetch(url).then(function(response){
    //             return response.json()
    //         }).then(function(data){
    //             resolve(data);
    //         })
    //     })
    // var jsonObj = console.log('srrrrrrrc');
    // res.send(jsonObj)

    // }
}