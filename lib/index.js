"use strict";var n=require("path"),e=require("fs");function t(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var r=t(n),i=function(n,e){return 0===n.files.length&&0===n.folders.length?"":function(n){return"---\ntitle: "+n.title+"\n---\n## 该章节包含以下内容"}({title:e})+"\n  \n  "+n.files.map((function(n){return"\n- [".concat(n.replace(".md",""),"](").concat(n,")\n\n  ")})).join("")+n.folders.map((function(n){var e=n.items.map((function(e){return"\n- [".concat(e.replace(".md",""),"](").concat(n.link+"/"+e,")\n\n  ")})).join("");return"\n#### [".concat(n.title,"专题](").concat(n.link,")\n    ")+e})).join("")},o={subNavShow:[],ignoreFolders:[],ignoreFiles:[],dirPrefix:"📂  ",filePrefix:"✏️  ",deep:2};function c(){return o||{}}var u=function(n,t,i){return void 0===t&&(t=[]),void 0===i&&(i=[]),e.readdirSync(n).sort().filter((function(o){var c=e.statSync(r.default.join(n,o)),u=o.slice(o.lastIndexOf(".")+1);return c.isFile()&&t.includes(u)&&s(o)&&!i.includes(o)}))},s=function(n){return"readme.md"!==n.toLocaleLowerCase()},a=function(n,t){void 0===n&&(n=".");var i=e.readdirSync(n),o=[];return i.forEach((function(i){var c=r.default.join(n,i);e.statSync(c).isDirectory()&&!t.includes(i)&&o.push(c)})),o},l=function(n,t,o){void 0===t&&(t=[]),void 0===o&&(o=[]);var c={files:u(n,["md"],o),folders:a(n,t).map((function(e){return{title:e.substring(e.lastIndexOf("/")+1),link:e.replace(n,"."),items:u(e,["md"],o)||[]}}))},s=i(c,n.substring(n.lastIndexOf("/")+1)),l=r.default.join(n,"./README.md");e.writeFileSync(l,s)},f=a,d=l,v=function(n,e){return void 0===e&&(e=[]),a(n,e).length>0},p=function(n,e){void 0===e&&(e="");var t=c(),r=u(n,["md"],t.ignoreFiles);return l(n),r.map((function(n){return e+n}))},m=function(n,e,t){void 0===t&&(t="/");var r=c();if(e>=r.deep)return[];var i=[];f(n,r.ignoreFolders).forEach((function(n){var o=n.substring(n.lastIndexOf("/")+1),c=t+o+"/";d(n),v(n,r.ignoreFolders)?i.push({text:"".concat(r.dirPrefix).concat(o),link:c,items:0===e||r.subNavShow.includes(o)?m(n,e+1,c):[]}):i.push({text:"".concat(r.dirPrefix).concat(o),link:c})}));var o=[];return(o=p(n,t)).length>0&&o.sort().filter((function(n){return!r.ignoreFiles.includes(n.substring(n.lastIndexOf("/")+1,n.lastIndexOf(".")))})).forEach((function(n){i.push({text:"".concat(r.filePrefix).concat(n.substring(n.lastIndexOf("/")+1,n.lastIndexOf("."))),link:n})})),i};module.exports=function(e){e||(e=o),function(n){o=n}(Object.assign({},o,e));var t=n.resolve(process.cwd(),"docs");return m(t,0)};