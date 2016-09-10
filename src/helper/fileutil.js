/**
 * 通用文件系统处理
 *
 * import {getFileByStream,...} from 'fileUtil'
 * or 
 * 
 * import fileUtil from 'fileUtil'
 * then
 * 	fileUtil.getFileByStream
 *  ...
 */

import fs from 'fs';

export function getFileByStream (path) {
	return fs.ReadStream(path);
}

export function getDirInfo(dir){
	return new Promise( (resolve,reject) => {
		fs.readdir(dir, (err,files) => {
			if(err){return reject(err)}
			resolve(files);
		});
	});
}
export function getFileStat(file){
	return new Promise(function (resolve, reject) {
		fs.lstat(file, function (err, stat) {
			if(err){return reject(err)}
			resolve(stat);
		});
	});
}

export function readFile(file){
	return new Promise( (resolve,reject) => {
		fs.readFile(file,'utf-8',function (err, data) {
			if(err){return reject(err)}
			resolve(data);
		});
	});
}

export function writeFile(filename,text){
	return new Promise((resolve, reject)=>{
		fs.writeFile(filename,text, (err)=>{
			if(err){return reject(err)}
			resolve();
		});
	});
}

export default {
	getFileByStream,
	getDirInfo,
	getFileStat,
	readFile,
	writeFile
}