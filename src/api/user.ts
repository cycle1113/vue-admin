import request from '../utlis/request'

interface LoginParams{
    password:string;
    username:string;

}

interface LoginData{
    token:string;
    tokenHead:string;
}

interface newCompanyData{
    companyname:string;
    creditcode:string;
    legalperson:string;
    phone:string;

}

interface AdminInfoData{
    icon:null;
    menus:unknown[];
    roles:string[];
    username:string;
}

interface ResponseData<T=null>{
    code:number;
    message:string;
    data?:T|null;
}

interface djResponseData<T>{
    data:T
}
// 登录接口
export const adminloginApi = (data:LoginParams):Promise<ResponseData<LoginData>> => request.post('/admin/login', data)

// 获取用户信息
export const adminInfo = ():Promise<ResponseData<AdminInfoData>> => request.get('/admin/info')

// 测试接口
export const newCompany = (data:newCompanyData):Promise<djResponseData<ResponseData>> => request.post('/api/newcompany', data)

// 测试定位
export const companyLocation = ():Promise<djResponseData<ResponseData<[{}]>>> => request.get('api/companyLocation')
