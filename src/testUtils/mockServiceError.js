const mockServiceError = (service, methodName, response) => {
  jest.spyOn(service, methodName).mockRejectedValue(response);
};

export default mockServiceError;
