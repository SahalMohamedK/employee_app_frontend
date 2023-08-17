import baseApi from '../../services';
import ResponseType from '../../types/ResponseType';

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployee: builder.query<ResponseType, string>({
      query: (id) => `/employees/${id}`
    })
  })
});

export const { useLazyGetEmployeeQuery } = employeeApi;
