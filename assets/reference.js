// 这个文件是为了解决mdbook对于引用块不能自动换行的问题
// 以及无法正确渲染[!info]的问题

// 获取所有的 <blockquote> 元素
var blockquotes = document.querySelectorAll('blockquote');
var infoRegex = /\[!(\w+)\]\x20*(.*)/g;

// 遍历每个 <blockquote> 元素
blockquotes.forEach(function(blockquote) {
    // 获取该 <blockquote> 元素内的所有 <p> 元素
    var paragraphs = blockquote.querySelectorAll('p');

    // 遍历每个 <p> 元素
    paragraphs.forEach(function(paragraph) {
        // 获取原始文本内容
        var originalText = paragraph.textContent;

        // 判断是否是特殊语法
        var match;
        while ((match = infoRegex.exec(originalText)) !== null) {
            // 匹配到了 [!info] 语法
            var infoContent = match[2]; // 获取匹配到的内容
            var infoHTML = "<strong>"+match[1]+" "+infoContent+"</strong>"; // 转换成对应的 HTML 格式
            originalText = originalText.replace(match[0], infoHTML); // 将匹配到的 Markdown 替换成 HTML 格式
            console.log(match);
        }

        // 将文本内容按换行符分割成数组（注意：这里假设文本内容中的换行符是 \n，但实际可能取决于文本来源）
        var lines = originalText.split('\n');
        // 如果需要在浏览器中显示换行，并且文本内容来自不包含HTML的源（例如，用户输入），
        // 你可以使用 <br> 标签。否则，<p> 元素本身已经表示换行。
        var newText = lines.join('<br>'); // 在每行文本之间添加 <br> 标签
        // 将新文本内容设置回 <p> 元素（作为HTML）
        paragraph.innerHTML = newText;
    });
});
