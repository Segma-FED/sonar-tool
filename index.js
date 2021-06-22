#!/usr/bin/env node

/**
 * Created by Lucas on 2019/11/15.
 * 使用sonar检测代码质量：https://www.npmjs.com/package/sonarqube-scanner
 * 参考文档：https://docs.qq.com/doc/DUmVNQ3JDSEZNRWlU
 */
const program = require('commander');
const sonarqubeScanner = require('sonarqube-scanner');
const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);

program.option('-s, --serverUrl <type>', 'server address');
program.option('-t, --token <type>', 'token');
program.option('-e, --exclude <type>', 'exclude');
program.option('-p, --prefix <type>', 'prefix');
/**
 * 解析请求参数
 * */
program.parse(process.argv);
let { serverUrl, token, src = './src', exclude = '', prefix = 'bigdata_frontend_' } = program.opts();
if (!serverUrl) {
    console.log("error: option '-s, --serverUrl <type>' argument missing");
    return;
}
if (!token) {
    console.log("error: option '-t, --token <type>' argument missing");
    return;
}

const scanner = async () => {
    let data = await readFileAsync(`${process.cwd()}/package.json`);
    let name = JSON.parse(data.toString()).name;

    /**
     * sonarqubeScanner
     * @param {string} serverUrl - 服务器地址
     * @param {string} token     - 令牌
     * @param {Object} options   - 配置参数，参考文档：https://docs.sonarqube.org/latest/analysis/analysis-parameters
     * @param {string} sonar.projectKey  - 项目标识，在创建项目后不可变更，默认值为 'bigdata_frontend_' + package.json中的name字段
     * @param {string} sonar.projectName - 项目显示名，默认值同sonar.projectKey
     * @param {string} sonar.sources     - 包含主源文件的目录，逗号分隔路径
     * @param {string} sonar.exclusions  - 需要排除的文件目录，逗号分隔路径
     * */
    sonarqubeScanner({
        serverUrl,
        token,
        options: {
            'sonar.projectKey': `${prefix}${name}`,
            'sonar.projectName': `${prefix}${name}`,
            'sonar.sources': src,
            'sonar.exclusions': exclude
        }
    });
};
scanner().catch(console.error);
