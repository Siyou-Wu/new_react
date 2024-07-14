import React, { useState } from 'react';

function MyJsonViewer({ json }) {
    const data3 = {
        expand: true,
        children: {
            t1: {
                expand: true,
                children: {
                    t1_1: {
                        expand: true,
                        children: {
                            t1_1_1: {
                                expand: true,
                                children: {
                                    t1_1_1_1: {
                                        expand: true,
                                        children: {
                                            t1_1_1_1_1: {
                                                expand: true
                                            },
                                            t1_1_1_1_2: {
                                                expand: true
                                            }
                                        }
                                    },
                                    t1_1_1_2: {
                                        expand: true
                                    }
                                }
                            },
                            t1_1_2: {
                                expand: true,
                                children: {
                                    t1_1_2_1: {
                                        expand: true
                                    }
                                }
                            }
                        }
                    },
                    t1_2: {
                        expand: true,
                        children: {
                            t1_2_1: {
                                expand: true,
                                children: {
                                    t1_2_1_1: {
                                        expand: true,
                                        children: {
                                            t1_2_1_1_1: {
                                                expand: true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            t2: {
                expand: true,
                children: {
                    t2_1: {
                        expand: true,
                        children: {
                            t2_1_1: {
                                expand: true,
                                children: {
                                    t2_1_1_1: {
                                        expand: true
                                    },
                                    t2_1_1_2: {
                                        expand: true,
                                        children: {
                                            t2_1_1_2_1: {
                                                expand: true
                                            }
                                        }
                                    }
                                }
                            },
                            t2_1_2: {
                                expand: true
                            }
                        }
                    },
                    t2_2: {
                        expand: true,
                        children: {
                            t2_2_1: {
                                expand: true,
                                children: {
                                    t2_2_1_1: {
                                        expand: true
                                    }
                                }
                            }
                        }
                    }
                }
            },
            t3: {
                expand: true,
                children: {
                    t3_1: {
                        expand: true,
                        children: {
                            t3_1_1: {
                                expand: true
                            }
                        }
                    }
                }
            }
        }
    };
    
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

    const RenderJson2 = ({ data, layer }) => {
        
        const [isExpanded, setIsExpanded] = useState(data.expand)
        const toggleExpand = () => {
            setIsExpanded(!isExpanded);
            console.log("current data, layer",layer, data)
        }
        return (
            <div>
                <p>layer is {layer}</p>
                <button onClick={()=> toggleExpand()}>{isExpanded ? '-' : '+'}</button>
                {isExpanded && data.children && (
                    Object.keys(data.children).map((child) => {
                        return (
                            <div style={{ paddingLeft: "20px" }}> 
                                {child}
                                {data.children[child] && (<RenderJson2 data={data.children[child]} layer={layer + 1}/>)}
                            </div>
                        )
                    })
                )
                }
            </div>
        );
    };


    return (
        RenderJson2({ data: data3, layer: 0 })
    );
}

export default MyJsonViewer;