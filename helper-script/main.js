const fs = require('fs');
const path = require('path');

// add code to automate the process of creating a new folder and file here

// read docs/_data/page_metadata.json
const pageMetadata = require('../docs/_data/page_metadata.json');

async function main() {
    // traverse /docs/guide, /docs/help and docs/resources
    const dirs = ['guide', 'help', 'resources'];

    for (let dir of dirs) {
        const dirPath = path.join(__dirname, '..', 'docs', dir);
        const files = fs.readdirSync(dirPath);

        for (let file of files) {
            // ignore file name "home.md"
            if (file === 'home.md') {
                continue;
            }

            // get relative path
            const filePath = path.join(dir, file);
            // convert backslash to slash and add a heading slash
            const url = '/' + filePath.replace(/\\/g, '/').replace('.md', '');
            
            // open the file and read the front matter section (between --- and ---)
            const fileContent = fs.readFileSync(path.join(dirPath, file), 'utf-8');
            const frontMatter = fileContent.split('---')[1];
            // parse the front matter as a yml object (no library needed)
            let frontMatterObj = {};
            if (frontMatter) {
                frontMatterObj = frontMatter.split('\n').reduce((acc, line) => {
                    const [key, value] = line.split(': ');
                    acc[key] = value;
                    return acc;
                }, {});
            }

            // check if url exists in page_metadata.json
            if (!pageMetadata.find(page => page.path === url)) {
                console.log(`Missing url: ${url}`);

                // add url to page_metadata.json
                pageMetadata.push({
                    ...frontMatterObj,
                    category: dir,
                    title: frontMatterObj.title || file.replace('.md', '').replace(/-/g, ' '),
                    path: url,
                    description: frontMatterObj.description || "Placeholder",
                    cover: frontMatterObj.cover || "https://osudroid.moe/assets/img/logo.png"
                });
            }
            else {
                // update the found entry
                const index = pageMetadata.findIndex(page => page.path === url);
                pageMetadata[index] = {
                    ...frontMatterObj,
                    category: dir,
                    title: frontMatterObj.title || (pageMetadata[index].title ? pageMetadata[index].title : file.replace('.md', '').replace(/-/g, ' ')),
                    path: url,
                    description: frontMatterObj.description ||  (pageMetadata[index].description ? pageMetadata[index].description : "Placeholder"),
                    cover: frontMatterObj.cover ||  (pageMetadata[index].cover ? pageMetadata[index].cover : "https://osudroid.moe/assets/img/logo.png"),
                };
            }

            console.log(filePath);
        }
    }

    // write to page_metadata.json
    fs.writeFileSync(path.join(__dirname, '..', 'docs', '_data', 'page_metadata.json'), JSON.stringify(pageMetadata, null, 4));
}

main();