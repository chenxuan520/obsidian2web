// 获取所有的 li 标签
const lis = document.querySelectorAll('li');
const hightlight_regex = /==([^=]+)==/g;
const tag_regex = /(?:^|\s)#([^\d\s#.;,:?!()[\]{}<>][^\s#.;,:?!()[\]{}<>]+)(\s+|$)/g;
// const tag_regex = /(?:^|\s)(#[^\s#.;,:?!()[\]{}<>]+)\s?/g;

// 遍历每一个 li 标签
lis.forEach(li => {
    // 获取 li 标签内的文本内容
    let text = li.textContent;

    // 使用正则表达式查找符合高亮条件的部分
    let match;
    let isChange = false;
    while ((match = hightlight_regex.exec(text)) !== null) {
        isChange = true;
        // 匹配到的部分
        const matchedText = match[0];
        // 匹配到的内容
        const matchedContent = match[1];

        // 将匹配到的部分用 <span> 标签包裹，并修改样式
        text = text.replace(matchedText, `<span  style="background-color: #786512;">${matchedContent}</span>`);
        console.log(match);
    }
    // 将修改后的文本内容重新赋值给 li 标签
    if (isChange) {
        li.innerHTML = text;
    }

    // 使用正则表达式查找符合tag条件的部分
    isChange = false;
    while ((match = tag_regex.exec(text)) !== null) {
        isChange = true;
        // 匹配到的部分
        const matchedText = match[0];
        // 匹配到的内容
        const matchedContent = match[1];

        // 将匹配到的部分用 <span> 标签包裹，并修改样式
        text = text.replace(matchedText, `<span style="color: #9933ff;"> #<a href="?search=%23${matchedContent}" style="color: #9933ff;">${matchedContent} </a></span>`);

        console.log(match);
    }
    // 将修改后的文本内容重新赋值给 li 标签
    if (isChange) {
        li.innerHTML = text;
    }

});

