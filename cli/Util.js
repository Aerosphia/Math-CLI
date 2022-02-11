export default {
    async sleep(ms = 2000) {
        return new Promise((res) => setTimeout(res, ms));
    },
};
