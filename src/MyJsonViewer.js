import React, { useState } from 'react';

function MyJsonViewer({ json }) {
    const data2 = {
        expand: true,
        children: {
            t1: {
                expand: true,
                children: {
                    t1_1: {
                        expand: true,
                        children: {
                            t1_1_1: {
                                expand: true
                            },
                            t1_1_2: {
                                expand: true
                            }
                        }
                    },
                    t1_2: {
                        expand: true,
                        children: {
                            t1_2_1: {
                                expand: true
                            }
                        }
                    }
                }
            },
            t2: {
                expand: true,
                children: {
                    t2_1: {
                        expand: true
                    }
                }
            }
        }
    }

    const RenderJson2 = ({ data }) => {
        //const [isExpanded, setIsExpanded] = useState(data.expand)
        const toggleExpand = () => {
            console.log("click!")
        }
        return (
            <div>
                {data.expand && data.children && (
                    Object.keys(data.children).map((child) => {
                        return (
                            <div style={{ paddingLeft: "20px" }}> 
                                {child}
                                <button onClick={()=> toggleExpand()}>{data.children[child].expand ? '-' : '+'}</button>
                                {data.children[child] && (<RenderJson2 data={data.children[child]}/>)}
                            </div>
                        )
                    })
                )
                }
            </div>
        );
    };


    return (
        RenderJson2({ data: data2 })
    );
}

export default MyJsonViewer;