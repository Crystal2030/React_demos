## 1.如下代码，写一个obj.sayName方法，执行obj.sayName()一秒后将obj.name打印出来

```
let obj = {
    name: 'zhufeng',
    sayName: function(){
        // your own code
    }
};

obj.sayName();
```

将完整的代码放在“个人文件夹/es6/first.js”中。

## 2.将下面的代码翻译为es5，只要求实现功能即可，不要求翻译质量

```
class Animal{
    constructor(...args){
        [this.name, this.gender, this.age] = args;
    }

    getInfo(){
        console.log(`A ${this.age} years old ${this.gender} ${this.name}`);
    }
}

new Animal('cat', 'male', 'two').getInfo(); // A two years old male cat
```


将翻译后的代码放在“个人文件夹/es6/second.js”中。

温馨提示：使用babel编译的同学是不可能通过的。

## 3.写一个方法count，执行后在N秒后打印N，如在1秒后打印1，一直到10秒后

```
function count(){
   // your own code 
}
```

将完整的代码放在“个人文件夹/es6/third.js”中。

## 4.第一个webpack项目

使用webpack打包一个项目(包括自动编译es6，单独分离css、less文件，自动弹出浏览器，文件压缩等功能)完成后上传到自己的仓库中(是在自己的github中的仓库，不是课程公共仓库)，将你的项目地址添加到上周创建的“个人文件夹/profile.txt”中即可。