'use strict';
let whilst = async (test, callback) => {
    while (test()) {
        try {
            await callback();
        } catch (err) {
            console.log("async whilst err " + err)
        }
    }
    return "success"
};

export default { whilst }