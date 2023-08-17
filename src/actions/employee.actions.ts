import { createAction } from '@reduxjs/toolkit';
import { EMPLOYEE_DISPATCH_TYPE } from '../consts/employee.consts';
import EmployeeType from '../types/EmployeeType';

export const addEmployee = createAction<EmployeeType>(EMPLOYEE_DISPATCH_TYPE.CREATE);
export const editEmployee = createAction<EmployeeType>(EMPLOYEE_DISPATCH_TYPE.EDIT);
export const deleteEmployee = createAction<{ id: string }>(EMPLOYEE_DISPATCH_TYPE.DELETE);
