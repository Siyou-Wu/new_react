import React, { useState } from 'react';

function MyJsonViewer(jsonProps) {
    // Get props
    const json = jsonProps.json;

    //build toggle expand variable for json object
    const buildToggleExpand = (jsonObj) => {
        if (typeof jsonObj !== 'object') {
            return { expand: true };
        }
        const returnObj = {};
        returnObj['expand'] = true;
        returnObj['children'] = {};
        // iterate through json object
        Object.keys(jsonObj).forEach((key) => {
            returnObj['children'][key] = buildToggleExpand(jsonObj[key]);
        });
        return returnObj;
    };
    const [expandRecorder, toggleExpand] = useState(buildToggleExpand(json));
    console.log('expandRecorder', expandRecorder);
    console.log('json', json);


    const global_render_array = [];

    const put_render_into_array = (obj, localExpandRecorder, layer, path) => {
        if (localExpandRecorder.children === undefined) {
            return null;
        }
        for (let key in localExpandRecorder.children) {
            console.log('key and layer', key, layer);
            global_render_array.push({ text: key, layer: layer, path: [...path, key]});
            put_render_into_array(obj[key], localExpandRecorder.children[key], layer + 1, [...path, key]);
        }
    };

    put_render_into_array(json, expandRecorder, 0,[]);

    // for (let i = 0; i < global_render_array.length; i++) {
    //     elements.push(
    //       <div key={i} style={{ marginLeft: global_render_array[i].layer * 20 }}>
    //         {global_render_array[i].text}
    //       </div>
    //     );
    //   }

    return (
        <div>
            {
                global_render_array.map((item, i) => (
                    <div key={i} style={{ marginLeft: item.layer * 20 }}>
                        {item.text}
                        <button onClick={() => {
                            const newExpandRecorder = expandRecorder;
                            let temp = newExpandRecorder;
                            for (let i = 0; i < item.path.length; i++) {
                                temp = temp.children[item.path[i]];
                            }
                            temp.expand = !temp.expand;
                            toggleExpand(newExpandRecorder);
                        }}> {expandRecorder.children[item.text] ? '+' : '-'} </button>
                    </div>
                ))
            }
        </div>
    );
}

export default MyJsonViewer;


// // display json object, and add a button to toggle fold
// return (
//     <div>
//         <button onClick={() => toggleExpand(localExpandRecorder['expand'])}>
//             {localExpandRecorder['expand'] ? '+' : '-'}
//         </button>
//         <span>{key}:</span>
//         {!localExpandRecorder['expand'] ? null : renderValue(value)}
//         {
//             Object.keys(obj).map((key) => {
//                 if (key === 'expand') {
//                     return null;
//                 } else {
//                     renderJson(obj[key], localExpandRecorder[key], layer + 1);
//                 }
//             })
//         }
//     </div>
// );