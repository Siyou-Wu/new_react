const data1 = [
    {
        isFolder: true,
        name: "public",
        children: [
            {
                isFolder: false,
                name: "index.html",
            },
        ],
    },
    {
        isFolder: true,
        name: "src",
        children: [
            {
                isFolder: true,
                name: "components",
                children: [
                    {
                        isFolder: true,
                        name: "home",
                        children: [
                            {
                                isFolder: false,
                                name: "Home.js",
                            },
                        ],
                    },
                ],
            },
            {
                isFolder: false,
                name: "App.js",
            },
        ],
    },
];
const RenderJson1 = ({ data }) => {
    return (
        <div style={{ paddingLeft: "20px" }}>
            {data.map((parent) => {
                return (
                    <div key={parent.name}>
                        <span>{parent.name}</span>
                        {/* Base Condition and Rendering recursive component from inside itself */}
                        <div>
                            {parent.children && <RenderJson1 data={parent.children} />}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}