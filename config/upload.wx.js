const ci = require('miniprogram-ci')
const { version: version, description: desc } = require('../package.json')

const project = new ci.Project({
    appid: 'wxfee5931904650431',
    type: 'miniProgram',
    projectPath: process.cwd() + '/dist',
    privateKeyPath: process.cwd() + '/config/private.wxfee5931904650431.key',
    ignores: ['node_modules/**/*'],
})

ci.upload({
    project,
    version: version,
    desc: desc,
    setting:{
        es6:true
    }
}).then((res)=>{
    console.log(res)
    console.log('上传成功')
}).catch((err)=>{
    if(err.errCode==-1){
        console.log('上传成功')
        return
    }
    console.log(err)
    console.log('上传失败')
    process.exit(-1)
})
