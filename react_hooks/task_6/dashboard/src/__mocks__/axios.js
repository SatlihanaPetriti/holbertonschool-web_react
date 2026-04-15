const mockAxios = {
    get: jest.fn(),
    reset() {
        this.get.mockReset();
    },
};
export default mockAxios;