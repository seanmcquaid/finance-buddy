const mockServiceSuccess = (service, methodName, response) => {
  jest.spyOn(service, methodName).mockResolvedValue(response);
};

export default mockServiceSuccess;
