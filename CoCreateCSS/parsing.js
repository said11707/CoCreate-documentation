        let myStyle = document.styleSheets[0];
        let elements = document.querySelectorAll("[class]");
        // let classlist = [];
        let re = /.+:.+/;
        for (let element of elements) {
            for (let classname of element.classList) {
                if (re.exec(classname)) {
                    // classlist.push(classname);
                    let res = classname.split(":");
                    myStyle.insertRule(`.${res[0]}\\:${res[1]}{${res[0]}:${res[1]}}`);
                }
            }
        }
