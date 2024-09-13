function en_convert(type) {
        let content = document.getElementById("content").value;  // 获取文本框内容
        let tabsize = document.getElementById("tabsize").value;  // 获取选择的转换规则

        if (type === 1) {
            // 转为大写
            if (tabsize == 0) {
                // 全部大写
                document.getElementById("content").value = content.toUpperCase();
            } else if (tabsize == 1) {
                // 每个单词首字母大写
                document.getElementById("content").value = content.toLowerCase().replace(/\b\w/g, function (match) {
                    return match.toUpperCase();
                });
            } else if (tabsize == 2) {
                // 每行首字母大写
                document.getElementById("content").value = content.toLowerCase().split('\n').map(function (line) {
                    return line.charAt(0).toUpperCase() + line.slice(1);
                }).join('\n');
            } else if (tabsize == 3) {
                // 每句首字母大写
                document.getElementById("content").value = content.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (match) {
                    return match.toUpperCase();
                });
            }
        } else if (type === 2) {
            // 转为小写
            document.getElementById("content").value = content.toLowerCase();
        }
    }

    // 复制到剪贴板功能
    var clipboard = new ClipboardJS('#copyallcode'); 
    clipboard.on('success', function (e) {
        alert("内容已复制到剪贴板!");
    });