import baseApi from '../../services';
import ResponseType from '../../types/ResponseType';

export const employeesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query<ResponseType, void>({
      query: () => '/employees'
    })
  })
});

export const { useGetEmployeeListQuery } = employeesApi;
