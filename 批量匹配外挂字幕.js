let fs = require('fs');

let PATH = './Friends.S01'; // 目录

//  遍历目录得到文件信息
function walk(path) {
    let files = fs.readdirSync(path);

    let len = files.length;

    for(let i = 0; i < len; i+=2){
        let name = files[i];
        let newName = files[i+1];

        let lastDotIndex = newName.lastIndexOf('.');
        newName = newName.slice(0, lastDotIndex) + '.ass';
        console.log(newName);

        let oldPath = path + '/' + name;
        let newPath = path + '/' + newName;

        fs.rename(oldPath , newPath , function(err){
            if(err){
                throw err
            }
        })
    }
 
    // files.forEach(function(file){
    //     if (fs.statSync(path + '/' + file).isFile()) {
    //         callback(path, file);
    //     }
    // });
}

// 修改文件名称
function rename (oldPath, newPath) {
    fs.rename(oldPath, newPath, function(err) {
        if (err) {
            throw err;
        }
    });
}

// 运行
walk(PATH/*, function (path, fileName) {
    let oldPath = path + '/' + fileName, // 源文件路径
        newPath = path + '/'+ fileName.replace(/([^\s]*)( - )([^\s.]*)(.\S*$)/, '$3$2$1$4'); // 新路径

    rename(oldPath, newPath);
}*/);