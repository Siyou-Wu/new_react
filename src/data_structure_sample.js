// Sample nested Json Object:
const nested_jsonObj = {
    tier1_1: {
        tier1_1_1: {
            tier1_1_1_1: "33",
            tier1_1_1_2: "44"
        },
        tier1_1_2: {
            tier1_1_2_1: "55"
        }
    }
}

const expand_recorder = {
    tier1_1: {
        expand: true,
        children: {
            tier1_1_1: {
                expand: true,
                children: {
                    tier1_1_1_1: {
                        expand: true,
                        children: {}
                    },
                    tier1_1_1_2: {
                        expand: true,
                        children: {}
                    }
                }
            },
            tier1_1_2: {
                expand: true,
                children: {
                    tier1_1_2_1: {
                        expand: true,
                        children: {}
                    }
                }
            }
        }
    }
}